"use client";

const CompanyImageCard = ({
  image,
  title,
  onDelete,
  deleting,
}) => {
  return (
    <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="h-72 bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Company Image
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {title}
        </h3>

        <button
          type="button"
          onClick={onDelete}
          disabled={!image || deleting}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded-lg transition"
        >
          {deleting ? "Deleting..." : "Delete Image"}
        </button>
      </div>
    </div>
  );
};

export default CompanyImageCard;