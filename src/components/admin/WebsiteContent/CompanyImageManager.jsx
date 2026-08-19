"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import {
  getWebsiteContent,
  updateCompanyImage,
  deleteCompanyImage,
} from "@/services/websiteContent/websiteContentService";

const CompanyImageManager = ({ page, title }) => {
  const [companyImage, setCompanyImage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fileRef = useRef(null);

  const fetchCompanyImage = async () => {
    try {
      const response = await getWebsiteContent(page);

      setCompanyImage(
        response?.data?.sections?.about?.image || ""
      );
    } catch (error) {
      console.error("Fetch Company Image Error:", error);

      toast.error(
        error?.message || "Failed to fetch company image"
      );
    }
  };

  useEffect(() => {
    fetchCompanyImage();
  }, [page]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImage(file);

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);

      await updateCompanyImage(page, formData);

      toast.success("Company image updated successfully");

      setImage(null);
      setPreview("");

      if (fileRef.current) {
        fileRef.current.value = "";
      }

      await fetchCompanyImage();
    } catch (error) {
      console.error("Update Company Image Error:", error);

      toast.error(
        error?.message || "Failed to update company image"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this company image?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await deleteCompanyImage(page);

      setCompanyImage("");

      toast.success("Company image deleted successfully");
    } catch (error) {
      console.error("Delete Company Image Error:", error);

      toast.error(
        error?.message || "Failed to delete company image"
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl text-black font-bold">
          {title}
        </h2>
      </div>

      {/* Upload */}

      <div className="flex flex-col md:flex-row gap-5 mb-8">
        <div className="flex-1">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="button"
          onClick={handleUpload}
          disabled={loading || !image}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg"
        >
          {loading ? "Uploading..." : "Update Image"}
        </button>
      </div>

      

      {preview && (
        <div className="mb-8">
          <h3 className="font-semibold mb-3">
            New Image Preview
          </h3>

          <img
            src={preview}
            alt="New company image preview"
            className="w-64 h-64 object-cover rounded-xl border"
          />
        </div>
      )}

      {/* Current Image */}

      <div>
        <h3 className="font-semibold text-black mb-3">
          Current Image
        </h3>

        {companyImage ? (
          <div className="border rounded-xl overflow-hidden shadow-sm max-w-md">
            <img
              src={companyImage}
              alt={title}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg"
              >
                {deleting
                  ? "Deleting..."
                  : "Delete Image"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 border rounded-xl">
            No Company Image Found
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyImageManager;