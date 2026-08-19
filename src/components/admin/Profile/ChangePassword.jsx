"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { changePassword } from "@/services/profile/profileService";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await changePassword({
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      toast.success(
        "Password updated successfully"
      );

      reset();
      setShowCurrent(false);
      setShowNew(false);
      setShowConfirm(false);
    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );

      toast.error(
        error?.message ||
          "Failed to update password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-8">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-blue-100 p-3 rounded-full">
          <FaLock className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Change Password
          </h2>

          <p className="text-gray-500">
            Update your account password securely.
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Current Password */}

        <div>
          <label
            htmlFor="currentPassword"
            className="block mb-2 font-medium"
          >
            Current Password
          </label>

          <div className="relative">
            <input
              id="currentPassword"
              type={
                showCurrent
                  ? "text"
                  : "password"
              }
              placeholder="Enter current password"
              autoComplete="current-password"
              className="w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:border-blue-600"
              {...register(
                "currentPassword",
                {
                  required:
                    "Current password is required",
                }
              )}
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrent(
                  (value) => !value
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={
                showCurrent
                  ? "Hide current password"
                  : "Show current password"
              }
            >
              {showCurrent ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-2">
              {
                errors.currentPassword
                  .message
              }
            </p>
          )}
        </div>

        {/* New Password */}

        <div>
          <label
            htmlFor="newPassword"
            className="block mb-2 font-medium"
          >
            New Password
          </label>

          <div className="relative">
            <input
              id="newPassword"
              type={
                showNew
                  ? "text"
                  : "password"
              }
              placeholder="Enter new password"
              autoComplete="new-password"
              className="w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:border-blue-600"
              {...register("newPassword", {
                required:
                  "New password is required",
                minLength: {
                  value: 8,
                  message:
                    "Password must be at least 8 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() =>
                setShowNew(
                  (value) => !value
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={
                showNew
                  ? "Hide new password"
                  : "Show new password"
              }
            >
              {showNew ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 font-medium"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              id="confirmPassword"
              type={
                showConfirm
                  ? "text"
                  : "password"
              }
              placeholder="Confirm new password"
              autoComplete="new-password"
              className="w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:border-blue-600"
              {...register(
                "confirmPassword",
                {
                  required:
                    "Please confirm your password",
                  validate: (value) =>
                    value === newPassword ||
                    "Passwords do not match",
                }
              )}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(
                  (value) => !value
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={
                showConfirm
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirm ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              {
                errors.confirmPassword
                  .message
              }
            </p>
          )}
        </div>

        {/* Submit */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition"
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>
        </div>

      </form>
    </section>
  );
};

export default ChangePassword;