"use client";

const StatusFilter = ({
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Filter blogs by status"
      className="
        h-12
        min-w-40
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        text-sm
        font-medium
        text-slate-700
        shadow-sm
        outline-none
        transition-all
        duration-200
        hover:border-slate-300
        focus:border-blue-600
        focus:ring-4
        focus:ring-blue-100
      "
    >
      <option value="all">
        All Status
      </option>

      <option value="published">
        Published
      </option>

      <option value="draft">
        Draft
      </option>
    </select>
  );
};

export default StatusFilter;