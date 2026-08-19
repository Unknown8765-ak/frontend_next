"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getProfile } from "@/services/profile/profileService";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response = await getProfile();

      setProfile(response.data);
    } catch (error) {
      console.error("Profile Error:", error);

      toast.error(
        error?.message || "Failed to load profile"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-center">
          <p className="text-gray-500">
            Loading Profile...
          </p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <p className="text-center text-red-500">
          Unable to load profile.
        </p>
      </div>
    );
  }

  const avatar =
    profile.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      profile.name
    )}&background=2563eb&color=fff&size=250`;

  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Avatar */}

        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-blue-600 bg-gray-100">
         {profile.image ? (
            <Image
                src={profile.image}
                alt={profile.name}
                fill
                sizes="144px"
                className="object-cover"
            />
            ) : (
            <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                {profile.name?.charAt(0)?.toUpperCase()}
            </div>
)}
        </div>

        {/* Details */}

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            {profile.name}
          </h2>

          <p className="text-blue-600 font-medium mt-2 capitalize">
            {profile.role}
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <h3 className="font-semibold break-all">
                {profile.email}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                Active
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileCard;