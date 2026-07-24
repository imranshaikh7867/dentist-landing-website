import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Patient Journey"
          title="Four calm steps to your new smile"
          highlight={["calm"]}
          align="center"
          className="mx-auto mb-20 items-center"
        />

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-teal-600/40 to-transparent lg:block" />

          <RevealGroup className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((s) => (
              <RevealItem key={s.step} className="relative text-center lg:text-left">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-teal-600/20 bg-white font-display text-2xl text-teal-800 shadow-soft lg:mx-0">
                  {s.step}
                </div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
