"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light" | "outline";

interface Props {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-800 text-ivory hover:bg-teal-700 shadow-[0_10px_30px_-10px_rgba(15,92,84,0.6)]",
  ghost: "bg-ink/[0.04] text-ink hover:bg-ink/[0.08]",
  light: "bg-ivory text-teal-900 hover:bg-white shadow-soft",
  outline:
    "border border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700 bg-transparent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  magnetic = true,
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.34;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      animate={{ x: pos.x * 0.35, y: pos.y * 0.35 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </motion.span>
  );

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 will-change-transform",
    variants[variant],
    className
  );

  const motionProps = {
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 180, damping: 14 },
    onMouseMove: handleMove,
    onMouseLeave: reset,
  };

  if (href) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          onClick={onClick}
        >
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
