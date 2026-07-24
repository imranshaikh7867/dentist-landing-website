import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { clinic } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-teal-900 px-6 py-20 text-center text-ivory md:px-16 md:py-28">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="absolute -left-20 top-0 h-[40vh] w-[40vh] rounded-full bg-mint-500/25 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[40vh] w-[40vh] rounded-full bg-gold-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <span className="eyebrow !text-mint-300">Your smile is waiting</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] !text-ivory md:text-6xl">
            <TextReveal
              text="Ready to fall in love with your smile?"
              highlight={["love"]}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-mint-100/70">
              Book a no-pressure consultation today. We&apos;ll scan your smile,
              listen to your goals and design a plan that&apos;s completely yours.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-mint-400 px-8 py-4 text-sm font-semibold text-teal-950 transition-colors hover:bg-mint-300"
              >
                Book a Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:border-mint-300 hover:text-mint-200"
              >
                <Phone className="size-4" />
                {clinic.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
