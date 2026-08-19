import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from "@/services/blog/blogService";



export const fetchBlogs = async (query = {}) => {
  const response = await getAllBlogs(query);

  const blogs = response?.data?.blogs || [];

  const featuredBlog = getFeaturedBlog(blogs);

  const recentBlogs = getRecentBlogs(blogs, 5);

  const popularBlogs = getPopularBlogs(blogs, 5);

  const categories = [
    "All",
    ...new Set(
      blogs
        .map((blog) => blog.category)
        .filter(Boolean)
    ),
  ];

  const tags = [
    ...new Set(
      blogs.flatMap((blog) => blog.tags || [])
    ),
  ];

  return {
    blogs,
    featuredBlog,
    recentBlogs,
    popularBlogs,
    categories,
    tags,
    pagination: response?.data?.pagination || null,
  };
};



export const fetchSingleBlog = async (slug) => {
  const response = await getBlogBySlug(slug);

  return response?.data || null;
};



export const searchBlogs = (
  blogs = [],
  keyword = ""
) => {
  const searchTerm = keyword.trim().toLowerCase();

  if (!searchTerm) {
    return blogs;
  }

  return blogs.filter((blog) => {
    const title = blog.title?.toLowerCase() || "";
    const excerpt = blog.excerpt?.toLowerCase() || "";
    const content = blog.content?.toLowerCase() || "";

    return (
      title.includes(searchTerm) ||
      excerpt.includes(searchTerm) ||
      content.includes(searchTerm)
    );
  });
};

export const filterBlogsByCategory = (
  blogs = [],
  category = "All"
) => {
  if (!category || category === "All") {
    return blogs;
  }

  return blogs.filter(
    (blog) => blog.category === category
  );
};


export const filterBlogsByTag = (
  blogs = [],
  tag = ""
) => {
  if (!tag) {
    return blogs;
  }

  return blogs.filter((blog) =>
    blog.tags?.includes(tag)
  );
};


export const sortBlogs = (
  blogs = [],
  sortBy = "latest"
) => {
  switch (sortBy) {
    case "latest":
      return [...blogs].sort(
        (a, b) =>
          new Date(b.publishedAt) -
          new Date(a.publishedAt)
      );

    case "oldest":
      return [...blogs].sort(
        (a, b) =>
          new Date(a.publishedAt) -
          new Date(b.publishedAt)
      );

    case "popular":
      return [...blogs].sort(
        (a, b) =>
          (b.views || 0) -
          (a.views || 0)
      );

    case "title":
      return [...blogs].sort((a, b) =>
        (a.title || "").localeCompare(
          b.title || ""
        )
      );

    default:
      return blogs;
  }
};



export const paginateBlogs = (
  blogs = [],
  page = 1,
  limit = 6
) => {
  const startIndex = (page - 1) * limit;

  return blogs.slice(
    startIndex,
    startIndex + limit
  );
};



export const getRelatedBlogs = (
  blogs = [],
  currentBlog,
  limit = 3
) => {
  if (!currentBlog) {
    return [];
  }

  return blogs
    .filter(
      (blog) =>
        blog._id !== currentBlog._id &&
        blog.category === currentBlog.category
    )
    .slice(0, limit);
};



export const getFeaturedBlog = (
  blogs = []
) => {
  return (
    blogs.find(
      (blog) => blog.status === "published"
    ) || null
  );
};



export const getRecentBlogs = (
  blogs = [],
  limit = 5
) => {
  return [...blogs]
    .sort(
      (a, b) =>
        new Date(b.publishedAt) -
        new Date(a.publishedAt)
    )
    .slice(0, limit);
};


export const getPopularBlogs = (
  blogs = [],
  limit = 5
) => {
  return [...blogs]
    .sort(
      (a, b) =>
        (b.views || 0) -
        (a.views || 0)
    )
    .slice(0, limit);
};


export const addBlog = async (formData) => {
  return createBlog(formData);
};

export const editBlog = async (
  id,
  formData
) => {
  return updateBlog(id, formData);
};

export const removeBlog = async (id) => {
  return deleteBlog(id);
};