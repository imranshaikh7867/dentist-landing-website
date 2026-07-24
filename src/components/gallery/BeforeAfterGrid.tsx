import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { beforeAfter, treatments } from "@/lib/data";

export default function BeforeAfterGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Before & After"
          title="Drag to reveal the difference"
          highlight={["difference"]}
          description="Every result below is a real Aurea patient. Slide each image to see the transformation for yourself."
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {beforeAfter.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <BeforeAfterSlider before={b.before} after={b.after} label={b.label} />
            </Reveal>
          ))}
        </div>

        {/* treatments performed */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-ink/8 bg-cream p-8">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-muted">
              Treatments featured in these transformations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {treatments.map((t) => (
                <span
                  key={t.slug}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink-soft"
                >
                  {t.title}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
