import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { paymentOptions, insurers } from "@/lib/data";

export default function Insurance() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Insurance & Payment"
            title="Premium care that fits your budget"
            highlight={["budget"]}
            description="We believe world-class dentistry should be accessible. Flexible financing, in-house membership and direct insurance billing make it simple."
          />

          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {paymentOptions.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 transition-shadow hover:shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-mint-100 text-teal-800">
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-ink/8 bg-cream p-8">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-muted">
              We accept all major insurance providers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {insurers.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink-soft"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
