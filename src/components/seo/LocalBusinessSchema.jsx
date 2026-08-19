const LocalBusinessSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": `${baseUrl}/#localbusiness`,

    name: "Sun & Shadow",

    url: baseUrl,

    logo: `${baseUrl}/images/logo.png`,

    image: `${baseUrl}/images/og-image.jpg`,

    description:
      "Sun & Shadow provides solar solutions, aquarium solutions, and digital agency services.",

    telephone: "+91XXXXXXXXXX",

    address: {
      "@type": "PostalAddress",
      streetAddress: "YOUR STREET ADDRESS",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "YOUR PINCODE",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourcompany",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default LocalBusinessSchema;