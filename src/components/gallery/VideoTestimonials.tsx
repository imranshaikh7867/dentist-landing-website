import { Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { videoTestimonials } from "@/lib/data";

export default function VideoTestimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="In Their Words"
          title="Hear it from our patients"
          highlight={["patients"]}
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {videoTestimonials.map((v) => (
            <RevealItem key={v.name}>
              <button className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-soft">
                <Photo
                  id={v.image}
                  alt={v.name}
                  width={700}
                  className="aspect-[4/5]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/10 to-transparent" />

                {/* play */}
                <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-teal-800 backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-mint-400">
                  <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full bg-white/60" />
                  <Play className="relative size-6 translate-x-0.5" fill="currentColor" />
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-semibold text-ivory">{v.name}</p>
                    <p className="text-sm text-mint-200">{v.detail}</p>
                  </div>
                  <span className="rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-ivory backdrop-blur">
                    {v.length}
                  </span>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
