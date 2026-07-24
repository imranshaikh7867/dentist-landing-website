import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { beforeAfter } from "@/lib/data";

export default function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-24 text-ivory md:py-32">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-teal-600/25 blur-[130px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow !text-mint-300">
              <Sparkles className="size-4" /> Real Results
            </span>
          </Reveal>
          <h2 className="mt-5 text-display !text-ivory">
            <TextReveal
              text="See the transformation for yourself"
              highlight={["transformation"]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-mint-100/70">
              Drag the slider to reveal real patient outcomes. Every smile is
              digitally designed, then hand-crafted to look completely natural —
              never &ldquo;done&rdquo;.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-4xl text-mint-300">2,400+</p>
                <p className="text-sm text-mint-100/60">Smiles transformed</p>
              </div>
              <div>
                <p className="font-display text-4xl text-mint-300">98%</p>
                <p className="text-sm text-mint-100/60">Natural-look rating</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/smile-gallery"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-mint-300"
            >
              Explore the Smile Gallery
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <BeforeAfterSlider
            before={beforeAfter[0].before}
            after={beforeAfter[0].after}
            label={beforeAfter[0].label}
            className="mx-auto max-w-md"
          />
        </Reveal>
      </div>
    </section>
  );
}
