import { TextReveal, Reveal } from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  imageId,
}: {
  eyebrow: string;
  title: string;
  highlight?: string[];
  description: string;
  imageId?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 rounded-full bg-mint-200/40 blur-[120px]" />
        <div className="absolute right-0 top-20 h-[30vh] w-[30vh] rounded-full bg-gold-200/40 blur-[100px]" />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </span>
          </Reveal>
          <h1 className="mt-5 text-hero font-display">
            <TextReveal text={title} highlight={highlight} />
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        </div>

        {imageId && (
          <Reveal delay={0.2} className="relative">
            <div className="relative">
              <Photo
                id={imageId}
                alt={title}
                width={900}
                priority
                className="aspect-[4/5] rounded-[2rem] shadow-lift"
              />
              <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl glass px-5 py-4 shadow-lift">
                <p className="font-display text-3xl text-teal-800">4.9★</p>
                <p className="text-xs text-muted">1,200+ reviews</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
