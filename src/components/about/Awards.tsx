import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & certifications"
          highlight={["certifications"]}
          description="We hold ourselves to the highest standards — and the industry has taken notice."
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a) => (
            <RevealItem key={a.title}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold-200 text-gold-600 transition-transform duration-500 group-hover:rotate-6">
                  <Award className="size-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-base leading-snug">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted">{a.org}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
