import Icon from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { bookingBenefits } from "@/lib/data";

export default function BookingBenefits() {
  return (
    <section className="pb-4">
      <div className="container-x">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingBenefits.map((b) => (
            <RevealItem key={b.title}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint-100 text-teal-800">
                  <Icon name={b.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base">{b.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted">{b.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
