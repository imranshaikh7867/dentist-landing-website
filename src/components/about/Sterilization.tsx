import { Check } from "lucide-react";
import { Reveal, TextReveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";

const standards = [
  "Hospital-grade autoclave sterilization for every instrument",
  "Single-use disposables wherever clinically possible",
  "HEPA air filtration and medical-grade surface protocols",
  "Colour-coded tracking so nothing is ever reused unverified",
  "Independently audited with a 5-star state sterilization rating",
  "Dedicated decontamination suite separate from treatment areas",
];

export default function Sterilization() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> Safety First
            </span>
          </Reveal>
          <h2 className="mt-5 text-display">
            <TextReveal
              text="Sterilization you never have to think about"
              highlight={["Sterilization"]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-muted">
              Peace of mind is part of the treatment. Our protocols exceed every
              regulatory requirement so you can relax completely.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-3">
            {standards.map((s) => (
              <RevealItem key={s} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint-200 text-teal-800">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-ink-soft">{s}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="relative">
          <Photo
            id="1588776814546-1ffcf47267a5"
            alt="Sterilized dental instruments"
            width={900}
            className="aspect-[4/5] rounded-[2rem] shadow-lift"
          />
          <div className="animate-float absolute -right-4 top-8 rounded-2xl glass px-5 py-4 text-center shadow-lift">
            <p className="font-display text-3xl text-teal-800">5★</p>
            <p className="text-xs text-muted">Sterilization rating</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
