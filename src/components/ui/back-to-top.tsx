"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return (
      <a
        href="#top"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 translate-y-4 items-center justify-center rounded-full border border-line-strong bg-butter text-forest opacity-0 shadow-[0_2px_10px_rgba(20,45,38,0.22)] transition-all duration-300 ease-out"
      >
        <ArrowUp aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <a
      href="#top"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 translate-y-0 items-center justify-center rounded-full border border-line-strong bg-butter text-forest opacity-100 shadow-[0_2px_10px_rgba(20,45,38,0.22)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
    </a>
  );
}