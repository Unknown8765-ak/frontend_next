const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
};

export default robots;