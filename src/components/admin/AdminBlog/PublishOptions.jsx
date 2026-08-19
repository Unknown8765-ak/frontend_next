import { FileText, Globe } from "lucide-react";

const PublishOptions = ({ status, setStatus }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-bold text-slate-900">
        Publish Status
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Choose whether this article should be visible publicly.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label
          className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
            status === "draft"
              ? "border-amber-300 bg-amber-50"
              : "border-slate-200 bg-white"
          }`}
        >
          <input
            type="radio"
            name="status"
            value="draft"
            checked={status === "draft"}
            onChange={(e) => setStatus(e.target.value)}
            className="h-4 w-4"
          />

          <FileText size={20} className="text-amber-600" />

          <div>
            <p className="font-semibold text-slate-900">
              Draft
            </p>
            <p className="text-xs text-slate-500">
              Save without publishing
            </p>
          </div>
        </label>

        <label
          className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
            status === "published"
              ? "border-green-300 bg-green-50"
              : "border-slate-200 bg-white"
          }`}
        >
          <input
            type="radio"
            name="status"
            value="published"
            checked={status === "published"}
            onChange={(e) => setStatus(e.target.value)}
            className="h-4 w-4"
          />

          <Globe size={20} className="text-green-600" />

          <div>
            <p className="font-semibold text-slate-900">
              Published
            </p>
            <p className="text-xs text-slate-500">
              Make article publicly visible
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PublishOptions;