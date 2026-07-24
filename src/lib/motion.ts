import type { Variants } from "framer-motion";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;

/** Container that staggers its children in. */
export const staggerContainer = (stagger = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Fade + rise, the workhorse reveal. */
export const fadeUp = (y = 26, duration = 0.8): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE_OUT_EXPO },
  },
});

export const fadeIn = (duration = 0.9): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, ease: EASE_OUT_EXPO } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

/** Clip-reveal for images / cards. */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.05, ease: EASE_IN_OUT },
  },
};

/** Default viewport config for whileInView. */
export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" };
