import Hero from "@/components/agency/Hero";
import Services from "@/components/agency/Services";
import Portfolio from "@/components/agency/Portfolio";
import Process from "@/components/agency/Process";
import CTA from "@/components/agency/CTA";
import { getWebsiteContent } from "@/services/websiteContent/websiteContentService";

export const metadata = {
  title: "Digital Marketing & Web Development Agency | Sun & Shadow Group",

  description:
    "Grow your business with professional website development, SEO, digital marketing and branding solutions from Sun & Shadow Group.",

  keywords: [
    "digital marketing agency",
    "web development agency",
    "SEO services",
    "digital marketing services",
    "website development",
    "branding agency",
    "SEO company India",
    "digital agency India",
    "Sun and Shadow Digital Agency",
  ],

  alternates: {
    canonical: "/agency",
  },

  openGraph: {
    title: "Digital Marketing & Web Development Agency | Sun & Shadow Group",

    description:
      "Professional web development, SEO, digital marketing and branding solutions designed to grow modern businesses.",

    url: "/agency",

    siteName: "Sun & Shadow Group",

    type: "website",
  },
};

export default async function AgencyPage() {
  const response = await getWebsiteContent("agency");

  const content = response?.data ?? null;

  return (
    <main className="w-full overflow-x-hidden">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero content={content} />

      <Services />

      <Portfolio content={content} />

      <Process />

      <CTA />
      </div>
    </main>
  );
}