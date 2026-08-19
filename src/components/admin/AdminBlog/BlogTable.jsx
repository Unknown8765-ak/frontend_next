import BlogRow from "./BlogRow";

const BlogTable = ({ blogs = [], onDelete }) => {
  if (!blogs.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
          📝
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900">
          No Blogs Found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your search or status filter.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-225 w-full">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              {[
                "Image",
                "Title",
                "Category",
                "Status",
                "Views",
                "Published",
                "Action",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {blogs.map((blog) => (
              <BlogRow
                key={blog._id}
                blog={blog}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;