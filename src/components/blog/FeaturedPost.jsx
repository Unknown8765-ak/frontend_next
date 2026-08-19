import {
  ArrowRight,
  CalendarDays,
  Eye,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPost = ({ blog }) => {
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
    <section className="mx-auto max-w-7xl">
      <div className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="grid h-full lg:grid-cols-[1.2fr_0.8fr]">
          {/* Image Section */}
          <div className="relative min-h-105 overflow-hidden lg:min-h-full">
            <Image
              src={imageUrl}
              alt={blog.title || "Featured blog article"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            {/* Badge */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-blue-700 shadow-md backdrop-blur transition group-hover:scale-105">
              <Sparkles size={16} aria-hidden="true" />
              Featured Story
            </div>

            {/* Image Bottom Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium opacity-90">
                {blog.category}
              </p>

              <p className="mt-2 text-xl font-bold lg:hidden">
                {blog.title}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            {/* Category */}
            <span className="w-fit rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-200">
              {blog.category}
            </span>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 transition duration-300 group-hover:text-blue-700 lg:text-4xl">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
              {blog.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} aria-hidden="true" />
                {formattedDate}
              </div>

              <div className="flex items-center gap-2">
                <Eye size={18} aria-hidden="true" />
                {(blog.views || 0).toLocaleString("en-IN")} Views
              </div>
            </div>

            {/* Button */}
            <Link
              href={`/blog/${blog.slug}`}
              className="group/button mt-10 flex w-fit items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Read Article

              <ArrowRight
                size={20}
                aria-hidden="true"
                className="transition duration-300 group-hover/button:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;