import { Mail, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

type ContactProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Contact({ locale, dict }: ContactProps) {
  const rows = [
    {
      icon: Mail,
      label: dict.contact.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MessageSquare,
      label: dict.contact.whatsappLabel,
      value: site.whatsapp,
      href: null,
    },
    {
      icon: MapPin,
      label: dict.contact.studioLabel,
      value: dict.brand.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-line"
    >
      <div className="container-page section-y">
        <div className="border-t border-line pt-5 md:pt-6">
          <p className="eyebrow text-fg-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-fg/20"
            />
            05 / {dict.contact.label}
          </p>
        </div>

        <div className="mt-6 grid gap-10 md:mt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2
              id="contact-heading"
              className="display-section max-w-[16ch]"
            >
              {dict.contact.heading}
            </h2>

            <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-relaxed text-fg-muted">
              {dict.contact.intro}
            </p>

            <dl className="mt-8 border-t border-line">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 border-b border-line py-4"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[0.625rem] border border-line bg-surface">
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 text-fg-muted"
                      strokeWidth={1.6}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <dt className="label text-fg-subtle">{label}</dt>
                    <dd className="mt-1 flex flex-wrap items-center gap-2 text-sm font-medium">
                      {href ? (
                        <a href={href} className="link-underline">
                          {value}
                        </a>
                      ) : (
                        <span>{value}</span>
                      )}
                      {label === dict.contact.whatsappLabel && (
                        <span className="chip">{dict.contact.placeholder}</span>
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-5 max-w-[46ch] text-xs leading-relaxed text-fg-subtle">
              {dict.contact.directNote}
            </p>
          </div>

          <div className="md:col-span-7">
            <ContactForm
              locale={locale}
              copy={dict.contact.form}
              email={site.email}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
