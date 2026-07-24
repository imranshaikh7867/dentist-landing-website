import { Target, Eye, ShieldCheck } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To make exceptional, anxiety-free dental care feel effortless — combining artistry, technology and genuine human warmth in every visit.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A world where no one hides their smile. We want every patient to leave feeling more confident than the day they walked in.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    body: "Honest advice, transparent pricing and treatment we'd recommend to our own family. No upselling — ever, just what's right for you.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-24 text-ivory md:py-32">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute right-1/4 top-0 h-[45vh] w-[45vh] rounded-full bg-teal-600/25 blur-[130px]" />

      <div className="container-x relative">
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors hover:border-mint-400/40 hover:bg-white/[0.06]">
                <span className="grid size-14 place-items-center rounded-2xl bg-mint-400/15 text-mint-300 transition-transform duration-500 group-hover:scale-105">
                  <p.icon className="size-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-2xl !text-ivory">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-mint-100/70">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
