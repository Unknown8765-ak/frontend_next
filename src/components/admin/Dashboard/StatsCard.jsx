"use client";

import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaImages,
  FaStar,
  FaEye,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { getDashboardData } from "@/services/dashBoard/dashboardService";

const StatsCard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getDashboardData();

      setDashboard(response.data);
    } catch (error) {
      console.error("Dashboard Error:", error);

      toast.error(
        error.message || "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
        <p className="font-medium text-red-600">
          Unable to load dashboard statistics.
        </p>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Leads",
      value: dashboard.totalLeads ?? 0,
      icon: FaEnvelope,
      color: "bg-blue-500",
    },
    {
      title: "Gallery Images",
      value: dashboard.totalGalleryImages ?? 0,
      icon: FaImages,
      color: "bg-emerald-500",
    },
    {
      title: "Testimonials",
      value: dashboard.totalTestimonials ?? 0,
      icon: FaStar,
      color: "bg-violet-500",
    },
    {
      title: "Visitors",
      value: dashboard.totalVisitors ?? 0,
      icon: FaEye,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>

              <div
                className={`${item.color} flex h-14 w-14 items-center justify-center rounded-xl text-xl text-white shadow-md`}
              >
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;