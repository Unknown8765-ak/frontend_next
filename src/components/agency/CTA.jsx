import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24">

      <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 lg:p-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <span className="uppercase tracking-widest text-sm font-semibold text-indigo-100">
              Let's Grow Together
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Grow
              <br />
              Your Business Online?
            </h2>

            <p className="mt-6 text-lg text-indigo-100 leading-8">
              Whether you need a modern website, SEO, branding,
              or complete digital marketing solutions, our team
              is ready to help your business achieve measurable
              online growth.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

            <Link
              href="/contact"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition text-center"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;