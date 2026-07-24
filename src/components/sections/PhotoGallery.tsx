import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { galleryPhotos } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PhotoGallery({
  eyebrow = "Inside the Clinic",
  title = "A space designed to calm",
  highlight = ["calm"],
}: {
  eyebrow?: string;
  title?: string;
  highlight?: string[];
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          align="center"
          className="mx-auto mb-16 items-center"
        />

        <RevealGroup
          stagger={0.06}
          className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {galleryPhotos.map((p) => (
            <RevealItem
              key={p.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                p.span === "tall" && "row-span-2",
                p.span === "wide" && "col-span-2"
              )}
            >
              <Photo
                id={p.id}
                alt={p.caption}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {p.caption}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
