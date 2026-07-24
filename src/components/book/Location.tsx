import { MapPin, Phone, Mail, Clock, Siren } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { clinic } from "@/lib/data";

export default function Location() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Find Us"
          title="Come visit the studio"
          highlight={["visit"]}
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* stylised map */}
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-ink/8 bg-teal-950">
            <div className="grain absolute inset-0 opacity-30" />
            {/* faux map grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(53,196,178,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(53,196,178,0.15) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div className="absolute left-1/4 top-1/3 h-24 w-40 rounded-lg bg-mint-400/10" />
            <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-gold-400/10" />
            {/* pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="relative mx-auto grid size-14 place-items-center rounded-full bg-mint-400 text-teal-950 shadow-glow">
                <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full bg-mint-400" />
                <MapPin className="relative size-7" />
              </span>
              <p className="mt-3 font-display text-lg text-ivory">{clinic.name}</p>
              <p className="text-xs text-mint-100/70">Marina District, SF</p>
            </div>
          </Reveal>

          {/* details */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-ink/8 bg-white p-6">
              <h3 className="mb-4 text-lg">Contact & hours</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 text-ink-soft">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-teal-700" />
                  {clinic.address}
                </li>
                <li>
                  <a
                    href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
                    className="flex gap-3 text-ink-soft transition-colors hover:text-teal-700"
                  >
                    <Phone className="mt-0.5 size-4 shrink-0 text-teal-700" />
                    {clinic.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="flex gap-3 text-ink-soft transition-colors hover:text-teal-700"
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-teal-700" />
                    {clinic.email}
                  </a>
                </li>
              </ul>
              <div className="mt-5 border-t border-ink/8 pt-5">
                {clinic.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-1.5 text-sm"
                  >
                    <span className="flex items-center gap-2 text-muted">
                      <Clock className="size-3.5" /> {h.day}
                    </span>
                    <span className="font-semibold text-ink">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`tel:${clinic.emergencyPhone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-4 rounded-2xl bg-gold-500 p-5 text-teal-950 transition-transform hover:scale-[1.01]"
            >
              <Siren className="size-6 shrink-0" />
              <div>
                <p className="font-semibold">24/7 Emergency Line</p>
                <p className="text-sm text-teal-950/75">{clinic.emergencyPhone}</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
