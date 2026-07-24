import { Star } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  { name: "Hannah B.", text: "Genuinely the best dental experience of my life. My veneers look completely natural." },
  { name: "Marcus T.", text: "Painless implant, incredible team. I actually look forward to my check-ups now." },
  { name: "Leila R.", text: "The 3D scan preview sold me instantly. The result matched it perfectly." },
  { name: "Andre P.", text: "Emergency on a Saturday and they saw me within an hour. Lifesavers." },
  { name: "Sofia M.", text: "The spa vibe is real — blankets, headphones, aromatherapy. So calming." },
  { name: "Daniel K.", text: "Invisalign done in 9 months. Dr. Okafor is a genius and so kind." },
  { name: "Priya N.", text: "Whitening took one visit and the shade difference is unreal. Obsessed." },
  { name: "Ethan W.", text: "Transparent pricing, no upselling, and my smile has never looked better." },
];

const half = Math.ceil(reviews.length / 2);

function Card({ name, text }: { name: string; text: string }) {
  return (
    <div className="mx-3 w-80 shrink-0 rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-1 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-full bg-mint-200 text-sm font-bold text-teal-800">
          {name[0]}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-muted">Verified Google review</p>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-ink/8 bg-white px-5 py-2.5 shadow-soft">
            <span className="font-display text-2xl text-teal-800">G</span>
            <span className="flex text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-sm font-bold text-ink">4.9 · 1,200+ reviews</span>
          </div>
          <h2 className="mt-6 text-display">Loved on Google</h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-5">
        <Marquee>
          {reviews.slice(0, half).map((r) => (
            <Card key={r.name} {...r} />
          ))}
        </Marquee>
        <Marquee reverse>
          {reviews.slice(half).map((r) => (
            <Card key={r.name} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
