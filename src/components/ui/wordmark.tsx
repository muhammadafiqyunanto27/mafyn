type WordmarkProps = {
  tone?: "default" | "inverse";
  descriptor?: string;
  className?: string;
};

export function Wordmark({
  descriptor,
  className = "",
}: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-8 w-8 shrink-0 place-items-center rounded-[0.625rem] bg-lime text-forest"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1.5 13.5V2.5h2.6L8 8.1l3.9-5.6h2.6v11h-2.4V6.9L8 11.7 3.9 6.9v6.6H1.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-semibold tracking-[0.16em]">
          MAFYN
        </span>
        {descriptor && (
          <span className="mt-[0.3rem] font-mono text-[0.5rem] uppercase tracking-[0.18em] opacity-60">
            {descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
