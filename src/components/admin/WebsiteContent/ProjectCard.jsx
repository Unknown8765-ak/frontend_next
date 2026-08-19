"use client";

const ProjectCard = ({ project, onDelete, deleting }) => {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      
      {/* Image */}
      <div className="h-52 bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title || "Project image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {project.title}
        </h3>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block truncate text-sm text-blue-600 hover:underline"
          >
            {project.link}
          </a>
        )}

        {project.technologies && (
          <p className="mt-2 text-sm font-medium text-gray-600">
            {project.technologies}
          </p>
        )}

        <p className="mt-3 line-clamp-3 text-gray-600">
          {project.description}
        </p>

        <button
          type="button"
          onClick={onDelete}
          disabled={deleting}
          className="mt-5 w-full rounded-lg bg-red-600 py-2 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {deleting ? "Deleting..." : "Delete Project"}
        </button>

      </div>
    </article>
  );
};

export default ProjectCard;