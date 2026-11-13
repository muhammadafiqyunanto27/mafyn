import { localeNames, localeShortNames, locales, type Locale } from "@/i18n/config";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
  variant?: "compact" | "expanded";
};

export function LanguageSwitch({
  locale,
  label,
  variant = "compact",
}: LanguageSwitchProps) {
  const expanded = variant === "expanded";

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex border border-fg/20 ${expanded ? "w-full" : ""}`}
    >
      {locales.map((item) => {
        const active = item === locale;
        const className = `flex items-center justify-center font-medium transition-colors duration-150 ${
          expanded ? "h-11 px-4 text-[0.6875rem] tracking-[0.08em]" : "h-9 px-3 text-[0.625rem] tracking-[0.1em]"
        } ${
          active
            ? "bg-fg text-canvas"
            : "text-fg/55 hover:bg-fg/10 hover:text-fg"
        }`;

        return active ? (
          <span
            key={item}
            aria-current="page"
            className={className}
            lang={item}
          >
            {localeShortNames[item]}
          </span>
        ) : (
          <a
            key={item}
            href={`/${item}`}
            hrefLang={item}
            lang={item}
            title={localeNames[item]}
            className={className}
          >
            {localeShortNames[item]}
          </a>
        );
      })}
    </div>
  );
}
