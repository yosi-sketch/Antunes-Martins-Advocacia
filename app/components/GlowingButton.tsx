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
    | "white";
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

  // Visual identity based on Bruno Barroso — Advocacia e Assessoria Jurídica (Warm Imperial Gold & Rich Obsidian Noir)
  const variantClasses = {
    gold:
      "border border-[#f5d77f] bg-gradient-to-r from-[#96681e] via-[#d4a843] to-[#a8782a] text-[#0b0a09] font-black shadow-md shadow-[#d4a843]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#d4a843]/40 bg-[#14110e] text-[#fbeabb] font-bold shadow-md hover:-translate-y-0.5 hover:border-[#f5d77f] hover:bg-[#201a14] hover:text-white",
    outline:
      "border border-[#d4a843]/60 bg-transparent text-[#f5d77f] font-bold hover:-translate-y-0.5 hover:border-[#f5d77f] hover:bg-[#d4a843]/10 hover:text-white",
    emerald:
      "border border-[#25D366] bg-gradient-to-r from-[#1fa851] to-[#25D366] text-white font-bold shadow-md shadow-[#25D366]/25 hover:-translate-y-0.5 hover:brightness-105",
    champagne:
      "border border-[#d4a843] bg-[#fdf9ee] text-[#96681e] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f6eed9] hover:border-[#96681e]",
    white:
      "border border-[#e8ded3] bg-white text-[#14110e] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#d4a843] hover:text-[#96681e]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5d77f] select-none text-center cursor-pointer " +
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
