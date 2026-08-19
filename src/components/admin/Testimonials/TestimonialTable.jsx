"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TestimonialRow from "./TestimonialRow";
import TestimonialFormModal from "./TestimonialFormModal";

import {
  getAllTestimonials,
  deleteTestimonial,
} from "@/services/testimonial/testimonialService";

const TestimonialTable = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const response = await getAllTestimonials();

      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Fetch Testimonials Error:", error);

      toast.error(
        error?.message || "Failed to load testimonials"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEdit = (testimonial) => {
    setSelected(testimonial);
    setOpen(true);
  };

  const handleAdd = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteTestimonial(id);

      setTestimonials((current) =>
        current.filter(
          (testimonial) => testimonial._id !== id
        )
      );

      toast.success(
        "Testimonial deleted successfully"
      );
    } catch (error) {
      console.error("Delete Testimonial Error:", error);

      toast.error(
        error?.message || "Failed to delete testimonial"
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <section className="bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              Testimonials
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Manage client testimonials
            </p>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
          >
            + Add Testimonial
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="py-12 text-center">
            <p className="text-gray-500">
              Loading testimonials...
            </p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-500">
              No testimonials found.
            </p>
          </div>
        ) : (
          /* Table */
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">
                    Client
                  </th>

                  <th className="p-4 text-left">
                    Rating
                  </th>

                  <th className="p-4 text-left">
                    Review
                  </th>

                  <th className="p-4 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {testimonials.map((testimonial) => (
                  <TestimonialRow
                    key={testimonial._id}
                    testimonial={testimonial}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    deletingId={deletingId}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <TestimonialFormModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelected(null);
        }}
        initialData={selected}
        refreshTestimonials={fetchTestimonials}
      />
    </>
  );
};

export default TestimonialTable;