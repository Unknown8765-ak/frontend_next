import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
// import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "Contact Sun & Shadow Group | Solar, Aquarium & Digital Solutions",

  description:
    "Contact Sun & Shadow Group for professional solar energy solutions, aquarium design and maintenance, and digital agency services. Request a free consultation today.",

  keywords: [
    "contact Sun and Shadow Group",
    "Sun and Shadow contact",
    "solar company contact India",
    "aquarium services contact",
    "digital agency contact",
    "solar consultation",
    "aquarium consultation",
    "digital marketing consultation",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Sun & Shadow Group",
    description:
      "Get in touch with Sun & Shadow Group for solar, aquarium, and digital solutions.",
    url: "/contact",
    siteName: "Sun & Shadow Group",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}

