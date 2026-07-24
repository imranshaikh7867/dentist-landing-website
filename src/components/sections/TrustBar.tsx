import { Star } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustStats, insurers } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-2 border-y border-ink/10 bg-white/60 py-14 backdrop-blur">
      <div className="container-x">
        <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustStats.map((s) => {
            const decimals = s.value % 1 !== 0 ? 1 : 0;
            return (
              <RevealItem key={s.label} className="text-center md:text-left">
                <div className="flex items-baseline justify-center gap-1 md:justify-start">
                  <span className="font-display text-4xl text-teal-800 md:text-5xl">
                    <AnimatedCounter value={s.value} decimals={decimals} />
                  </span>
                  <span className="font-display text-2xl text-gold-500">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                <p className="text-xs text-muted">{s.detail}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="flex text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            Trusted by leading insurers
          </div>
          <Marquee className="w-full py-2">
            {insurers.map((name) => (
              <span
                key={name}
                className="mx-8 whitespace-nowrap font-display text-2xl text-ink/25"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
