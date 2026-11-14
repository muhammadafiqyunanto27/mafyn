import { ArrowUp } from "lucide-react";

type BackToTopProps = {
  label: string;
};

export function BackToTop({ label }: BackToTopProps) {
  return (
    <a
      href="#top"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-butter text-forest shadow-[0_2px_10px_rgba(20,45,38,0.22)] transition-colors duration-200 hover:bg-surface hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
    </a>
  );
}
