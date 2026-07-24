import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { transformationStories } from "@/lib/data";

export default function TransformationStories() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-24 text-ivory md:py-32">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute left-0 top-1/3 h-[45vh] w-[45vh] rounded-full bg-teal-600/25 blur-[130px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Transformation Stories"
          title="More than a smile — a turning point"
          highlight={["turning"]}
          align="center"
          light
          className="mx-auto mb-20 items-center"
        />

        <div className="space-y-20">
          {transformationStories.map((s, i) => (
            <div
              key={s.name}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <BeforeAfterSlider
                  before={s.before}
                  after={s.after}
                  className="mx-auto max-w-sm"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <Quote className="size-12 text-mint-400" strokeWidth={1} />
                <p className="mt-5 font-display text-2xl leading-snug text-ivory md:text-3xl">
                  {s.quote}
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-lg font-semibold text-ivory">{s.name}</p>
                  <p className="text-sm text-mint-300">{s.treatment}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
