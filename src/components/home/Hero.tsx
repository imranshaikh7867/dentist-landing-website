"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Star, Play, ScanFace } from "lucide-react";
import Button from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { clinic, trustStats } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28">
      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-mint-200/50 blur-[120px]" />
        <div className="absolute right-[-5%] bottom-[10%] h-[40vh] w-[40vh] rounded-full bg-gold-200/40 blur-[100px]" />
      </div>

      {/* 3D scene */}
      <div className="absolute inset-0 -z-[5] opacity-90 lg:left-[28%]">
        <HeroScene />
      </div>

      <div className="container-x relative grid min-h-[calc(100svh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-white/60 px-4 py-2 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full bg-mint-400" />
              <span className="relative inline-flex size-2 rounded-full bg-mint-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-teal-800">
              Now accepting new patients · San Francisco
            </span>
          </motion.div>

          <h1 className="text-hero font-display">
            <TextReveal text="The art of the" delay={0.35} />
            <br />
            <TextReveal
              text="perfect smile"
              delay={0.55}
              highlight={["perfect"]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
          >
            Cosmetic artistry, painless technology and genuinely spa-like
            comfort. At {clinic.name}, we design smiles that look natural and
            feel unmistakably you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/book">Book a Consultation</Button>
            <button className="group flex items-center gap-3 text-sm font-semibold text-ink">
              <span className="grid size-12 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-teal-600 group-hover:bg-teal-700 group-hover:text-ivory">
                <Play className="size-4 translate-x-0.5" fill="currentColor" />
              </span>
              Watch our story
            </button>
          </motion.div>

          {/* mini trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[
                "1594381898411-846e7d193883",
                "1560250097-0b93528c311a",
                "1584982751601-97dcc096659c",
                "1622253692010-333f2da6031d",
              ].map((id) => (
                <Photo
                  key={id}
                  id={id}
                  width={80}
                  alt="Patient"
                  className="size-11 rounded-full ring-2 ring-ivory"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1.5 text-sm font-bold text-ink">4.9</span>
              </div>
              <p className="text-xs text-muted">from 1,200+ verified reviews</p>
            </div>
          </motion.div>
        </div>

        {/* floating glass card */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="animate-float absolute right-0 top-6 w-64 rounded-2xl glass p-5 shadow-lift"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-teal-800 text-mint-200">
                <ScanFace className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Digital Smile Design</p>
                <p className="text-xs text-muted">Preview before you begin</p>
              </div>
            </div>
            <div className="mt-4 h-px bg-ink/10" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              {trustStats.slice(1, 3).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-teal-800">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-[11px] leading-tight text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
          Scroll
        </span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-ink/20 pt-2">
          <motion.span
            className="h-2 w-1 rounded-full bg-teal-700"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
