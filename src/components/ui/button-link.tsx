"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  withIcon?: boolean;
};

const variantClass = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
} as const;

const sizeClass = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  withIcon = true,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      {children}
      {withIcon && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </a>
  );
}
