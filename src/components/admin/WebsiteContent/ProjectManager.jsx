"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import {
  getWebsiteContent,
  addProject,
  deleteProject,
} from "../../../services/websiteContent/websiteContentService";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getWebsiteContent("agency");

      setProjects(response.data?.sections?.projects || []);
    } catch (error) {
      console.error("Fetch Projects Error:", error);

      toast.error(
        error?.message || "Failed to fetch projects"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteProject(id);

      toast.success("Project deleted successfully");

      await fetchProjects();
    } catch (error) {
      console.error("Delete Project Error:", error);

      toast.error(
        error?.message || "Failed to delete project"
      );
    } finally {
      setDeletingId(null);
    }
  };

  const handleCreateProject = async (formData) => {
    try {
      setSaving(true);

      await addProject(formData);

      toast.success("Project added successfully");

      await fetchProjects();

      setShowModal(false);
    } catch (error) {
      console.error("Create Project Error:", error);

      toast.error(
        error?.message || "Failed to add project"
      );

      throw error;
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <section className="rounded-xl bg-white p-6 shadow-md">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Agency Projects
            </h2>

            <p className="mt-1 text-gray-500">
              Manage projects displayed on your agency website.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:bg-gray-400"
          >
            + Add Project
          </button>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border bg-white"
              >
                <div className="h-52 animate-pulse bg-gray-200" />

                <div className="space-y-3 p-5">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}

          </div>
        ) : projects.length === 0 ? (

          /* Empty State */
          <div className="rounded-xl border border-dashed py-16 text-center">

            <h3 className="text-lg font-semibold text-gray-700">
              No Projects Found
            </h3>

            <p className="mt-2 text-gray-500">
              Add your first agency project to get started.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
            >
              Add Project
            </button>

          </div>

        ) : (

          /* Projects */
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                deleting={deletingId === project._id}
                onDelete={() => handleDelete(project._id)}
              />
            ))}

          </div>

        )}

      </section>

      {/* Modal */}
      <ProjectModal
        isOpen={showModal}
        onClose={() => {
          if (!saving) {
            setShowModal(false);
          }
        }}
        loading={saving}
        onSubmit={handleCreateProject}
      />
    </>
  );
};

export default ProjectManager;