"use client";

import { useActionState, useState, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { sendInquiry } from "@/app/actions/contact";
import { site } from "@/content/site";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  initialContactState,
} from "@/lib/contact";

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p
      id={id}
      className="mt-2 flex items-start gap-1.5 text-[0.75rem] leading-snug text-paper/85"
    >
      <AlertCircle
        aria-hidden="true"
        className="mt-px h-3.5 w-3.5 shrink-0"
        strokeWidth={1.5}
      />
      <span>{children}</span>
    </p>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-paper/40">
      {" "}
      *
    </span>
  );
}

function ContactFormFields({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(
    sendInquiry,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex min-h-[30rem] flex-col border border-paper/20 bg-paper/[0.025] p-5 sm:p-8"
      >
        <div className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-5">
          <h3 className="font-display text-lg tracking-[-0.01em]">
            Project inquiry
          </h3>
          <span className="label text-paper/40">Received</span>
        </div>

        <div className="my-auto py-12">
          <span className="grid h-11 w-11 place-items-center border border-paper/30 text-paper">
            <Check aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h4 className="mt-6 font-display text-2xl tracking-[-0.02em]">
            Message received.
          </h4>
          <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-paper/65">
            Thanks for the details. We&apos;ll review your inquiry and reply by
            email.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="group inline-flex items-center justify-center gap-2.5 border border-paper/30 px-5 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10"
        >
          Send another inquiry
          <RotateCcw
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:-rotate-45"
            strokeWidth={1.5}
          />
        </button>
      </div>
    );
  }

  const errors = state.errors;

  return (
    <div className="relative border border-paper/20 bg-paper/[0.025] p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-4 border-b border-paper/15 pb-5">
        <h3 className="font-display text-lg tracking-[-0.01em]">
          Project inquiry
        </h3>
        <span className="label text-paper/40">Reply by email</span>
      </div>

      <p className="mt-5 text-[0.75rem] text-paper/45">
        Fields marked * are required.
      </p>

      {state.status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 border border-paper/30 bg-paper/[0.04] px-4 py-3.5"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-paper"
            strokeWidth={1.5}
          />
          <div>
            <p className="text-sm font-medium text-paper">Inquiry not sent</p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-paper/70">
              {state.message}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-2 inline-block text-[0.8125rem] text-paper/85"
            >
              {site.email}
            </a>
          </div>
        </div>
      )}

      <form
        action={formAction}
        aria-busy={pending}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="website_url">Leave this field empty</label>
          <input
            id="website_url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Name
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
            placeholder="Your full name"
            className="field"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <FieldError id="name-error">{errors.name}</FieldError>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Email
            <RequiredMark />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <FieldError id="email-error">{errors.email}</FieldError>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Company
            <span className="font-normal text-paper/40"> (optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            placeholder="Company or organization"
            className="field"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <FieldError id="company-error">{errors.company}</FieldError>
          )}
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Project type
            <RequiredMark />
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue="Not sure"
            className="field"
            aria-invalid={errors.projectType ? true : undefined}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <FieldError id="projectType-error">{errors.projectType}</FieldError>
          )}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Budget range
            <span className="font-normal text-paper/40"> (optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue="Not sure yet"
            className="field"
            aria-invalid={errors.budget ? true : undefined}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <FieldError id="budget-error">{errors.budget}</FieldError>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-[0.75rem] font-medium text-paper/80"
          >
            Project details
            <RequiredMark />
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={20}
            maxLength={3000}
            rows={5}
            placeholder="What are you building, and what needs to change?"
            className="field min-h-32 resize-y"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <FieldError id="message-error">{errors.message}</FieldError>
          )}
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="group flex w-full items-center justify-center gap-2.5 border border-paper bg-paper px-5 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-silver hover:bg-silver disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? (
              <>
                <Loader2
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin motion-reduce:animate-none"
                  strokeWidth={1.75}
                />
                Sending inquiry
              </>
            ) : (
              <>
                Send inquiry
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </>
            )}
          </button>
          <p className="mt-3 text-[0.6875rem] leading-relaxed text-paper/40">
            Your details are used only to reply to this inquiry. No mailing
            list, no third-party marketing.
          </p>
        </div>
      </form>
    </div>
  );
}

export function ContactForm() {
  const [instance, setInstance] = useState(0);

  return (
    <ContactFormFields
      key={instance}
      onReset={() => setInstance((value) => value + 1)}
    />
  );
}
