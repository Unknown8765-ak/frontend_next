const ArticleSchema = ({ blog }) => {
  if (!blog) return null;

  const baseUrl = process.env.SITE_URL;
  console.log(baseUrl)

  const articleUrl = `${baseUrl}/blog/${blog.slug}`;

  const imageUrl = blog.featuredImage?.url;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    "@id": `${articleUrl}#article`,

    headline: blog.title,

    description:
      blog.metaDescription ||
      blog.excerpt ||
      "",

    url: articleUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    image: imageUrl ? [imageUrl] : [],

    datePublished: blog.publishedAt,

    dateModified:
      blog.updatedAt ||
      blog.publishedAt,

    author: {
      "@type": "Person",
      name:
        blog.author?.name ||
        "Sun & Shadow",
    },

    publisher: {
      "@type": "Organization",
      name: "Sun & Shadow",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },

    articleSection: blog.category,

    keywords: blog.tags?.join(", "),
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

export default ArticleSchema;