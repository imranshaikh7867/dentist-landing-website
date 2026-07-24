"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function FAQ({
  items,
  eyebrow = "Questions",
  title = "Answers to the things patients ask most",
  highlight = ["most"],
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  highlight?: string[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} />

        <RevealGroup className="flex flex-col">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <RevealItem key={f.q}>
                <div className="border-b border-ink/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-display text-xl transition-colors md:text-2xl ${
                        isOpen ? "text-teal-800" : "text-ink"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-teal-600 bg-teal-800 text-ivory"
                          : "border-ink/15 text-ink"
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
