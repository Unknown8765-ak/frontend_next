"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const ProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {
  const [preview, setPreview] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      link: "",
      technologies: "",
      description: "",
      image: null,
    },
  });

  const image = watch("image");

  // Generate preview
  useEffect(() => {
    if (image?.length > 0) {
      const objectUrl = URL.createObjectURL(image[0]);

      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview("");
  }, [image]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      reset();
      setPreview("");
    }
  }, [isOpen, reset]);

  const handleFormSubmit = async (data) => {
    if (!data.image?.length) {
      toast.error("Project image is required");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to save this project?");

    if (!confirmed) return;

    const formData = new FormData();

    formData.append("title", data.title.trim());
    formData.append("link", data.link.trim());
    formData.append("technologies", data.technologies.trim());
    formData.append("description", data.description.trim());
    formData.append("image", data.image[0]);

    try {
      await onSubmit(formData);

      reset();
      setPreview("");
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      
      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Add New Project
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-full p-2 transition hover:bg-gray-100 disabled:opacity-50"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-5 p-6"
        >

          {/* Title */}
          <div>
            <label className="mb-2 block font-medium">
              Project Title
            </label>

            <input
              type="text"
              placeholder="Enter project title"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              {...register("title", {
                required: "Project title is required",
              })}
            />

            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Link */}
          <div>
            <label className="mb-2 block font-medium">
              Project Link
            </label>

            <input
              type="url"
              placeholder="https://example.com"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              {...register("link", {
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/,
                  message: "Enter a valid project URL",
                },
              })}
            />

            {errors.link && (
              <p className="mt-1 text-sm text-red-500">
                {errors.link.message}
              </p>
            )}
          </div>

          {/* Technologies */}
          <div>
            <label className="mb-2 block font-medium">
              Technologies
            </label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              {...register("technologies", {
                required: "Technologies are required",
              })}
            />

            {errors.technologies && (
              <p className="mt-1 text-sm text-red-500">
                {errors.technologies.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium">
              Project Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe your project..."
              className="w-full resize-none rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
              {...register("description", {
                required: "Project description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
            />

            {errors.description && (
              <p className="mt-1 text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-medium">
              Project Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full rounded-lg border px-4 py-3"
              {...register("image", {
                required: "Project image is required",
              })}
            />

            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Preview */}
          {preview && (
            <div>
              <p className="mb-2 font-medium">
                Image Preview
              </p>

              <img
                src={preview}
                alt="Project preview"
                className="h-56 w-full rounded-xl border object-cover"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-3">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg border px-6 py-3 transition hover:bg-gray-100 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {loading ? "Saving..." : "Save Project"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ProjectModal;