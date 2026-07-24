import { HeartHandshake, GraduationCap, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Photo from "@/components/ui/Photo";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Smiles for Schools",
    body: "Free annual check-ups and oral-health education for over 3,000 local schoolchildren each year.",
  },
  {
    icon: HeartHandshake,
    title: "Give Back Days",
    body: "Quarterly clinics offering complimentary treatment to veterans and families in need.",
  },
  {
    icon: Leaf,
    title: "Carbon-Neutral Care",
    body: "A certified green practice — from digital workflows to fully recyclable packaging.",
  },
];

export default function Community() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Photo
          id="1573496359142-b8d87734a5a2"
          alt="Community dental outreach"
          width={900}
          className="order-2 aspect-[5/4] rounded-[2rem] shadow-lift lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Beyond the Clinic"
            title="Care that reaches further"
            highlight={["further"]}
            description="A healthy smile is a privilege we believe everyone deserves. Here's how we give back."
          />
          <RevealGroup className="mt-8 space-y-4">
            {initiatives.map((it) => (
              <RevealItem key={it.title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mint-100 text-teal-800">
                  <it.icon className="size-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {it.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
