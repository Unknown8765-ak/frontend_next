"use client";

import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

const TestimonialRow = ({
  testimonial,
  onEdit,
  onDelete,
  deletingId,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* Client */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">
              {testimonial.name}
            </h3>

            <p className="text-sm text-gray-500">
              {testimonial.company}
            </p>
          </div>
        </div>
      </td>

      {/* Rating */}
      <td className="p-4">
        <div className="flex">
          {Array.from({
            length: testimonial.rating,
          }).map((_, index) => (
            <span
              key={index}
              className="text-yellow-500 text-lg"
            >
              ★
            </span>
          ))}
        </div>
      </td>

      {/* Review */}
      <td className="p-4 max-w-sm">
        <p className="truncate">
          {testimonial.review}
        </p>
      </td>

      {/* Actions */}
      <td className="p-4">
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => onEdit(testimonial)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
            aria-label="Edit testimonial"
          >
            <FaEdit />
          </button>

          <button
            type="button"
            onClick={() => onDelete(testimonial._id)}
            disabled={deletingId === testimonial._id}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition"
            aria-label="Delete testimonial"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TestimonialRow;