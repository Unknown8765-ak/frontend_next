"use client";

import {
  FaGlobe,
  FaUsers,
  FaImages,
  FaCog,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";

const actions = [
  {
    title: "Manage Website",
    description: "Update website sections and content.",
    path: "/admin/website-content",
    icon: FaGlobe,
    color: "bg-blue-500",
  },
  {
    title: "View Leads",
    description: "View and manage customer inquiries.",
    path: "/admin/leads",
    icon: FaUsers,
    color: "bg-emerald-500",
  },
  {
    title: "Manage Gallery",
    description: "Upload and manage project images.",
    path: "/admin/gallery",
    icon: FaImages,
    color: "bg-violet-500",
  },
  {
    title: "Testimonials",
    description: "Manage customer testimonials.",
    path: "/admin/testimonials",
    icon: FaStar,
    color: "bg-amber-500",
  },
  {
    title: "Settings",
    description: "Manage application settings.",
    path: "/admin/settings",
    icon: FaCog,
    color: "bg-slate-600",
  },
];

const QuickActions = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Quickly access important admin sections.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.path}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div
                className={`${action.color} flex h-14 w-14 items-center justify-center rounded-xl text-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                Manage →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;