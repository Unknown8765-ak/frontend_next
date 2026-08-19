"use client";

import { FaTimes } from "react-icons/fa";

const LeadModal = ({ lead, onClose }) => {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Lead Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
            aria-label="Close modal"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <h3 className="font-semibold text-lg mt-1">
                {lead.name || "N/A"}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="font-semibold text-lg mt-1 break-all">
                {lead.email || "N/A"}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <h3 className="font-semibold text-lg mt-1">
                {lead.phone || "N/A"}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Subject</p>
              <h3 className="font-semibold text-lg mt-1">
                {lead.subject || "N/A"}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Status</p>

              <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {lead.status || "N/A"}
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Date</p>

              <h3 className="font-semibold text-lg mt-1">
                {lead.createdAt
                  ? new Date(lead.createdAt).toLocaleDateString()
                  : "N/A"}
              </h3>
            </div>

          </div>

          {/* Message */}
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Message
            </p>

            <div className="bg-gray-100 rounded-xl p-4 leading-7 whitespace-pre-wrap">
              {lead.message || "No message provided."}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t p-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default LeadModal;