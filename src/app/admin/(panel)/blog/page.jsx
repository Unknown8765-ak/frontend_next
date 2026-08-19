"use client";

import BlogForm from "@/components/admin/AdminBlog/BlogForm";
import Blogs from "@/components/admin/AdminBlog/Blogs";

const AdminBlogPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">

      <div className="mx-auto max-w-7xl space-y-12">


        <section>
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Admin
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Create Blog
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
              Create and publish a new article for your website.
            </p>
          </div>

          <BlogForm />
        </section>


        {/* Divider */}

        <div className="h-px bg-slate-200" />


        

        <section>
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              Management
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              All Blogs
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
              Manage your existing articles, search blogs, and delete
              unwanted posts.
            </p>
          </div>

          <Blogs />
        </section>

      </div>

    </main>
  );
};

export default AdminBlogPage;