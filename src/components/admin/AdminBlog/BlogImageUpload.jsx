"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ImagePlus, UploadCloud, X } from "lucide-react";

const BlogImageUpload = ({ image, onChange, existingImage = "" }) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(existingImage);

  useEffect(() => {
    if (!image) {
      setPreview(existingImage || "");
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image, existingImage]);

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image.");
      return;
    }

    onChange(file);
  };

  const removeImage = () => {
    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-slate-800">
        Featured Image
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      {!preview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-72 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-blue-500 hover:bg-blue-50"
        >
          <UploadCloud size={48} className="text-blue-600" />

          <span className="mt-4 text-lg font-bold text-slate-900">
            Upload Featured Image
          </span>

          <span className="mt-2 text-sm text-slate-500">
            PNG, JPG, JPEG or WEBP
          </span>
        </button>
      ) : (
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={preview}
            alt="Featured image preview"
            className="h-80 w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 flex justify-between bg-linear-to-t from-black/70 to-transparent p-5 pt-12">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900"
            >
              <ImagePlus size={17} />
              Change Image
            </button>

            <button
              type="button"
              onClick={removeImage}
              className="rounded-xl bg-red-500 p-2.5 text-white hover:bg-red-600"
              aria-label="Remove image"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogImageUpload;