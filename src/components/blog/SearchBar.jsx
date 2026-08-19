import { Search } from "lucide-react";

const SearchBar = ({
  value = "",
  onChange,
}) => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="relative">
        <Search
          size={22}
          aria-hidden="true"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          name="blog-search"
          autoComplete="off"
          aria-label="Search blog articles"
          placeholder="Search articles, guides, tutorials..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-16 w-full rounded-2xl border border-gray-200 bg-white pl-16 pr-6 text-base text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </section>
  );
};

export default SearchBar;