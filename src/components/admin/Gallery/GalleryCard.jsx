"use client";

import { FaEye, FaTrash } from "react-icons/fa";

const GalleryCard = ({ image, onPreview, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden group">
        <img
          src={image.image}
          alt={image.title || "Gallery image"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={onPreview}
            aria-label="Preview image"
            className="rounded-full bg-white p-3 text-blue-600 transition hover:scale-110"
          >
            <FaEye />
          </button>

          <button
            type="button"
            onClick={onDelete}
            aria-label="Delete image"
            className="rounded-full bg-white p-3 text-red-600 transition hover:scale-110"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">
          {image.title}
        </h3>

        {image.category && (
          <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {image.category}
          </span>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;