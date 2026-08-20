import TestimonialTable from "@/components/admin/Testimonials/TestimonialTable";

export const metadata = {
  title: "Testimonials | Admin",
  description: "Manage website testimonials",
};

const TestimonialsPage = () => {
  return (
    <main>
      <TestimonialTable />
    </main>
  );
};

export default TestimonialsPage;
