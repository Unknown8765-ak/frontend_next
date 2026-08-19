"use client";

import {
  FaTachometerAlt,
  FaGlobe,
  FaImages,
  FaUsers,
  FaStar,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
  FaBlog,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/auth/authSlice";
import { logoutUserAPI } from "@/services/auth/authService";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FaTachometerAlt,
  },
  {
    title: "Website Content",
    path: "/admin/website-content",
    icon: FaGlobe,
  },
  {
    title: "BLog",
    path: "/admin/blog",
    icon: FaBlog,
  },
  {
    title: "Leads",
    path: "/admin/leads",
    icon: FaUsers,
  },
  {
    title: "Gallery",
    path: "/admin/gallery",
    icon: FaImages,
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: FaStar,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: FaUserCircle,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await logoutUserAPI();

      dispatch(logout());

      router.replace("/admin/login");
    } catch (error) {
      console.error("Logout Error:", error);

      // Agar tum toast system use kar rahe ho
      // toast.error(error.message);
    }
  };

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white">
      {/* Logo / Header */}

      <div className="border-b border-slate-700 p-6">
        <h2 className="text-2xl font-bold">
          Admin Panel
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Company Management
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.path ||
            pathname.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.title}
              href={item.path}
              className={`flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="text-lg" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t border-slate-700 p-5">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 text-red-400 transition hover:text-red-300"
        >
          <FaSignOutAlt />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;