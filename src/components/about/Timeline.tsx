"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealItem, RevealGroup } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Journey"
          title="Fifteen years of firsts"
          highlight={["firsts"]}
          align="center"
          className="mx-auto mb-20 items-center"
        />

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* rail */}
          <div className="absolute left-4 top-0 h-full w-px bg-ink/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-mint-400 to-teal-700 md:left-1/2 md:-translate-x-1/2"
          />

          <RevealGroup className="space-y-12">
            {timeline.map((t, i) => (
              <RevealItem key={t.year}>
                <div
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full pl-14 md:w-1/2 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                    }`}
                  >
                    <div className="rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
                      <span className="font-display text-3xl text-gold-500">
                        {t.year}
                      </span>
                      <h3 className="mt-1 text-xl">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t.body}
                      </p>
                    </div>
                  </div>

                  {/* node */}
                  <span className="absolute left-4 z-10 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-teal-800 ring-4 ring-ivory md:left-1/2">
                    <span className="size-1.5 rounded-full bg-mint-300" />
                  </span>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
