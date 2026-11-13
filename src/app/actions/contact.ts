"use server";

import { headers } from "next/headers";
import { site } from "@/content/site";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  type ContactField,
  type ContactState,
} from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const previous = (recentSubmissions.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (previous.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(key, previous);
    return true;
  }

  previous.push(now);
  recentSubmissions.set(key, previous);

  // Keep the in-memory store bounded on long-running processes.
  if (recentSubmissions.size > 5000) {
    recentSubmissions.clear();
  }

  return false;
}

function errorState(
  message: string,
  errors: Partial<Record<ContactField, string>> = {},
): ContactState {
  return { status: "error", message, errors };
}

export async function sendInquiry(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  // Honeypot: real visitors never fill this off-screen field.
  if (read("website_url") !== "") {
    return {
      status: "success",
      message: "Thanks — your message has been received.",
      errors: {},
    };
  }

  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const clientKey =
    forwarded?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(clientKey)) {
    return errorState(
      "Too many inquiries were sent from this connection. Please wait a few minutes and try again.",
    );
  }

  const name = read("name");
  const email = read("email");
  const company = read("company");
  const projectType = read("projectType") || "Not sure";
  const budget = read("budget") || "Not sure yet";
  const message = read("message");

  const errors: Partial<Record<ContactField, string>> = {};

  if (name.length < 2 || name.length > 80) {
    errors.name = "Please enter your name (2–80 characters).";
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    errors.email = "Please enter a valid email address.";
  }

  if (company.length > 120) {
    errors.company = "Company name is too long (120 characters maximum).";
  }

  if (!PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
    errors.projectType = "Please choose a project type.";
  }

  if (!BUDGET_RANGES.includes(budget as (typeof BUDGET_RANGES)[number])) {
    errors.budget = "Please choose a budget range.";
  }

  if (message.length < 20 || message.length > 3000) {
    errors.message =
      "Please describe the project in at least 20 characters (3000 maximum).";
  }

  if (Object.keys(errors).length > 0) {
    return errorState("Please check the highlighted fields.", errors);
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return errorState(
      `The inquiry form is not connected to an inbox yet. Please email ${site.email} directly, or contact us on WhatsApp.`,
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        source: site.url,
        submittedAt: new Date().toISOString(),
        name,
        email,
        company,
        projectType,
        budget,
        message,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      return errorState(
        `Something went wrong while sending your inquiry. Please try again, or email ${site.email} directly.`,
      );
    }
  } catch {
    return errorState(
      `The message could not be delivered. Please try again, or email ${site.email} directly.`,
    );
  }

  return {
    status: "success",
    message: "Thanks — your message has been received.",
    errors: {},
  };
}
