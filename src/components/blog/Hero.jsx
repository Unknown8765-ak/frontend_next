import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const Hero = ({ blogs = [] }) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
          <BookOpen size={18} aria-hidden="true" />
          Latest Articles & Industry Insights
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-10 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Learn.{" "}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Build.
          </span>{" "}
          <br />
          Grow Your Business.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-600">
          Discover expert guides, practical tutorials, business strategies,
          solar solutions, aquarium knowledge, and digital marketing insights —
          all designed to help you learn, build and grow faster.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {/* Explore Articles */}
          <a
            href="#articles"
            className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-9 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Explore Articles
            <ArrowRight size={22} aria-hidden="true" />
          </a>

          {/* Contact */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-9 py-5 text-lg font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={22} aria-hidden="true" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-8">
          {/* Articles */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-5xl font-bold text-blue-600">
              {blogs.length}+
            </h2>

            <p className="mt-3 text-lg text-slate-500">
              Articles
            </p>
          </div>

          {/* Readers */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-5xl font-bold text-blue-600">
              50K+
            </h2>

            <p className="mt-3 text-lg text-slate-500">
              Monthly Readers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;