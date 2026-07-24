"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[i];
  const go = (dir: number) =>
    setI((v) => (v + dir + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Love"
          title="Stories that make us smile"
          highlight={["smile"]}
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-8 shadow-soft md:p-14">
            <Quote className="absolute -left-2 -top-2 size-28 text-mint-100" strokeWidth={1} />

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="mb-6 flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug text-ink md:text-[2rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Photo
                    id={t.image}
                    alt={t.name}
                    width={120}
                    className="size-14 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-teal-700">{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Go to testimonial ${d + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    d === i ? "w-8 bg-teal-700" : "w-1.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
