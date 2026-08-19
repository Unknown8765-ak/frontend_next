import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Contact Sun & Shadow Group
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Let's Build Something
            <span className="text-blue-600"> Great Together</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl">
            Whether you are looking for solar energy solutions, premium
            aquarium services, or professional digital solutions, our team
            is ready to understand your requirements and help you find the
            right solution.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              Learn More
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;