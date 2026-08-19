const CategoryFilter = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Blog categories"
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isSelected}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isSelected
                  ? "border-blue-600 bg-blue-600 text-white shadow-md"
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilter;