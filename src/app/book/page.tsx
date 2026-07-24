import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import BookingBenefits from "@/components/book/BookingBenefits";
import BookingForm from "@/components/book/BookingForm";
import Location from "@/components/book/Location";
import FAQ from "@/components/sections/FAQ";
import { bookingFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Booking your smile consultation at Aurea Dental takes under two minutes. Choose your treatment, dentist and time — instant confirmation, no obligation.",
};

export default function BookPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 rounded-full bg-mint-200/40 blur-[120px]" />
        </div>
        <div className="container-x text-center">
          <Reveal className="mx-auto">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-current opacity-60" /> Book in 2 minutes
            </span>
          </Reveal>
          <h1 className="mx-auto mt-5 max-w-4xl text-hero font-display">
            <TextReveal
              text="Your best smile starts here"
              highlight={["smile"]}
            />
          </h1>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              No phone tag, no waiting rooms of uncertainty. Pick a time that
              suits you and we&apos;ll take care of the rest.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
              <span className="flex text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              Rated 4.9 by 1,200+ patients
            </div>
          </Reveal>
        </div>
      </section>

      <BookingBenefits />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <BookingForm />
        </div>
      </section>

      <Location />
      <FAQ
        items={bookingFaqs}
        eyebrow="Booking Questions"
        title="Everything you need to know before you book"
        highlight={["everything"]}
      />
    </>
  );
}
