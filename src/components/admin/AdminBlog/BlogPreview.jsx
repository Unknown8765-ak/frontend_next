const BlogPreview = ({ formData }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Preview
        </span>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Live Blog Preview
        </h2>
      </div>

      {formData.imagePreview && (
        <img
          src={formData.imagePreview}
          alt="Blog preview"
          className="mb-7 h-72 w-full rounded-2xl object-cover"
        />
      )}

      <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
        {formData.title || "Blog Title"}
      </h1>

      <p className="mt-4 leading-7 text-slate-600">
        {formData.excerpt || "Blog excerpt will appear here..."}
      </p>

      <div className="mt-5">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {formData.category || "Category"}
        </span>
      </div>

      <div className="mt-8 whitespace-pre-wrap leading-8 text-slate-700">
        {formData.content || "Blog content will appear here..."}
      </div>
    </div>
  );
};

export default BlogPreview;