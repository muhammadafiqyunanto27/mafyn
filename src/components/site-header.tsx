"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Wordmark } from "@/components/ui/wordmark";

export function SiteHeader() {
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

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper transition-colors duration-200 ${
        scrolled ? "border-ink/15" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-6 lg:h-[4.75rem]">
        <a
          href="#top"
          aria-label="MAFYN — back to top"
          className="shrink-0"
        >
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block ml-auto">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-block py-2 text-[0.8125rem] font-medium text-ink/70 transition-colors duration-150 hover:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 bg-ink px-4 py-2.5 text-[0.8125rem] font-medium text-paper transition-colors duration-200 hover:bg-slate sm:inline-flex"
          >
            Let&apos;s Talk
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
            className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-paper p-0 text-ink backdrop:bg-ink/50 open:flex open:flex-col"
      >
        <div className="container-page flex h-[4.25rem] shrink-0 items-center justify-between border-b border-ink/15">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="container-page flex flex-1 flex-col justify-between overflow-y-auto py-10">
          <nav aria-label="Mobile">
            <ul className="border-t border-ink/15">
              {nav.map((item, index) => (
                <li key={item.href} className="border-b border-ink/15">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="label text-ink/45">
                        0{index + 1}
                      </span>
                      <span className="font-display text-[2rem] leading-none tracking-[-0.03em]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-ink/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 space-y-4">
            <p className="label text-ink/45">Start a conversation</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline block text-lg text-ink"
            >
              {site.email}
            </a>
            <p className="text-sm text-ink/60">{site.location}</p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
