"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  getProfile,
  updateProfile,
} from "@/services/profile/profileService";

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const fetchProfile = async () => {
    try {
      setFetching(true);

      const response = await getProfile();

      reset({
        name: response.data.name || "",
        email: response.data.email || "",
      });
    } catch (error) {
      console.error("Fetch Profile Error:", error);

      toast.error(
        error?.message || "Failed to load profile"
      );
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name.trim());
      formData.append("email", data.email.trim());

      await updateProfile(formData);

      toast.success(
        "Profile updated successfully"
      );

      await fetchProfile();
    } catch (error) {
      console.error("Update Profile Error:", error);

      toast.error(
        error?.message || "Failed to update profile"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Personal Information
        </h2>

        <p className="text-gray-500 mt-1">
          Update your account information.
        </p>
      </div>

      {fetching ? (
        <div className="py-8 text-center text-gray-500">
          Loading profile...
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="block font-medium mb-2"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message:
                    "Name must contain at least 2 characters",
                },
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
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
                ? "Saving..."
                : "Save Changes"}
            </button>
          </div>

        </form>
      )}
    </section>
  );
};

export default ProfileForm;