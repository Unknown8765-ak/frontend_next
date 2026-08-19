import BlogCard from "./BlogCard";

const BlogList = ({ blogs = [] }) => {
  return (
    <section
      id="articles"
      className="mx-auto max-w-7xl px-6 pb-20"
    >
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
          Explore Our Blogs
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Discover expert insights, practical guides, and industry knowledge
          designed to help you make better business decisions.
        </p>
      </div>

      {/* Empty State */}
      {!blogs.length ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-linear-to-br from-gray-50 to-white py-24 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <span className="text-4xl" aria-hidden="true">
              📚
            </span>
          </div>

          <h2 className="mt-8 text-3xl font-bold text-gray-900">
            No Articles Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            We couldn&apos;t find any articles matching your search or
            selected category. Try another keyword.
          </p>
        </div>
      ) : (
        /* Blog Grid */
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogList;