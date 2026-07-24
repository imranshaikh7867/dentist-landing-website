import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { clinic } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aureadental.example"),
  title: {
    default: `${clinic.name} — ${clinic.tagline}`,
    template: `%s · ${clinic.name}`,
  },
  description:
    "Aurea Dental is a premium San Francisco dental studio blending cosmetic artistry, painless technology and spa-like comfort. Book your smile consultation today.",
  keywords: [
    "dentist",
    "cosmetic dentistry",
    "veneers",
    "dental implants",
    "Invisalign",
    "teeth whitening",
    "San Francisco dentist",
  ],
  openGraph: {
    title: `${clinic.name} — ${clinic.tagline}`,
    description:
      "Cosmetic artistry, painless technology and spa-like comfort. Book your smile consultation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
