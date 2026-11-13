"use server";

import { headers } from "next/headers";
import { site } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale } from "@/i18n/config";
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

  const requestedLocale = read("locale");
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const messages = getDictionary(locale).contact.form.errors;
  const withEmail = (template: string) =>
    template.replaceAll("{email}", site.email);

  // Honeypot: real visitors never fill this off-screen field.
  if (read("website_url") !== "") {
    return {
      status: "success",
      message: messages.success,
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
    return errorState(messages.rateLimited);
  }

  const name = read("name");
  const email = read("email");
  const company = read("company");
  const projectType = read("projectType") || "Not sure";
  const budget = read("budget") || "Not sure yet";
  const message = read("message");

  const errors: Partial<Record<ContactField, string>> = {};

  if (name.length < 2 || name.length > 80) {
    errors.name = messages.name;
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    errors.email = messages.email;
  }

  if (company.length > 120) {
    errors.company = messages.company;
  }

  if (!PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
    errors.projectType = messages.projectType;
  }

  if (!BUDGET_RANGES.includes(budget as (typeof BUDGET_RANGES)[number])) {
    errors.budget = messages.budget;
  }

  if (message.length < 20 || message.length > 3000) {
    errors.message = messages.message;
  }

  if (Object.keys(errors).length > 0) {
    return errorState(messages.checkFields, errors);
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return errorState(withEmail(messages.notConnected));
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
        locale,
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
      return errorState(withEmail(messages.deliveryFailed));
    }
  } catch {
    return errorState(withEmail(messages.couldNotDeliver));
  }

  return {
    status: "success",
    message: messages.success,
    errors: {},
  };
}
