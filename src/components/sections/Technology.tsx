import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import Parallax from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { technology } from "@/lib/data";

export default function Technology() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Modern Technology"
          title="Precision you can feel"
          highlight={["feel"]}
          description="We invest in the technology that makes dentistry faster, gentler and more predictable — so you spend less time in the chair and more time smiling."
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {technology.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white">
                <div className="relative h-56 overflow-hidden">
                  <Parallax amount={120} className="absolute inset-x-0 -top-10 h-[130%]">
                    <Photo
                      id={t.image}
                      alt={t.name}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  </Parallax>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute right-5 top-5 font-display text-5xl text-white/80">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
