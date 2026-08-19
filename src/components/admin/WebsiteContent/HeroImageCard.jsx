"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getWebsiteContent,
  updateHeroImage,
} from "@/services/websiteContent/websiteContentService";

const HeroImageCard = ({ page, title }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchContent = async () => {
    try {
      const response = await getWebsiteContent(page);

      const heroImage =
        response?.data?.sections?.hero?.image || "";

      setPreview(heroImage);
      setImage(null);
    } catch (error) {
      console.error("Fetch Hero Image Error:", error);

      toast.error(
        error?.message || "Failed to fetch hero image"
      );
    }
  };

  useEffect(() => {
    fetchContent();
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

      await updateHeroImage(page, formData);

      toast.success("Hero image updated successfully");

      await fetchContent();
    } catch (error) {
      console.error("Update Hero Image Error:", error);

      toast.error(
        error?.message || "Failed to update hero image"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      

      <div className="mb-6">
        <h2 className="text-2xl text-black font-bold">
          {title}
        </h2>

      </div>

    

      <div className="grid md:grid-cols-2 gap-8">
        

        <div>
          {preview ? (
            <img
              src={preview}
              alt={title}
              className="w-full h-72 rounded-xl border object-cover"
            />
          ) : (
            <div className="h-72 border rounded-xl flex justify-center items-center text-gray-500">
              No Hero Image
            </div>
          )}
        </div>

        {/* Upload */}

        <div className="flex flex-col justify-center space-y-5">
          <div>
            <label className="block font-medium mb-2">
              Select New Hero Image
            </label>

            <input
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
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg"
          >
            {loading
              ? "Uploading..."
              : "Update Hero Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageCard;