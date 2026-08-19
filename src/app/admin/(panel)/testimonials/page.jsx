import TestimonialTable from "@/components/admin/testimonials/TestimonialTable";

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