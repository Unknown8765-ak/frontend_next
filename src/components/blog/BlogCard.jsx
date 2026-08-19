import {
  CalendarDays,
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const wordCount = blog.content
    ?.trim()
    .split(/\s+/)
    .filter(Boolean).length || 0;

  const readTime = Math.max(
    1,
    Math.ceil(wordCount / 200)
  );

  const publishedDate = blog.publishedAt
    ? new Date(blog.publishedAt)
    : null;

  const formattedDate =
    publishedDate && !Number.isNaN(publishedDate.getTime())
      ? new Intl.DateTimeFormat("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(publishedDate)
      : "Recently";

  const imageUrl =
    blog.featuredImage?.url ||
    "/images/blog-placeholder.jpg";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={blog.title || "Blog article"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category */}
        {blog.category && (
          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-lg backdrop-blur">
            {blog.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Meta */}
        <div className="flex items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} aria-hidden="true" />
            {formattedDate}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={16} aria-hidden="true" />
            {readTime} min read
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 line-clamp-2 text-2xl font-bold leading-snug text-gray-900 transition duration-300 group-hover:text-blue-600">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {blog.excerpt}
        </p>

        {/* Read Article */}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-600 group-hover:gap-4"
        >
          Read Article
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>

      {/* Bottom Hover Line */}
      <div className="absolute bottom-0 right-0 h-1 w-0 bg-linear-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-700 group-hover:w-full" />
    </article>
  );
};

export default BlogCard;