import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const RecentPosts = ({ posts = [] }) => {
  if (!posts.length) {
    return (
      <div className="flex h-full min-h-105 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-500">
          No recent posts available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {posts.slice(0, 5).map((post, index) => {
        const publishedDate = post.publishedAt
          ? new Date(post.publishedAt)
          : null;

        const formattedDate =
          publishedDate &&
          !Number.isNaN(publishedDate.getTime())
            ? new Intl.DateTimeFormat("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(publishedDate)
            : "Recently";

        return (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className={`
              group
              relative
              flex
              flex-1
              items-center
              gap-4
              px-6
              py-5
              transition-all
              duration-300
              hover:bg-blue-50/50
              ${index !== posts.slice(0, 5).length - 1
                ? "border-b border-slate-100"
                : ""}
            `}
          >

            {/* Number */}

            <span className="shrink-0 text-2xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-blue-200">
              {String(index + 1).padStart(2, "0")}
            </span>


            {/* Content */}

            <div className="min-w-0 flex-1">

              <h3 className="line-clamp-2 text-base font-bold leading-6 text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                {post.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <CalendarDays
                  size={14}
                  aria-hidden="true"
                />

                <span>
                  {formattedDate}
                </span>
              </div>

            </div>


            {/* Arrow */}

            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
            />

          </Link>
        );
      })}

    </div>
  );
};

export default RecentPosts;