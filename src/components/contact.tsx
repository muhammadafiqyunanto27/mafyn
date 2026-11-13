import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

export function Contact({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink text-paper"
    >
      <div className="container-page py-20 md:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="border-t border-paper/15 pt-6 md:pt-8">
              <p className="label text-paper/55">05 / {copy.label}</p>
            </div>

            <h2
              id="contact-heading"
              className="mt-8 max-w-[13ch] text-[clamp(2.2rem,4.6vw,3.75rem)] leading-[0.98] tracking-[-0.04em]"
            >
              {copy.heading}
            </h2>

            <p className="mt-6 max-w-[44ch] text-[0.9375rem] leading-relaxed text-paper/65">
              {copy.intro}
            </p>

            <dl className="mt-12 border-t border-paper/15">
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-paper/15 py-4">
                <dt className="label flex items-center gap-2 pt-0.5 text-paper/40">
                  <Mail
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                  />
                  {copy.emailLabel}
                </dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline break-all text-sm text-paper/85"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>

              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-paper/15 py-4">
                <dt className="label flex items-center gap-2 pt-0.5 text-paper/40">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                  />
                  {copy.whatsappLabel}
                </dt>
                <dd className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-paper/85">
                    {site.whatsapp}
                  </span>
                  <span className="border border-paper/20 px-1.5 py-0.5 text-[0.5rem] font-medium uppercase tracking-[0.14em] text-paper/40">
                    {copy.placeholder}
                  </span>
                </dd>
              </div>

              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-paper/15 py-4">
                <dt className="label flex items-center gap-2 pt-0.5 text-paper/40">
                  <MapPin
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    strokeWidth={1.5}
                  />
                  {copy.studioLabel}
                </dt>
                <dd className="text-sm text-paper/85">
                  {dict.brand.location}
                </dd>
              </div>
            </dl>

            <p className="mt-6 max-w-[40ch] text-[0.75rem] leading-relaxed text-paper/40">
              {copy.directNote}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:pl-10">
            <ContactForm
              locale={locale}
              copy={copy.form}
              email={site.email}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
