import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "inverse" | "inverse-outline";
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants = {
  solid:
    "border-fg bg-solid text-on-solid hover:border-fg hover:bg-solid-hover",
  outline:
    "border-fg/25 bg-transparent text-fg hover:border-fg hover:bg-fg hover:text-canvas",
  inverse:
    "border-paper bg-paper text-ink hover:border-silver hover:bg-silver",
  "inverse-outline":
    "border-paper/30 bg-transparent text-paper hover:border-paper hover:bg-paper/10",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-[0.8125rem]",
  md: "px-5 py-3.5 text-sm",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  arrow = true,
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2.5 border font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </a>
  );
}
