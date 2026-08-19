import { Eye } from "lucide-react";
import Link from "next/link";

const PopularPosts = ({ posts = [] }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Popular Posts
      </h2>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-4"
          >
            {/* Ranking */}
            <span className="text-3xl font-bold text-blue-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Post Information */}
            <div>
              <h3 className="line-clamp-2 font-semibold transition group-hover:text-blue-600">
                {post.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Eye size={16} aria-hidden="true" />

                {(post.views || 0).toLocaleString("en-IN")} Views
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;