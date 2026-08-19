"use client";

import { FaEye, FaTrash } from "react-icons/fa";

const LeadRow = ({ lead, onView, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";

      case "Contacted":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Closed":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition">

      <td className="p-4 font-medium">
        {lead.name}
      </td>

      <td className="p-4">
        {lead.email}
      </td>

      <td className="p-4">
        {lead.phone}
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            lead.status
          )}`}
        >
          {lead.status}
        </span>
      </td>

      <td className="p-4">
        {lead.createdAt
          ? new Date(lead.createdAt).toLocaleDateString()
          : "N/A"}
      </td>

      <td className="p-4">
        <div className="flex justify-center gap-3">

          <button
            type="button"
            onClick={onView}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
            title="View Lead"
          >
            <FaEye />
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
            title="Delete Lead"
          >
            <FaTrash />
          </button>

        </div>
      </td>

    </tr>
  );
};

export default LeadRow;