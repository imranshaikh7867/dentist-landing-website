import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const stats = [
  { value: 25, suffix: "K+", label: "Patients treated" },
  { value: 15, suffix: "", label: "Years of care" },
  { value: 12, suffix: "", label: "Specialists on team" },
  { value: 40, suffix: "+", label: "Awards & honours" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950 py-20 text-ivory">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <RevealGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="font-display text-5xl text-mint-300 md:text-6xl">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="font-display text-3xl text-gold-400">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-2 text-sm text-mint-100/70">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
