"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminProtectedRoute = ({ children }) => {
  const router = useRouter();

  const { status, user, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (loading) return;

    if (!status || !user) {
      router.replace("/admin/login");
      return;
    }
    console.log("role" ,user.role)
    if (user.role !== "admin") {
      router.replace("/");
    }
  }, [loading, status, user, router]);

  // Auth check complete hone tak kuch mat dikhao
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="mt-4 text-sm font-medium text-slate-600">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  // Unauthorized user ke liye protected content render mat karo
  if (!status || !user || user.role !== "admin") {
    return null;
  }

  return children;
};

export default AdminProtectedRoute;