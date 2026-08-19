import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Eye,
  ArrowLeft,
  Tag,
} from "lucide-react";

import { getBlogBySlug } from "@/services/blog/blogService";

import ShareButtons from "@/components/blog/ShareButtons";
import ArticleSchema from "@/components/seo/ArticleSchema";

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await getBlogBySlug(slug);
    const blog = response?.data;

    if (!blog) {
      return {
        title: "Blog Not Found | Sun & Shadow",
        description:
          "The requested blog article could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const title =
      blog.metaTitle ||
      `${blog.title} | Sun & Shadow`;

    const description =
      blog.metaDescription ||
      blog.excerpt ||
      "Read this article from Sun & Shadow.";

    const canonicalUrl =
      `${SITE_URL}/blog/${blog.slug}`;

    return {
      title,

      description,

      keywords:
        blog.tags?.join(", ") ||
        `${blog.category || ""}, Sun & Shadow`,

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title,

        description,

        url: canonicalUrl,

        siteName: "Sun & Shadow",

        type: "article",

        publishedTime: blog.publishedAt,

        modifiedTime:
          blog.updatedAt ||
          blog.publishedAt,

        images: blog.featuredImage?.url
          ? [
              {
                url: blog.featuredImage.url,
                alt: blog.title,
              },
            ]
          : [],
      },

      twitter: {
        card: "summary_large_image",

        title,

        description,

        images: blog.featuredImage?.url
          ? [blog.featuredImage.url]
          : [],
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error(
      "Blog Metadata Error:",
      error
    );

    return {
      title: "Blog | Sun & Shadow",
      description:
        "Read the latest articles from Sun & Shadow.",
    };
  }
}


export default async function BlogPage({ params }) {
  const { slug } = await params;

  let blog = null;

  try {
    const response = await getBlogBySlug(slug);

    blog = response?.data;
  } catch (error) {
    console.error(
      "Failed to fetch blog:",
      error
    );
  }

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">

        <div className="max-w-lg text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ArrowLeft size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
            Blog Not Found
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            The blog article you are looking for
            does not exist or may have been removed.
          </p>

          <Link
            href="/blog"
            className=" mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg
            "
          >
            <ArrowLeft size={18} />

            Back to Blogs
          </Link>

        </div>
      </main>
    );
  }


  const wordCount = blog.content
    ? blog.content
        .trim()
        .split(/\s+/)
        .length
    : 0;

  const readTime = Math.max(
    1,
    Math.ceil(wordCount / 200)
  );


  const publishedDate = blog.publishedAt
    ? new Date(blog.publishedAt)
    : null;


  const formattedPublishedDate =
    publishedDate &&
    !Number.isNaN(
      publishedDate.getTime()
    )
      ? new Intl.DateTimeFormat(
          "en-IN",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        ).format(publishedDate)
      : null;


  const imageUrl =
    blog.featuredImage?.url ||
    "/images/blog-placeholder.jpg";


  return (
    <main className="w-full overflow-hidden bg-slate-50">
      <ArticleSchema blog={blog} />
      {console.log("blog",blog)}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50">

        <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex flex-wrap items-center gap-4">

              <Link
                href="/blog"
                className=" inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600
                "
              >
                <ArrowLeft size={17} />

                Back to Blogs
              </Link>

              {blog.category && (
                <span
                  className=" rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700
                  "
                >
                  {blog.category}
                </span>
              )}

            </div>
            <ShareButtons />

          </div>

          <div className="mt-12">

            <h1
              className=" max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl
              "
            >
              {blog.title}
            </h1>


            {blog.excerpt && (
              <p
                className=" mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl
                "
              >
                {blog.excerpt}
              </p>
            )}


            {/* Meta */}

            <div
              className=" mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-slate-500
              "
            >

              {formattedPublishedDate && (
                <div className="flex items-center gap-2">

                  <CalendarDays
                    size={18}
                    className="text-blue-600"
                  />

                  <span>
                    {formattedPublishedDate}
                  </span>

                </div>
              )}

              <div className="flex items-center gap-2">

                <Clock
                  size={18}
                  className="text-blue-600"
                />

                <span>
                  {readTime} min read
                </span>

              </div>
              <div className="flex items-center gap-2">

                <Eye
                  size={18}
                  className="text-blue-600"
                />
                <span>
                  {(blog.views || 0).toLocaleString(
                    "en-IN"
                  )}{" "}
                  Views
                </span>
              </div>
            </div>
          </div>
          
          <div
            className=" relative mt-12 overflow-hidden rounded-4xl border border-slate-200 bg-slate-200 shadow-2xl
            "
          >

            <img
              src={imageUrl}
              alt={blog.title}
              className=" h-70 w-full object-cover sm:h-105 lg:h-140
              "
            />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/30 to-transparent" />

          </div>

        </div>

      </section>

      <section className="bg-slate-50 pb-20">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <article
            className=" overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 lg:p-14
            "
          >


            <div
              className="whitespace-pre-line text-[17px] leading-9 text-slate-700 sm:text-lg sm:leading-10
              "
            >
              {blog.content}
            </div>


            {/* Tags */}

            {blog.tags?.length > 0 && (
              <div
                className="
                  mt-14
                  border-t
                  border-slate-200
                  pt-8
                "
              >

                <div className="mb-4 flex items-center gap-2">

                  <Tag
                    size={18}
                    className="text-blue-600"
                  />

                  <h2 className="font-bold text-slate-900">
                    Tags
                  </h2>

                </div>


                <div className="flex flex-wrap gap-3">

                  {blog.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(
                        tag
                      )}`}
                      className=" rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600
                      "
                    >
                      #{tag}
                    </Link>
                  ))}

                </div>

              </div>
            )}

          </article>

        </div>

      </section>

    </main>
  );
}