import { CalendarDays, Eye } from "lucide-react";
import Image from "next/image";

const BlogContent = ({ blog }) => {
  if (!blog) return null;

  const imageUrl =
    blog.featuredImage?.url ||
    "/images/blog-placeholder.jpg";

  const publishedDate = blog.publishedAt
    ? new Date(blog.publishedAt)
    : null;

  const formattedDate =
    publishedDate && !Number.isNaN(publishedDate.getTime())
      ? new Intl.DateTimeFormat("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(publishedDate)
      : "Recently";

  return (
    <article className="mx-auto max-w-5xl">
      {/* Hero Image */}
      <div className="relative h-125 overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={imageUrl}
          alt={blog.metaTitle || blog.title || "Blog article"}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category */}
        {blog.category && (
          <span className="absolute left-8 top-8 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Header & Content */}
      <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm md:p-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-8 text-gray-500">
          {/* Published Date */}
          <div className="flex items-center gap-2">
            <CalendarDays size={18} aria-hidden="true" />

            <span>{formattedDate}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <Eye size={18} aria-hidden="true" />

            <span>
              {(blog.views || 0).toLocaleString("en-IN")} Views
            </span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg mt-10 max-w-none leading-8 text-gray-700">
          {blog.content}
        </div>
      </div>
    </article>
  );
};

export default BlogContent;