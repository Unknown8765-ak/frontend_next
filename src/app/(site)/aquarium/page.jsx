import Hero from "@/components/aquarium/Hero";
import Services from "@/components/aquarium/Services";
import Gallery from "@/components/aquarium/Gallery";
import Process from "@/components/aquarium/Process";
import CTA from "@/components/aquarium/CTA";

import { getWebsiteContent } from "@/services/websiteContent/websiteContentService";
import { getAllGalleryImages } from "@/services/gallery/galleryService";

export const metadata = {
  title: "Premium Aquarium Design & Aquascaping Services | Sun & Shadow Group",

  description:
    "Explore premium aquarium design, aquascaping, installation and maintenance services by Sun & Shadow Group. Create beautiful aquatic environments for homes, offices, hotels and commercial spaces.",

  keywords: [
    "aquarium design",
    "aquarium installation",
    "aquascaping services",
    "aquarium maintenance",
    "custom aquarium",
    "home aquarium",
    "office aquarium",
    "luxury aquarium",
    "fish aquarium",
    "aquarium services India",
    "aquarium maintenance services",
    "professional aquascaping",
    "Sun and Shadow Group",
  ],

  alternates: {
    canonical: "/aquarium",
  },

  openGraph: {
    title:
      "Premium Aquarium Design & Aquascaping Services | Sun & Shadow Group",

    description:
      "Custom aquarium design, professional aquascaping, installation and maintenance for homes, offices, hotels and commercial spaces.",

    url: "/aquarium",

    siteName: "Sun & Shadow Group",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Premium Aquarium Design & Aquascaping Services | Sun & Shadow Group",

    description:
      "Professional aquarium design, aquascaping, installation and maintenance services.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function AquariumPage() {
  const [contentResponse, galleryResponse] = await Promise.all([
    getWebsiteContent("aquarium"),
    getAllGalleryImages("Aquarium"),
  ]);

  const content = contentResponse?.data ?? null;
  const gallery = galleryResponse?.data ?? [];

  return (
   <main className="w-full overflow-x-hidden">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero content={content} />
      <Services />
      <Gallery gallery={gallery} />
      <Process />
      <CTA />
    </div>
  </main>
  );
}