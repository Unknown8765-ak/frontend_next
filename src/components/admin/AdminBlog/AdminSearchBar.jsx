import { Search } from "lucide-react";

const AdminSearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        placeholder="Search blog by title..."
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-11
          pr-4
          text-sm
          text-slate-800
          shadow-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
};

export default AdminSearchBar;