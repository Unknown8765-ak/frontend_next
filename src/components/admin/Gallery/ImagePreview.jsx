"use client";

import { FaTimes } from "react-icons/fa";

const ImagePreview = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 z-10 rounded-full bg-red-500 p-3 text-white transition hover:bg-red-600"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <img
          src={image.image}
          alt={image.title || "Gallery image"}
          className="max-h-[75vh] w-full object-contain bg-slate-100"
        />

        {/* Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {image.title}
          </h2>

          {image.category && (
            <p className="mt-2 text-gray-500">
              Category: {image.category}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;