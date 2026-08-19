import { Loader2 } from "lucide-react";

const BlogActions = ({ loading }) => {
  return (
    <div className="flex justify-end border-t border-slate-200 pt-8">
      <button
        type="submit"
        disabled={loading}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-7
          py-3.5
          font-semibold
          text-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-blue-700
          hover:shadow-lg
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:hover:translate-y-0
        "
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
              aria-hidden="true"
            />
            Publishing...
          </>
        ) : (
          "Create Blog"
        )}
      </button>
    </div>
  );
};

export default BlogActions;