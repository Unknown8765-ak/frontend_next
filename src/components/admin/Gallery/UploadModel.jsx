"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import { uploadGalleryImage } from "@/services/gallery/galleryService";

const UploadModal = ({ onClose, refreshGallery }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image: null,
    },
  });

  const image = watch("image");

  const onSubmit = async (data) => {
    if (!data.image || data.image.length === 0) {
      toast.error("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("image", data.image[0]);

      const response = await uploadGalleryImage(formData);

      toast.success(response.message || "Image uploaded successfully");

      reset();

      await refreshGallery();

      onClose();
    } catch (error) {
      console.error("Upload Gallery Error:", error);

      toast.error(
        error?.message || "Failed to upload image"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold text-slate-900">
            Upload Image
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close modal"
            className="text-slate-500 transition hover:text-red-500"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-6"
        >
          {/* Title */}
          <div>
            <label className="font-medium text-slate-700">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter image title"
              disabled={loading}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              {...register("title", {
                required: "Title is required",
              })}
            />

            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="font-medium text-slate-700">
              Image
            </label>

            <input
              type="file"
              accept="image/*"
              disabled={loading}
              className="mt-2 w-full rounded-lg border border-slate-200 p-3"
              {...register("image", {
                required: "Image is required",
              })}
            />

            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Preview */}
          {image?.length > 0 && (
            <img
              src={URL.createObjectURL(image[0])}
              alt="Selected image preview"
              className="h-52 w-full rounded-lg object-cover"
            />
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;