import HeroImageCard from "@/components/admin/WebsiteContent/HeroImageCard";
import CompanyImageManager from "@/components/admin/WebsiteContent/CompanyImageManager";
import ProjectManager from "@/components/admin/WebsiteContent/ProjectManager";

export const metadata = {
  title: "Website Content | Admin",
  description: "Manage website content, hero images, company images and projects.",
};

export default function WebsiteContentPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Header */}

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Website Content
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your website images and agency projects.
          </p>
        </div>

        {/* Hero Images */}

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Hero Images
          </h2>

          <HeroImageCard
            page="home"
            title="Home Hero Image"
          />

          <HeroImageCard
            page="solar"
            title="Solar Hero Image"
          />

          <HeroImageCard
            page="aquarium"
            title="Aquarium Hero Image"
          />

          <HeroImageCard
            page="agency"
            title="Agency Hero Image"
          />
        </section>

        {/* Company Images */}

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Company Images
          </h2>

          <CompanyImageManager
            page="home"
            title="Home Company Image"
          />

          <CompanyImageManager
            page="about"
            title="About Company Image"
          />
        </section>

        {/* Agency Projects */}

        <section>
          <ProjectManager />
        </section>

      </div>
    </main>
  );
}