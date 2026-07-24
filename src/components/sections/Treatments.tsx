import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { treatments } from "@/lib/data";

export default function Treatments() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Treatments"
            title="Signature services, elevated"
            highlight={["elevated"]}
          />
          <Link
            href="/smile-gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
          >
            View all treatments
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <RevealItem
              key={t.slug}
              className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
            >
              <Link
                href="/smile-gallery"
                className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl p-7 text-ivory shadow-soft"
              >
                <Photo
                  id={t.image}
                  alt={t.title}
                  className="absolute inset-0"
                  imgClassName="scale-105 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/30 to-transparent" />

                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-mint-100 backdrop-blur">
                    {t.tag}
                  </span>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl !text-ivory">{t.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-mint-100/80">
                        {t.body}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-gold-400">
                        {t.price}
                      </p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ivory text-teal-900 transition-all duration-500 group-hover:bg-mint-400 group-hover:rotate-45">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
