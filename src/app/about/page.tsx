import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import Doctors from "@/components/sections/Doctors";
import Timeline from "@/components/about/Timeline";
import Awards from "@/components/about/Awards";
import Technology from "@/components/sections/Technology";
import Sterilization from "@/components/about/Sterilization";
import StatsBand from "@/components/about/StatsBand";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Community from "@/components/about/Community";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the specialists and the philosophy behind Aurea Dental — fifteen years of blending cosmetic artistry with genuinely warm, spa-like care in San Francisco.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aurea"
        title="Where science meets warmth"
        highlight={["warmth"]}
        description="We're a team of award-winning specialists on a mission to change how dentistry feels — one calm, confident smile at a time."
        imageId="1594824476967-48c8b964273f"
      />
      <Story />
      <MissionVision />
      <StatsBand />
      <Doctors />
      <Timeline />
      <Awards />
      <Technology />
      <Sterilization />
      <PhotoGallery />
      <Community />
      <CTABanner />
    </>
  );
}
