import { nav, services, site } from "@/content/site";
import { Wordmark } from "@/components/ui/wordmark";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="container-page pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#top" aria-label="MAFYN — back to top" className="inline-block">
              <Wordmark tone="dark" />
            </a>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-paper/60">
              {site.description}
            </p>
            <p className="label mt-8 text-paper/35">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-7">
            <h2 className="label text-paper/40">Navigate</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.8125rem] text-paper/60 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="label text-paper/40">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.title} className="text-[0.8125rem] text-paper/60">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="label text-paper/40">Contact</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all text-[0.8125rem] text-paper/60 hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-[0.8125rem] text-paper/60">
                WhatsApp
                <span className="mt-0.5 block text-[0.75rem] text-paper/40">
                  {site.whatsapp} (placeholder)
                </span>
              </li>
              <li className="text-[0.8125rem] text-paper/60">
                Indonesia
                <span className="mt-0.5 block text-[0.75rem] text-paper/40">
                  Working worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 py-6 text-[0.75rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} MAFYN. All rights reserved.</p>
          <p>Full-stack development &amp; custom web applications</p>
        </div>
      </div>

      <div className="container-page overflow-hidden" aria-hidden="true">
        <p className="-mb-[0.2em] select-none font-display text-[clamp(5rem,18.5vw,17rem)] font-semibold leading-[0.7] tracking-[-0.055em] text-paper/[0.07]">
          MAFYN
        </p>
      </div>
    </footer>
  );
}
