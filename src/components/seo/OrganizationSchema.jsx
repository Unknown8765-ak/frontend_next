const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Sun & Shadow",

    url: "https://sunandshadow.in",

    logo: "https://sunandshadow.in/logo.png",

    description:
      "Sun & Shadow provides professional solar, aquarium and digital agency solutions.",

    sameAs: [
      // Add actual social media URLs here
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
      // "https://www.linkedin.com/...",
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

export default OrganizationSchema;