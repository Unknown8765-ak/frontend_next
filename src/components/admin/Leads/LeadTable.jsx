"use client";

import LeadRow from "./LeadRow";
import LeadModal from "./LeadModel";

import { useEffect, useState } from "react";
import {
  getAllLeads,
  deleteLead,
} from "../../../services/lead/leadService";

import toast from "react-hot-toast";

const LeadTable = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await getAllLeads();

      setLeads(response.data || []);
    } catch (error) {
      console.error("Fetch Leads Error:", error);

      toast.error(
        error?.message || "Failed to fetch leads"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await deleteLead(id);

      toast.success("Lead deleted successfully");

      setLeads((prev) =>
        prev.filter((lead) => lead._id !== id)
      );

      if (selectedLead?._id === id) {
        setSelectedLead(null);
      }

    } catch (error) {
      console.error("Delete Lead Error:", error);

      toast.error(
        error?.message || "Failed to delete lead"
      );
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const searchTerm = search.toLowerCase();

    return (
      lead.name?.toLowerCase().includes(searchTerm) ||
      lead.email?.toLowerCase().includes(searchTerm) ||
      lead.phone?.toLowerCase().includes(searchTerm) ||
      lead.status?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Leads
          </h2>

          <p className="text-gray-500 mt-1">
            Manage customer inquiries and leads
          </p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lead..."
          className="
            border border-slate-200
            rounded-lg
            px-4 py-2
            w-full md:w-72
            outline-none
            focus:border-blue-600
            focus:ring-2
            focus:ring-blue-100
          "
        />

      </div>

      {/* Loading */}
      {loading ? (
        <div className="py-16 text-center text-gray-500">
          Loading leads...
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          {search
            ? "No leads found matching your search."
            : "No leads found."}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredLeads.map((lead) => (
                <LeadRow
                  key={lead._id}
                  lead={lead}
                  onView={() => setSelectedLead(lead)}
                  onDelete={() => handleDelete(lead._id)}
                />
              ))}

            </tbody>

          </table>

        </div>
      )}

      {/* Modal */}
      {selectedLead && (
        <LeadModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}

    </>
  );
};

export default LeadTable;