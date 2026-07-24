import { Reveal, TextReveal } from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Parallax from "@/components/ui/Parallax";

export default function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <Parallax amount={60}>
              <Photo
                id="1629909615184-74f495363b67"
                alt="Aurea Dental treatment suite"
                width={700}
                className="aspect-[3/4] rounded-2xl shadow-soft"
              />
            </Parallax>
            <Parallax amount={-60} className="mt-10">
              <Photo
                id="1601049676869-702ea24cfd58"
                alt="Aurea Dental reception"
                width={700}
                className="aspect-[3/4] rounded-2xl shadow-soft"
              />
            </Parallax>
          </div>
          <div className="animate-float absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-teal-900 px-8 py-6 text-center text-ivory shadow-lift">
            <p className="font-display text-4xl text-mint-300">2009</p>
            <p className="text-xs uppercase tracking-widest text-mint-100/70">
              Est.
            </p>
          </div>
        </div>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" /> Our Story
            </span>
          </Reveal>
          <h2 className="mt-5 text-display">
            <TextReveal
              text="Dentistry that feels like hospitality"
              highlight={["hospitality"]}
            />
          </h2>
          <div className="mt-7 space-y-5 text-muted">
            <Reveal delay={0.05}>
              <p>
                Aurea began with a single chair and a radical belief: that
                visiting the dentist should feel less like a clinic and more
                like a retreat. Dr. Elena Marchetti set out to marry
                world-class clinical skill with genuine warmth.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Fifteen years later, that belief shapes every corner of our
                Marina flagship — from the aromatherapy in each suite to the
                digital scanners that make treatment faster and gentler. What
                hasn&apos;t changed is the feeling you get when you walk in.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="border-l-2 border-mint-400 pl-5 font-display text-xl italic text-ink">
                &ldquo;We don&apos;t just fix teeth. We give people permission to
                smile again.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
