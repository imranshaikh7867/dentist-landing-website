import { Siren, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { clinic } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <section className="container-x py-6">
      <Reveal>
        <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-gold-600 to-gold-400 p-8 text-teal-950 md:flex-row md:p-10">
          <div className="grain pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative flex items-center gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-teal-950/10">
              <Siren className="size-7" />
            </span>
            <div>
              <h3 className="text-2xl !text-teal-950">Dental emergency?</h3>
              <p className="mt-1 max-w-md text-sm text-teal-950/75">
                In pain right now? We hold same-day emergency slots and offer
                Sunday cover. Don&apos;t wait — call us and we&apos;ll see you fast.
              </p>
            </div>
          </div>
          <a
            href={`tel:${clinic.emergencyPhone.replace(/[^+\d]/g, "")}`}
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-950 px-7 py-4 text-sm font-semibold text-ivory transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4" />
            {clinic.emergencyPhone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
