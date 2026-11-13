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
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`border-t pt-6 md:pt-8 ${
        dark ? "border-paper/15" : "border-ink/15"
      } ${className}`}
    >
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <p
          className={`label md:col-span-3 ${
            dark ? "text-paper/55" : "text-ink/55"
          }`}
        >
          {index} / {label}
        </p>
        <div className="md:col-span-9">
          <h2
            className={`max-w-[24ch] text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.02] tracking-[-0.035em] ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-5 max-w-[58ch] text-[0.9375rem] leading-relaxed md:text-base ${
                dark ? "text-paper/65" : "text-ink/65"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
