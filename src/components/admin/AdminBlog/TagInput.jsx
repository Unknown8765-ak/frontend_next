"use client";

import { useState } from "react";
import { X } from "lucide-react";

const TagInput = ({
  tags = [],
  onChange,
}) => {
  const [input, setInput] = useState("");

  const addTag = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const value = input.trim().toLowerCase();

    if (!value) return;

    if (tags.includes(value)) {
      setInput("");
      return;
    }

    onChange([...tags, value]);

    setInput("");
  };

  const removeTag = (tagToRemove) => {
    onChange(
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <div>
      {/* Label */}
      <label
        htmlFor="blog-tags"
        className="mb-2 block font-semibold text-slate-900"
      >
        Tags
      </label>

      {/* Input */}
      <input
        id="blog-tags"
        type="text"
        placeholder="Type a tag and press Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTag}
        autoComplete="off"
        className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          p-4
          text-slate-900
          shadow-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
        "
      />

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                transition
                hover:bg-blue-100
              "
            >
              <span>#{tag}</span>

              <button
                type="button"
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag} tag`}
                className="
                  rounded-full
                  p-0.5
                  transition
                  hover:bg-blue-200
                  hover:text-blue-900
                "
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;