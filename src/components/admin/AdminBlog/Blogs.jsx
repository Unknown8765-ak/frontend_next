"use client";

import { useEffect, useMemo, useState } from "react";
import { Trash2 } from "lucide-react";

import {
  fetchBlogs,
  removeBlog,
} from "../../blog/blogData";

import BlogTable from "./BlogTable";
import AdminSearchBar from "./AdminSearchBar";
import StatusFilter from "./StatusFilter";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [deleteBlog, setDeleteBlog] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);

      const data = await fetchBlogs();

      setBlogs(data?.blogs || []);
    } catch (error) {
      console.error("Load Blogs Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesSearch =
        !normalizedSearch ||
        blog.title?.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        status === "all" || blog.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [blogs, search, status]);

  const handleDelete = async () => {
    if (!deleteBlog) return;

    try {
      setDeleteLoading(true);

      await removeBlog(deleteBlog._id);

      setBlogs((previousBlogs) =>
        previousBlogs.filter(
          (blog) => blog._id !== deleteBlog._id
        )
      );

      setDeleteBlog(null);
    } catch (error) {
      console.error("Delete Blog Error:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="mt-4 font-medium text-slate-600">
            Loading blogs...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Content Management
          </span>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            All Blogs
          </h1>

          <p className="mt-2 text-slate-500">
            Manage, search and monitor all your blog articles.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row">
          <div className="flex-1">
            <AdminSearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <StatusFilter
            value={status}
            onChange={setStatus}
          />
        </div>

        {/* Result count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-900">
              {filteredBlogs.length}
            </span>{" "}
            {filteredBlogs.length === 1 ? "blog" : "blogs"}
          </p>
        </div>

        {/* Table */}
        <BlogTable
          blogs={filteredBlogs}
          onDelete={setDeleteBlog}
        />

        {/* Delete Modal */}
        {deleteBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Trash2 size={22} />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Delete Blog?
                </h2>

                <p className="mt-2 text-slate-500">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold text-slate-700">
                    "{deleteBlog.title}"
                  </span>
                  ? This action cannot be undone.
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteBlog(null)}
                  disabled={deleteLoading}
                  className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleteLoading}
                  className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                >
                  {deleteLoading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blogs;