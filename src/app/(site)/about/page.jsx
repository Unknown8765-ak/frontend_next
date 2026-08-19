import Hero from "@/components/about/Hero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import CTA from "@/components/about/CTA";

import { getWebsiteContent } from "@/services/websiteContent/websiteContentService";

export const metadata = {
  title: "About Sun & Shadow Group | Innovation, Quality & Trust",

  description:
    "Learn about Sun & Shadow Group, our mission, vision, core values, and commitment to delivering innovative solutions across renewable energy, aquarium services, and digital solutions.",

  keywords: [
    "Sun and Shadow Group",
    "about Sun and Shadow",
    "Sun and Shadow company",
    "renewable energy company",
    "solar energy solutions",
    "aquarium services",
    "digital solutions",
    "digital agency",
    "sustainable solutions",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Sun & Shadow Group | Innovation, Quality & Trust",

    description:
      "Discover the story, mission, vision, and values behind Sun & Shadow Group.",

    url: "/about",

    siteName: "Sun & Shadow Group",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function AboutPage() {

  const response = await getWebsiteContent("about");

  const content = response?.data ?? null;

  return (
    <main>
      <Hero />
      <CompanyStory content={content} />
      <MissionVision />
      <CoreValues />
      <CTA />

    </main>
  );
}