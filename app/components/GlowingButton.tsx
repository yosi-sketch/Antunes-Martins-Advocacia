"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "dark"
    | "outline"
    | "emerald"
    | "champagne"
    | "white"
    | "petrol";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Antunes & Martins Advocacia Especializada (Sovereign Petrol Navy & Sculpted Imperial Gold)
  const variantClasses = {
    gold:
      "border border-[#fad962] bg-gradient-to-r from-[#9e751e] via-[#dfb135] to-[#f0c548] text-[#071521] font-black shadow-md shadow-[#dfb135]/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#dfb135]/40 bg-[#0d2133] text-[#faecba] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#fad962] hover:bg-[#14324a] hover:text-white",
    petrol:
      "border border-[#dfb135]/50 bg-[#13476a] text-white font-bold shadow-md hover:-translate-y-0.5 hover:border-[#fad962] hover:bg-[#1b5883]",
    outline:
      "border border-[#dfb135]/60 bg-transparent text-[#fad962] font-bold hover:-translate-y-0.5 hover:border-[#fad962] hover:bg-[#dfb135]/12 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#dfb135] bg-[#fdf8eb] text-[#9e751e] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#faecba] hover:border-[#9e751e]",
    white:
      "border border-[#cbd5e1] bg-white text-[#0b1e2e] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#dfb135] hover:text-[#9e751e]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fad962] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
