const CategorySelect = ({ value, onChange, error }) => {
  return (
    <div>
      <label
        htmlFor="category"
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        Category
      </label>

      <input
        id="category"
        type="text"
        name="category"
        value={value}
        onChange={onChange}
        placeholder="e.g. Solar, Aquarium, Digital Marketing"
        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default CategorySelect;