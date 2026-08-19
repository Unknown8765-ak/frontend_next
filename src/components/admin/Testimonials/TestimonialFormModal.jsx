"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import {
  createTestimonial,
  updateTestimonial,
} from "@/services/testimonial/testimonialService";

const defaultValues = {
  name: "",
  designation: "",
  company: "",
  review: "",
  rating: "5",
  image: null,
};

const TestimonialFormModal = ({
  isOpen,
  onClose,
  initialData,
  refreshTestimonials,
}) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name || "",
        designation: initialData.designation || "",
        company: initialData.company || "",
        review: initialData.review || "",
        rating: String(initialData.rating || 5),
        image: null,
      });
    } else {
      reset(defaultValues);
    }
  }, [initialData, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("company", data.company);
      formData.append("review", data.review);
      formData.append("rating", data.rating);

      if (data.image?.length > 0) {
        formData.append("image", data.image[0]);
      }

      if (initialData) {
        await updateTestimonial(
          initialData._id,
          formData
        );

        toast.success("Testimonial updated successfully");
      } else {
        await createTestimonial(formData);

        toast.success("Testimonial created successfully");
      }

      await refreshTestimonials();

      reset(defaultValues);
      onClose();
    } catch (error) {
      console.error("Testimonial Submit Error:", error);

      toast.error(
        error?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-6">
          <h2 className="text-2xl font-bold">
            {initialData
              ? "Edit Testimonial"
              : "Add Testimonial"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 transition"
            aria-label="Close modal"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">
              Client Name
            </label>

            <input
              type="text"
              placeholder="Client Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("name", {
                required: "Client name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Designation */}
          <div>
            <label className="block font-medium mb-2">
              Designation
            </label>

            <input
              type="text"
              placeholder="Designation"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("designation", {
                required: "Designation is required",
              })}
            />

            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.designation.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block font-medium mb-2">
              Company
            </label>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("company", {
                required: "Company name is required",
              })}
            />

            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Review */}
          <div>
            <label className="block font-medium mb-2">
              Review
            </label>

            <textarea
              rows={4}
              placeholder="Client review"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600 resize-none"
              {...register("review", {
                required: "Review is required",
              })}
            />

            {errors.review && (
              <p className="text-red-500 text-sm mt-1">
                {errors.review.message}
              </p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-2">
              Rating
            </label>

            <select
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("rating")}
            >
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-2">
              Client Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full border rounded-lg px-4 py-3"
              {...register("image")}
            />

            {initialData?.image && (
              <p className="text-gray-500 text-sm mt-2">
                Leave empty to keep the existing image.
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="border px-6 py-3 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
            >
              {loading
                ? "Saving..."
                : initialData
                  ? "Update"
                  : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialFormModal;