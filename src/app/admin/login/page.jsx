"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa";

import { loginUser } from "@/services/auth/authService";
import { login } from "@/auth/authSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      const user = response.data.user;

      if (!user) {
        throw new Error("Invalid server response");
      }

      if (user.role !== "admin") {
        throw new Error("Access Denied");
      }

      dispatch(login(user));

      router.replace("/admin/dashboard");

    } catch (error) {
      console.error("Admin Login Error:", error);

      alert(
        error?.message || "Something went wrong while logging in"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-slate-800">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to access the admin dashboard
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-gray-400 flex items-center justify-center gap-2"
          >
            {loading ? "Logging in..." : "Login"}

            {!loading && <FaArrowRight />}

          </button>

        </form>

      </div>

    </section>
  );
};

export default Login;