"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import BlogStatusBadge from "./BlogStatusBadge";

const BlogRow = ({ blog, onDelete }) => {
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
          month: "short",
          year: "numeric",
        }).format(publishedDate)
      : "-";

  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-6 py-4">
        <Image
          src={imageUrl}
          alt={blog.title || "Blog image"}
          width={80}
          height={64}
          className="h-16 w-20 rounded-xl object-cover"
        />
      </td>

      <td className="max-w-xs px-6 py-4">
        <h2 className="line-clamp-2 font-semibold text-slate-900">
          {blog.title}
        </h2>
      </td>

      <td className="px-6 py-4 text-sm text-slate-600">
        {blog.category || "-"}
      </td>

      <td className="px-6 py-4">
        <BlogStatusBadge status={blog.status} />
      </td>

      <td className="px-6 py-4 text-sm font-medium text-slate-600">
        {(blog.views || 0).toLocaleString("en-IN")}
      </td>

      <td className="px-6 py-4 text-sm text-slate-500">
        {formattedDate}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => onDelete(blog)}
            aria-label={`Delete ${blog.title}`}
            className="rounded-xl bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BlogRow;