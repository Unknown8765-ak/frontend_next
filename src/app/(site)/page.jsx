import Hero from "@/components/home/Hero";
import BusinessUnits from "@/components/home/BusinessUnits";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQs from "@/components/home/FAQs";
import CTA from "@/components/home/CTA";

import { getWebsiteContent } from "@/services/websiteContent/websiteContentService";

export const metadata = {
  title: "Solar & Wind Energy Solutions | Sun & Shadow Group",

  description:
    "Explore residential, commercial and industrial solar energy solutions from Sun & Shadow Group. Reduce electricity costs with reliable renewable energy systems.",

  keywords: [
    "solar energy solutions",
    "solar panel installation",
    "residential solar",
    "commercial solar",
    "industrial solar",
    "solar company India",
    "solar energy",
    "Sun and Shadow",
  ],

  alternates: {
    canonical: "/solar",
  },

  openGraph: {
    title: "Solar & Wind Energy Solutions | Sun & Shadow Group",

    description:
      "Smart renewable energy solutions for homes, businesses and industries.",

    url: "/solar",

    siteName: "Sun & Shadow Group",

    type: "website",
  },
};

export default async function SolarPage() {
  const response = await getWebsiteContent("home");

  const content = response?.data ?? null;

  return (
    <main>
      <Hero content={content} />
      <BusinessUnits/>
      <AboutSection content={content} />
      <WhyChooseUs />
      <FAQs />
      <CTA />
    </main>
  );
}