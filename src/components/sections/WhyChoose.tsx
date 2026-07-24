import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyChoose } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Why Aurea"
            title="A different kind of dental experience"
            highlight={["different"]}
            className="max-w-2xl"
          />
          <p className="max-w-sm text-muted">
            Every detail — from the technology to the aromatherapy — is designed
            around one goal: your comfort and your confidence.
          </p>
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f) => (
            <RevealItem key={f.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-mint-300 hover:shadow-lift">
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-mint-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative grid size-14 place-items-center rounded-2xl bg-teal-800 text-mint-200 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <Icon name={f.icon} className="size-6" />
                </span>
                <h3 className="relative mt-6 text-xl">{f.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
