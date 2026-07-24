"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const points = [
  "Complimentary reviews for the lifetime of your treatment",
  "One record, one team — your history never starts over",
  "Priority recall reminders so nothing is ever left too late",
];

export default function Continuum() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".continuum-art",
        { rotate: -22, scale: 0.9, yPercent: 8 },
        {
          rotate: 20,
          scale: 1.02,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-200/40 blur-[120px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="continuum-art will-change-transform">
            <Image
              src="/images/section_3.png"
              alt="Continuous care, symbolised by an infinity form"
              width={900}
              height={520}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(20,122,111,0.25)]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> Lifetime Care
            </span>
          </Reveal>
          <h2 className="mt-5 text-display">
            <TextReveal
              text="Your smile, cared for — for good"
              highlight={["good"]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-muted">
              We don&apos;t see treatment as a transaction. Once you&apos;re part of
              Aurea, you&apos;re looked after for the long run — with a relationship
              that never resets.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal as="li" key={p} delay={0.15 + i * 0.08} className="flex items-start gap-3">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-teal-800 text-ivory">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-ink-soft">{p}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <div className="mt-9">
              <Button href="/book">Start your journey</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
