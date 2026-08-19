"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  createBlog,
  updateBlog,
} from "@/services/blog/blogService";

import BlogImageUpload from "./BlogImageUpload";
import CategorySelect from "./CategorySelect";
import TagInput from "./TagInput";
import PublishOptions from "./PublishOptions";
import BlogMetaFields from "./BlogMetaFields";
import BlogPreview from "./BlogPreview";
import BlogActions from "./BlogActions";

const EMPTY_FORM = {
  title: "",
  excerpt: "",
  content: "",
  featuredImage: null,
  imagePreview: "",
  category: "",
  tags: [],
  status: "draft",
  metaTitle: "",
  metaDescription: "",
};

const BlogForm = ({
  editMode = false,
  initialData = null,
}) => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!initialData) {
      setFormData(EMPTY_FORM);
      return;
    }

    setFormData({
      title: initialData.title || "",
      excerpt: initialData.excerpt || "",
      content: initialData.content || "",
      featuredImage: null,
      imagePreview: initialData.featuredImage?.url || "",
      category: initialData.category || "",
      tags: initialData.tags || [],
      status: initialData.status || "draft",
      metaTitle: initialData.metaTitle || "",
      metaDescription: initialData.metaDescription || "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleImageChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      featuredImage: file,
      imagePreview: file
        ? URL.createObjectURL(file)
        : "",
    }));

    setErrors((prev) => ({
      ...prev,
      featuredImage: "",
    }));
  };

  const handleTagsChange = (tags) => {
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Blog title is required.";
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required.";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required.";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    // Image is mandatory only when creating.
    if (!editMode && !formData.featuredImage) {
      newErrors.featuredImage =
        "Featured image is required.";
    }

    if (formData.metaTitle.length > 60) {
      newErrors.metaTitle =
        "Meta title cannot exceed 60 characters.";
    }

    if (formData.metaDescription.length > 160) {
      newErrors.metaDescription =
        "Meta description cannot exceed 160 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors first.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title.trim());
      data.append("excerpt", formData.excerpt.trim());
      data.append("content", formData.content);
      data.append("category", formData.category.trim());
      data.append("tags", formData.tags.join(","));
      data.append("status", formData.status);
      data.append("metaTitle", formData.metaTitle.trim());
      data.append(
        "metaDescription",
        formData.metaDescription.trim()
      );

      if (formData.featuredImage) {
        data.append(
          "featuredImage",
          formData.featuredImage
        );
      }

      if (editMode) {
        await updateBlog(initialData._id, data);
        toast.success("Blog updated successfully.");
      } else {
        await createBlog(data);
        toast.success("Blog created successfully.");

        setFormData(EMPTY_FORM);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <BlogImageUpload
        image={formData.featuredImage}
        existingImage={formData.imagePreview}
        onChange={handleImageChange}
      />

      {errors.featuredImage && (
        <p className="-mt-5 text-sm text-red-500">
          {errors.featuredImage}
        </p>
      )}

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        {errors.title && (
          <p className="mt-2 text-sm text-red-500">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Excerpt
        </label>

        <textarea
          rows={4}
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          placeholder="Short description..."
          className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        {errors.excerpt && (
          <p className="mt-2 text-sm text-red-500">
            {errors.excerpt}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Content
        </label>

        <textarea
          rows={14}
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write full article..."
          className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        {errors.content && (
          <p className="mt-2 text-sm text-red-500">
            {errors.content}
          </p>
        )}
      </div>

      <CategorySelect
        value={formData.category}
        onChange={handleChange}
        error={errors.category}
      />

      <TagInput
        tags={formData.tags}
        onChange={handleTagsChange}
      />

      <PublishOptions
        status={formData.status}
        setStatus={(value) =>
          setFormData((prev) => ({
            ...prev,
            status: value,
          }))
        }
      />

      <BlogMetaFields
        values={formData}
        onChange={handleChange}
      />

      <BlogPreview formData={formData} />

      <BlogActions
        loading={loading}
        editMode={editMode}
      />
    </form>
  );
};

export default BlogForm;