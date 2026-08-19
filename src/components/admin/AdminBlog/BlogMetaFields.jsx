const BlogMetaFields = ({
  values,
  onChange,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          SEO
        </span>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Search Engine Settings
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Optimize how this blog appears in search engine results.
        </p>
      </div>

      <div className="space-y-6">

        {/* Meta Title */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="metaTitle"
              className="font-semibold text-slate-900"
            >
              Meta Title
            </label>

            <span className="text-xs text-slate-400">
              {values.metaTitle?.length || 0}/60
            </span>
          </div>

          <input
            id="metaTitle"
            type="text"
            name="metaTitle"
            value={values.metaTitle || ""}
            onChange={onChange}
            maxLength={60}
            placeholder="Enter SEO meta title"
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

          <p className="mt-2 text-xs text-slate-500">
            Recommended: keep it under 60 characters.
          </p>
        </div>

        {/* Meta Description */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="metaDescription"
              className="font-semibold text-slate-900"
            >
              Meta Description
            </label>

            <span className="text-xs text-slate-400">
              {values.metaDescription?.length || 0}/160
            </span>
          </div>

          <textarea
            id="metaDescription"
            rows={5}
            name="metaDescription"
            value={values.metaDescription || ""}
            onChange={onChange}
            maxLength={160}
            placeholder="Write a short description for search engines..."
            className="
              w-full
              resize-none
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

          <p className="mt-2 text-xs text-slate-500">
            Recommended: keep it under 160 characters.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BlogMetaFields;