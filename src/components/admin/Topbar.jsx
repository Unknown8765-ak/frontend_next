"use client";

import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Admin
        </p>
      </div>

      {/* Right */}

      <Link
        href="/admin/profile"
        className="flex items-center gap-3 transition-colors hover:text-blue-600"
      >
        <FaUserCircle
          size={42}
          className="text-blue-600"
        />

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Admin
          </p>

          <p className="text-xs text-gray-500">
            Administrator
          </p>
        </div>
      </Link>
    </header>
  );
};

export default Topbar;