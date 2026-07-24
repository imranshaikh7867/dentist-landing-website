import Hero from "@/components/home/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhyChoose from "@/components/sections/WhyChoose";
import PrecisionShowcase from "@/components/home/PrecisionShowcase";
import Continuum from "@/components/home/Continuum";
import Treatments from "@/components/sections/Treatments";
import Doctors from "@/components/sections/Doctors";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Technology from "@/components/sections/Technology";
import Journey from "@/components/sections/Journey";
import Testimonials from "@/components/sections/Testimonials";
import Insurance from "@/components/sections/Insurance";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChoose />
      <PrecisionShowcase />
      <Treatments />
      <Doctors preview />
      <BeforeAfter />
      <Technology />
      <Continuum />
      <Journey />
      <Testimonials />
      <Insurance />
      <EmergencyBanner />
      <FAQ items={faqs} eyebrow="FAQs" />
      <CTABanner />
    </>
  );
}
