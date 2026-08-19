"use client";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

import GalleryCard from "./GalleryCard";
import UploadModal from "./UploadModel";
import ImagePreview from "./ImagePreview";

import {
  getAllGalleryImages,
  deleteGalleryImage,
} from "@/services/gallery/galleryService";

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await getAllGalleryImages();

      setImages(response.data || []);
    } catch (error) {
      console.error("Get Gallery Error:", error);

      toast.error(
        error?.message || "Failed to load gallery"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    try {
      await deleteGalleryImage(id);

      toast.success("Image deleted successfully");

      await fetchGallery();
    } catch (error) {
      console.error("Delete Gallery Error:", error);

      toast.error(
        error?.message || "Failed to delete image"
      );
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Gallery Images
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all images displayed on your website.
          </p>

          <p className="mt-2 text-sm font-medium text-blue-600">
            Total Images: {images.length}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowUploadModal(true)}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FaPlus />
          Upload Image
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="py-16 text-center">
          <p className="font-medium text-gray-500">
            Loading Gallery...
          </p>
        </div>
      )}

      {/* Empty */}
      {!loading && images.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            No Gallery Images
          </h3>

          <p className="mt-2 text-gray-500">
            Upload your first gallery image.
          </p>
        </div>
      )}

      {/* Grid */}
      {!loading && images.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((item) => (
            <GalleryCard
              key={item._id}
              image={item}
              onPreview={() => setPreviewImage(item)}
              onDelete={() => handleDelete(item._id)}
            />
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          refreshGallery={fetchGallery}
        />
      )}

      {/* Preview */}
      {previewImage && (
        <ImagePreview
          image={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
};

export default GalleryGrid;