import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = ({ content }) => {
  const heroImage = content?.sections?.hero?.image;

  return (
    <section className="py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}

        <div>
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Digital Growth Partner
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Transform Your Business
            <br />
            With{" "}
            <span className="text-indigo-600">
              Digital Solutions
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            We help businesses establish a powerful online presence
            through modern websites, digital marketing, SEO, and
            creative branding solutions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-indigo-600" />
              <span>Website Development</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-indigo-600" />
              <span>SEO Optimization</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-indigo-600" />
              <span>Digital Marketing</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-indigo-600" />
              <span>Brand Identity</span>
            </div>

          </div>

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <Link
              href="/about"
              className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* Right Image */}

        <div className="relative">

          <div className="h-130 rounded-3xl bg-gray-300 overflow-hidden flex items-center justify-center shadow-xl">

            {heroImage ? (
              <img
                src={heroImage}
                alt="Digital agency services and solutions"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-600 font-semibold">
                Agency Hero Image
              </p>
            )}

          </div>

          <div className="absolute top-8 -right-6 bg-indigo-600 text-white rounded-2xl px-6 py-4 shadow-xl">
            <h4 className="text-2xl font-bold">
              5★
            </h4>

            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;