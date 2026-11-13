"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch";
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
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const themeLabels = {
    label: dict.a11y.theme,
    ...dict.theme,
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas transition-colors duration-200 ${
        scrolled ? "border-fg/15" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
        <a
          href="#top"
          aria-label={dict.a11y.backToTop}
          className="shrink-0"
        >
          <Wordmark descriptor={dict.brand.descriptor} />
        </a>

        <nav aria-label={dict.a11y.primaryNav} className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {dict.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-block py-2 text-[0.8125rem] font-medium text-fg/70 transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-fg transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeSwitch labels={themeLabels} />
            <LanguageSwitch locale={locale} label={dict.a11y.language} />
          </div>

          <a
            href="#contact"
            className="group hidden items-center gap-2 bg-fg px-4 py-2.5 text-[0.8125rem] font-medium text-canvas transition-colors duration-200 hover:bg-solid-hover sm:inline-flex"
          >
            {dict.header.talk}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="grid h-11 w-11 place-items-center border border-fg/20 text-fg transition-colors hover:border-fg hover:bg-fg hover:text-canvas lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">{dict.a11y.openMenu}</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label={dict.a11y.siteNavigation}
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-canvas p-0 text-fg backdrop:bg-ink/50 open:flex open:flex-col"
      >
        <div className="container-page flex h-[4.25rem] shrink-0 items-center justify-between border-b border-fg/15">
          <Wordmark descriptor={dict.brand.descriptor} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center border border-fg/20 text-fg transition-colors hover:border-fg hover:bg-fg hover:text-canvas"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">{dict.a11y.closeMenu}</span>
          </button>
        </div>

        <div className="container-page flex flex-1 flex-col justify-between overflow-y-auto py-10">
          <nav aria-label={dict.a11y.mobileNav}>
            <ul className="border-t border-fg/15">
              {dict.nav.map((item, index) => (
                <li key={item.href} className="border-b border-fg/15">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="label text-fg/45">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[2rem] leading-none tracking-[-0.03em]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-fg/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ThemeSwitch labels={themeLabels} variant="expanded" />
              <LanguageSwitch
                locale={locale}
                label={dict.a11y.language}
                variant="expanded"
              />
            </div>
          </nav>

          <div className="mt-12 space-y-4">
            <p className="label text-fg/45">{dict.header.startConversation}</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline block text-lg text-fg"
            >
              {site.email}
            </a>
            <p className="text-sm text-fg/60">{dict.brand.location}</p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
