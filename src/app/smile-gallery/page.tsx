import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BeforeAfterGrid from "@/components/gallery/BeforeAfterGrid";
import TransformationStories from "@/components/gallery/TransformationStories";
import VideoTestimonials from "@/components/gallery/VideoTestimonials";
import GoogleReviews from "@/components/gallery/GoogleReviews";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Technology from "@/components/sections/Technology";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Real smiles, real results. Explore before-and-after transformations, patient stories and reviews from the Aurea Dental smile gallery.",
};

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile Gallery"
        title="Results that speak for themselves"
        highlight={["Results"]}
        description="We'd rather show you than tell you. Explore real transformations from real patients — every one digitally designed and hand-crafted to look completely natural."
        imageId="1580281658626-ee379f3cce93"
      />
      <BeforeAfterGrid />
      <TransformationStories />
      <VideoTestimonials />
      <GoogleReviews />
      <PhotoGallery
        eyebrow="Clinic Gallery"
        title="Where it all happens"
        highlight={["happens"]}
      />
      <Technology />
      <CTABanner />
    </>
  );
}
