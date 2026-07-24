import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { doctors } from "@/lib/data";

export default function Doctors({
  preview = false,
}: {
  preview?: boolean;
}) {
  const list = preview ? doctors.slice(0, 3) : doctors;

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Clinicians with an artist's eye"
            highlight={["artist's"]}
            description="Board-certified specialists who trained at the world's finest institutions — and who genuinely love what they do."
          />
          {preview && (
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
            >
              Meet everyone
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        <RevealGroup
          className={`grid gap-6 sm:grid-cols-2 ${
            preview ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {list.map((d) => (
            <RevealItem key={d.name}>
              <article className="group relative overflow-hidden rounded-2xl bg-white shadow-soft">
                <Photo
                  id={d.image}
                  alt={d.name}
                  width={700}
                  className="aspect-[4/5]"
                  imgClassName="grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* bio slide-up */}
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-teal-950 via-teal-950/85 to-transparent p-6 pt-16 opacity-100">
                  <p className="translate-y-4 text-xs leading-relaxed text-mint-100/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-mint-100/80">
                    {d.bio}
                  </p>
                  <h3 className="mt-2 text-xl !text-ivory">{d.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-mint-300">
                    {d.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.credentials.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold text-mint-100/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
