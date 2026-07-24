"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Simple in-view fade/rise wrapper. */
export function Reveal({
  children,
  className,
  y = 26,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  as?: "div" | "span" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp(y, 0.8)}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered group: children should use RevealItem. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={className} variants={fadeUp(y, 0.75)}>
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word heading reveal. Splits on spaces and animates each
 * word up from a clipped baseline.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** words to wrap in the gradient accent (case-insensitive) */
  highlight?: string[];
}) {
  const words = text.split(" ");
  const hl = new Set((highlight ?? []).map((w) => w.toLowerCase()));

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.055, delay)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
        >
          <motion.span
            className={cn(
              "inline-block",
              hl.has(word.replace(/[.,]/g, "").toLowerCase()) &&
                "text-gradient italic"
            )}
            variants={{
              hidden: { y: "115%" },
              show: {
                y: "0%",
                transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            aria-hidden
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
