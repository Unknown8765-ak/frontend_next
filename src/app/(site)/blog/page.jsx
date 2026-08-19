import BlogSection from "@/components/blog/BlogSection";
import { Suspense } from "react";
export const metadata = {
  title: "Blog | Sun & Shadow",
  description:
    "Explore expert insights, practical guides, tutorials, solar solutions, aquarium knowledge, digital marketing strategies, and business insights from Sun & Shadow.",
  keywords: [
    "Sun and Shadow blog",
    "business insights",
    "solar solutions",
    "aquarium solutions",
    "digital marketing",
    "business guides",
    "industry insights",
    "business tutorials",
  ],
  openGraph: {
    title: "Blog | Sun & Shadow",
    description:
      "Discover expert guides, practical tutorials, business strategies, solar solutions, aquarium knowledge, and digital marketing insights.",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading blogs...</div>}>
        <BlogSection />
      </Suspense>
    </main>
  );
};

export default BlogPage;
