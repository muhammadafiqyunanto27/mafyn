"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-line bg-canvas/92 backdrop-blur-md"
          : "border-b border-transparent bg-canvas"
      }`}
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
        <a
          href="#top"
          aria-label={`${site.name} — ${dict.a11y.backToTop}`}
          className="shrink-0 rounded-[0.625rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg"
        >
          <Wordmark descriptor="Studio" />
        </a>

        <nav
          aria-label={dict.a11y.primaryNav}
          className="hidden items-center gap-1 lg:flex"
        >
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-fg-muted transition-colors duration-150 hover:bg-surface hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeSwitch labels={{ ...dict.theme, label: dict.a11y.theme }} />
            <LanguageSwitch
              locale={locale}
              label={dict.a11y.language}
              variant="compact"
            />
          </div>

          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {dict.header.talk}
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="btn-icon lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
            <span className="sr-only">{dict.a11y.openMenu}</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label={dict.a11y.mobileNav}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-canvas p-0 text-fg backdrop:bg-forest/40 lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[4.75rem] shrink-0 items-center justify-between border-b border-line px-[var(--gutter)]">
            <Wordmark descriptor="Studio" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn-icon"
            >
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              <span className="sr-only">{dict.a11y.closeMenu}</span>
            </button>
          </div>

          <nav
            aria-label={dict.a11y.mobileNav}
            className="flex-1 overflow-y-auto px-[var(--gutter)] py-6"
          >
            <ul className="flex flex-col">
              {dict.nav.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="label text-fg-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-[-0.03em]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-fg-muted"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <p className="label text-fg-subtle">{dict.a11y.theme}</p>
              <ThemeSwitch
                labels={{ ...dict.theme, label: dict.a11y.theme }}
                variant="expanded"
              />
            </div>

            <div className="mt-6 space-y-3">
              <p className="label text-fg-subtle">{dict.a11y.language}</p>
              <LanguageSwitch
                locale={locale}
                label={dict.a11y.language}
                variant="expanded"
              />
            </div>
          </nav>

          <div className="shrink-0 border-t border-line px-[var(--gutter)] py-5">
            <ButtonLink
              href="#contact"
              size="lg"
              className="w-full"
            >
              {dict.header.startConversation}
            </ButtonLink>
            <p className="mt-4 flex items-center justify-between gap-3 text-xs text-fg-muted">
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
              <span className="label">{dict.brand.locationShort}</span>
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
