import ProfileCard from "@/components/admin/profile/ProfileCard";
import ProfileForm from "@/components/admin/profile/ProfileForm";
import ChangePassword from "@/components/admin/profile/ChangePassword";

export const metadata = {
  title: "Admin Profile",
  description: "Manage admin profile and account security",
};

const ProfilePage = () => {
  return (
    <main className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your personal information and
          account security.
        </p>
      </div>

      <ProfileCard />
      <ProfileForm />
      <ChangePassword />

    </main>
  );
};

export default ProfilePage;