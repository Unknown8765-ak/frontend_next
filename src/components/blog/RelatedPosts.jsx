import BlogCard from "./BlogCard";
import { getRelatedBlogs } from "./blogData";

const RelatedPosts = ({
  currentBlog,
  blogs = [],
}) => {
  if (!currentBlog) return null;

  const relatedBlogs = getRelatedBlogs(
    blogs,
    currentBlog
  );

  if (!relatedBlogs.length) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-10 text-3xl font-bold">
        Related Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;