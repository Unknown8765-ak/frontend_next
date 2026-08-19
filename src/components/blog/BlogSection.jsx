"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import FeaturedPost from "./FeaturedPost";
import BlogList from "./BlogList";
import Sidebar from "./BottomBar";
import Pagination from "./Pagination";
import Hero from "./Hero";
import BottomBar from "./BottomBar";
import RecentPosts from "./RecentPosts";

import {
  fetchBlogs,
  searchBlogs,
  filterBlogsByCategory,
  filterBlogsByTag,
  paginateBlogs,
} from "./blogData";

const POSTS_PER_PAGE = 6;

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  const selectedTag = searchParams.get("tag") || "";

  
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, selectedTag]);

  const loadBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchBlogs();

      setBlogs(data?.blogs || []);
      setFeaturedBlog(data?.featuredBlog || null);
      setRecentBlogs(data?.recentBlogs || []);
      setPopularBlogs(data?.popularBlogs || []);
      setCategories(data?.categories || []);
      setTags(data?.tags || []);
    } catch (error) {
      console.error("Failed to load blogs:", error);

      setError(
        error?.message || "Unable to load blogs. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  
  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);


  const searchedBlogs = useMemo(() => {
    return searchBlogs(blogs, search);
  }, [blogs, search]);

  const filteredBlogs = useMemo(() => {
    let result = filterBlogsByCategory(
      searchedBlogs,
      category
    );

    result = filterBlogsByTag(
      result,
      selectedTag
    );

    return result;
  }, [
    searchedBlogs,
    category,
    selectedTag,
  ]);

  const currentBlogs = useMemo(() => {
    return paginateBlogs(
      filteredBlogs,
      currentPage,
      POSTS_PER_PAGE
    );
  }, [
    filteredBlogs,
    currentPage,
  ]);

  const totalPages = Math.ceil(
    filteredBlogs.length / POSTS_PER_PAGE
  );


  if (loading) {
    return (
      <section className="flex min-h-100 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

          <p className="mt-5 text-lg font-semibold text-slate-700">
            Loading articles...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-red-200 bg-red-50 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-red-700">
            Unable to Load Articles
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={loadBlogs}
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* Hero */}
      <Hero blogs={blogs} />

      <section className="mx-auto max-w-300 py-16">
           <div className="grid lg:grid-cols-[1.7fr_1fr]">

  {/* Featured Post */}
  <div className="flex min-h-full flex-col">

    <div className="mb-5">
      <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
        Featured
      </span>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Featured Post
      </h2>
    </div>

    <div className="flex flex-1">
      <FeaturedPost blog={featuredBlog} />
    </div>

  </div>


  {/* Recent Posts */}
  <div className="flex min-h-full flex-col">

    <div className="mb-5">
      <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
        Latest
      </span>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Recent Posts
      </h2>
    </div>

    <div className="flex flex-1">
      <RecentPosts posts={recentBlogs} />
    </div>

  </div>

</div>

      </section>

      <BottomBar
        popularPosts={popularBlogs}
        tags={tags}
      />

      {/* Search */}
      <div className="mt-16">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      {/* Category Filter */}
      <div className="mt-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
      </div>


      

      {/* Latest Articles */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <BlogList blogs={currentBlogs} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default BlogSection;