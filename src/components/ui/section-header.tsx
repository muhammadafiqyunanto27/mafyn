import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  intro,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`border-t border-line pt-5 md:pt-6 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-fg-muted">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-fg/20"
          />
          {index} / {label}
        </p>
        <span
          aria-hidden="true"
          className="hidden h-px flex-1 bg-line sm:block"
        />
      </div>
      <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-12 md:gap-8">
        <h2 className="display-section max-w-[22ch] md:col-span-7">
          {title}
        </h2>
        {intro && (
          <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted md:col-span-5 md:pt-2 md:text-base">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
