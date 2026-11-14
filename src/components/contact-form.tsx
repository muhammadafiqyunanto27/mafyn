"use client";

import { useActionState, useState, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  ChevronDown,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { sendInquiry } from "@/app/actions/contact";
import { initialContactState } from "@/lib/contact";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

type FormCopy = Dictionary["contact"]["form"];

type ContactFormProps = {
  locale: Locale;
  copy: FormCopy;
  email: string;
};

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p
      id={id}
      className="mt-1.5 flex items-start gap-1.5 text-[0.75rem] leading-snug text-fg"
    >
      <AlertCircle
        aria-hidden="true"
        className="mt-px h-3.5 w-3.5 shrink-0"
        strokeWidth={1.75}
      />
      {children}
    </p>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-fg-subtle">
      {" "}
      *
    </span>
  );
}

function ContactFormFields({
  onReset,
  copy,
  locale,
  email,
}: {
  onReset: () => void;
  copy: FormCopy;
  locale: Locale;
  email: string;
}) {
  const [state, formAction, pending] = useActionState(
    sendInquiry,
    initialContactState,
  );
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="card flex min-h-[32rem] flex-col p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
          <p className="label text-fg">{copy.title}</p>
          <p className="label text-fg-subtle">{copy.received}</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-lime text-forest">
            <Check aria-hidden="true" className="h-6 w-6" strokeWidth={2} />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em]">
            {copy.successTitle}
          </h3>
          <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-fg-muted">
            {copy.successBody}
          </p>
          <button
            type="button"
            onClick={onReset}
            className="btn btn-secondary mt-6"
          >
            <RotateCcw aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            {copy.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
        <p className="label text-fg">{copy.title}</p>
        <p className="max-w-[22ch] text-right text-xs leading-snug text-fg-subtle">
          {copy.replyByEmail}
        </p>
      </div>

      <p className="mt-4 text-xs text-fg-muted">{copy.requiredNote}</p>

      {state.status === "error" && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2.5 rounded-md border border-fg/25 bg-surface-strong px-4 py-3"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-fg"
            strokeWidth={1.75}
          />
          <div className="text-sm leading-relaxed">
            <p className="font-medium">{copy.errorTitle}</p>
            <p className="text-fg-muted">{state.message}</p>
            <a href={`mailto:${email}`} className="mt-1 inline-block link-underline">
              {email}
            </a>
          </div>
        </div>
      )}

      <form action={formAction} aria-busy={pending} className="mt-5">
        <input type="hidden" name="locale" value={locale} />

        {/* Honeypot — hidden from people, visible to bots only. */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="website_url">{copy.honeypot}</label>
          <input
            id="website_url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label text-fg-muted">
              {copy.name}
              <RequiredMark />
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              placeholder={copy.namePlaceholder}
              className="field mt-2"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <FieldError id="name-error">{errors.name}</FieldError>}
          </div>

          <div>
            <label htmlFor="email" className="label text-fg-muted">
              {copy.email}
              <RequiredMark />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              className="field mt-2"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <FieldError id="email-error">{errors.email}</FieldError>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="label text-fg-muted">
              {copy.company}
              <span className="normal-case tracking-normal text-fg-subtle">
                {" "}
                {copy.optional}
              </span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              maxLength={120}
              autoComplete="organization"
              placeholder={copy.companyPlaceholder}
              className="field mt-2"
              aria-invalid={errors.company ? true : undefined}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && (
              <FieldError id="company-error">{errors.company}</FieldError>
            )}
          </div>

          <div>
            <label htmlFor="projectType" className="label text-fg-muted">
              {copy.projectType}
              <RequiredMark />
            </label>
            <div className="relative">
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue="Not sure"
                className="field mt-2 pr-10"
                aria-invalid={errors.projectType ? true : undefined}
                aria-describedby={
                  errors.projectType ? "projectType-error" : undefined
                }
              >
                {copy.projectTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-[2.05rem] h-4 w-4 text-fg-subtle"
                strokeWidth={1.6}
              />
            </div>
            {errors.projectType && (
              <FieldError id="projectType-error">{errors.projectType}</FieldError>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="label text-fg-muted">
              {copy.budget}
              <span className="normal-case tracking-normal text-fg-subtle">
                {" "}
                {copy.optional}
              </span>
            </label>
            <div className="relative">
              <select
                id="budget"
                name="budget"
                defaultValue="Not sure yet"
                className="field mt-2 pr-10"
                aria-invalid={errors.budget ? true : undefined}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              >
                {copy.budgets.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-[2.05rem] h-4 w-4 text-fg-subtle"
                strokeWidth={1.6}
              />
            </div>
            {errors.budget && (
              <FieldError id="budget-error">{errors.budget}</FieldError>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="label text-fg-muted">
              {copy.details}
              <RequiredMark />
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={20}
              maxLength={3000}
              placeholder={copy.detailsPlaceholder}
              className="field mt-2 min-h-32 resize-y"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <FieldError id="message-error">{errors.message}</FieldError>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="btn btn-primary mt-6 w-full"
        >
          {pending ? (
            <>
              <Loader2
                aria-hidden="true"
                className="h-4 w-4 animate-spin motion-reduce:animate-none"
                strokeWidth={1.75}
              />
              {copy.sending}
            </>
          ) : (
            <>
              {copy.send}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={1.75}
              />
            </>
          )}
        </button>

        <p className="mt-3 text-xs leading-relaxed text-fg-subtle">
          {copy.privacy}
        </p>
      </form>
    </div>
  );
}

export function ContactForm({ locale, copy, email }: ContactFormProps) {
  const [instance, setInstance] = useState(0);

  return (
    <ContactFormFields
      key={instance}
      onReset={() => setInstance((value) => value + 1)}
      copy={copy}
      locale={locale}
      email={email}
    />
  );
}
