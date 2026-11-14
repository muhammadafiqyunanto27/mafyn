import { Mail, MapPin, MessageSquare } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Wordmark } from "@/components/ui/wordmark";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="section-dark" aria-labelledby="footer-heading">
      <div className="container-page pt-14 pb-8 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div id="footer-heading">
              <Wordmark descriptor="Studio" />
            </div>

            <p className="mt-5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-fg-muted">
              {dict.footer.descriptor}
            </p>

            <div className="mt-6">
              <ButtonLink href="#contact" size="sm">
                {dict.header.startConversation}
              </ButtonLink>
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs text-fg-subtle">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
              {dict.brand.tagline}
            </p>
          </div>

          <nav aria-label={dict.a11y.footerNav} className="md:col-span-3">
            <p className="label text-fg-subtle">{dict.footer.navigate}</p>
            <ul className="mt-4 space-y-2.5">
              {dict.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label text-fg-subtle">{dict.footer.services}</p>
            <ul className="mt-4 space-y-2.5">
              {dict.services.items.map((service) => (
                <li key={service.index}>
                  <a
                    href="#services"
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label text-fg-subtle">{dict.footer.contact}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                >
                  <Mail aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.6} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  strokeWidth={1.6}
                />
                <span>
                  {site.whatsapp}
                  <span className="mt-1 block text-[0.6875rem] text-fg-subtle">
                    {dict.footer.placeholder}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  strokeWidth={1.6}
                />
                <span>
                  {dict.footer.indonesia}
                  <span className="mt-1 block text-[0.6875rem] text-fg-subtle">
                    {dict.footer.workingWorldwide}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-subtle">
            © 2026 MAFYN. {dict.footer.rights}
          </p>
          <p className="text-xs text-fg-subtle">{dict.brand.location}</p>
        </div>
      </div>
    </footer>
  );
}
