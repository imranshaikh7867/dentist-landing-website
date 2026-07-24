"use client";

import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, Ruler, ScanLine } from "lucide-react";

const ShowcaseScene = dynamic(
  () => import("@/components/three/ShowcaseScene"),
  { ssr: false }
);

const features = [
  {
    icon: Gem,
    title: "Enamel-grade porcelain",
    body: "Layered ceramics colour-matched to your natural translucency — light passes through them exactly like a real tooth.",
    pos: "left-[4%] top-[26%] md:left-[6%] md:top-[30%] text-left",
    cls: "pf-c1",
  },
  {
    icon: Ruler,
    title: "Milled to 10 microns",
    body: "Restorations are CAD-designed and milled to a tolerance thinner than a human hair for a seamless, invisible fit.",
    pos: "right-[4%] top-[46%] md:right-[6%] md:top-[42%] md:text-right",
    cls: "pf-c2",
  },
  {
    icon: ScanLine,
    title: "Designed in 3D first",
    body: "Every contour is previewed and approved in a digital smile design before a single instrument is picked up.",
    pos: "left-[4%] bottom-[10%] md:left-[10%] md:bottom-[14%] text-left",
    cls: "pf-c3",
  },
];

export default function PrecisionShowcase() {
  const wrap = useRef<HTMLDivElement>(null);
  const progress = useRef(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = wrap.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const base = {
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: 1 as const,
      };

      // scroll → tooth rotation
      ScrollTrigger.create({
        ...base,
        onUpdate: (self) => {
          progress.current = self.progress;
        },
      });

      // sequential feature reveals
      const tl = gsap.timeline({ scrollTrigger: { ...base } });
      tl.to({}, { duration: 1 });
      [".pf-c1", ".pf-c2", ".pf-c3"].forEach((sel, i) => {
        tl.fromTo(
          sel,
          { autoAlpha: 0, y: 44 },
          { autoAlpha: 1, y: 0, duration: 0.16, ease: "power2.out" },
          0.12 + i * 0.3
        );
      });

      // parallax decor
      gsap.to(".pf-bg", { yPercent: 18, ...{ scrollTrigger: base } });
      gsap.to(".pf-float-a", {
        yPercent: -40,
        rotate: 18,
        scrollTrigger: base,
      });
      gsap.to(".pf-float-b", {
        yPercent: 34,
        rotate: -14,
        scrollTrigger: base,
      });
      gsap.fromTo(
        ".pf-heading",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrap}
      className="relative bg-teal-950 md:h-[340vh]"
    >
      <div className="relative overflow-hidden md:sticky md:top-0 md:h-screen">
        {/* cinematic sparkle background */}
        <div className="pf-bg absolute inset-0 -top-[10%] h-[120%]">
          <Image
            src="/images/background.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-transparent to-teal-950" />
        </div>

        {/* floating medical elements (parallax) */}
        <div className="pf-float-a pointer-events-none absolute -left-16 top-6 w-72 opacity-30 blur-[1px] md:w-96 md:opacity-40">
          <Image
            src="/images/section_2.png"
            alt=""
            width={600}
            height={420}
            sizes="400px"
            className="h-auto w-full"
          />
        </div>
        <div className="pf-float-b pointer-events-none absolute -right-16 bottom-0 w-72 rotate-180 opacity-25 blur-[1px] md:w-96 md:opacity-35">
          <Image
            src="/images/section_2.png"
            alt=""
            width={600}
            height={420}
            sizes="400px"
            className="h-auto w-full"
          />
        </div>

        {/* heading */}
        <div className="pf-heading container-x relative z-20 pt-24 text-center md:pt-16">
          <span className="eyebrow justify-center !text-mint-300">
            <span className="h-px w-6 bg-current opacity-60" /> Precision Craft
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] !text-ivory md:text-6xl">
            Engineered for the{" "}
            <span className="text-gradient italic">perfect</span> fit
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-mint-100/70 md:hidden">
            Scroll to explore the craft behind every Aurea restoration.
          </p>
        </div>

        {/* 3D tooth — desktop */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <ShowcaseScene progress={progress} />
        </div>
        {/* static tooth — mobile */}
        <div className="relative z-10 mx-auto my-10 w-56 md:hidden">
          <Image
            src="/images/tooth_1.png"
            alt="Aurea dental restoration"
            width={400}
            height={400}
            sizes="240px"
            className="h-auto w-full drop-shadow-[0_20px_40px_rgba(53,196,178,0.35)]"
          />
        </div>

        {/* feature callouts */}
        {features.map((f) => (
          <div
            key={f.title}
            className={`${f.cls} ${f.pos} relative z-30 mx-auto mb-6 max-w-xs px-6 md:absolute md:mx-0 md:mb-0 md:px-0`}
          >
            <div className="rounded-2xl border border-white/10 bg-teal-950/50 p-5 backdrop-blur-md">
              <span className="mb-3 inline-grid size-11 place-items-center rounded-xl bg-mint-400/15 text-mint-300">
                <f.icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="text-lg !text-ivory">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mint-100/70">
                {f.body}
              </p>
            </div>
          </div>
        ))}

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-mint-100/50 md:flex">
          Scroll to rotate
        </div>
      </div>
    </section>
  );
}
