type WordmarkProps = {
  tone?: "default" | "inverse";
  descriptor?: string;
  className?: string;
};

export function Wordmark({
  tone = "default",
  descriptor,
  className = "",
}: WordmarkProps) {
  const inverse = tone === "inverse";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid h-7 w-7 shrink-0 place-items-center ${
          inverse ? "bg-paper text-ink" : "bg-fg text-canvas"
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path
            d="M1.5 13.5V2.5h2.6L8 8.1l3.9-5.6h2.6v11h-2.4V6.9L8 11.7 3.9 6.9v6.6H1.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-semibold tracking-[0.19em] ${
            inverse ? "text-paper" : "text-fg"
          }`}
        >
          MAFYN
        </span>
        {descriptor && (
          <span
            className={`mt-[0.28rem] text-[0.5rem] font-medium uppercase tracking-[0.22em] ${
              inverse ? "text-paper/55" : "text-fg/50"
            }`}
          >
            {descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
