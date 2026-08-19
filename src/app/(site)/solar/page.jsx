import Hero from "@/components/solar/Hero";
import Services from "@/components/solar/Services";
import WhySolar from "@/components/solar/WhySolar";
import Process from "@/components/solar/Process";
import CTA from "@/components/solar/CTA";
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
  const response = await getWebsiteContent("solar");

  const content = response?.data ?? null;


  return (
    <>
       <Hero content={content} />
      <Services />
      <WhySolar />
      <Process />
      <CTA />
    </>
  );
}
;
