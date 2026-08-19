import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <section
      className="py-16"
      aria-label="Blog pagination"
    >
      <div className="flex items-center justify-center gap-3">
        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
          aria-label="Go to previous page"
          className="rounded-xl border p-3 transition enabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft
            size={18}
            aria-hidden="true"
          />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;

          return (
            <button
              type="button"
              key={page}
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? "page" : undefined}
              className={`h-11 w-11 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "border bg-white text-gray-700 enabled:hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
          aria-label="Go to next page"
          className="rounded-xl border p-3 transition enabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight
            size={18}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};

export default Pagination;