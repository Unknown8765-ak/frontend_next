// src/components/solar/Hero.jsx

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ content }) => {
  const heroImage = content?.sections?.hero?.image;

  return (
    <section
      aria-labelledby="solar-hero-heading"
      className="py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Left Content */}

        <div>
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-yellow-700">
            Renewable Energy Solutions
          </span>

          <h1
            id="solar-hero-heading"
            className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Power Your Future
            <br />
            With Smart
            <span className="text-yellow-500"> Solar Energy</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Reduce electricity costs, increase energy independence,
            and contribute towards a sustainable future with our
            residential, commercial, and industrial solar solutions.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>Residential Solar</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>Commercial Solar</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>Industrial Projects</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span>Maintenance & Support</span>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600"
            >
              Get Free Consultation
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border-2 border-slate-900 px-8 py-4 font-semibold transition hover:bg-slate-900 hover:text-white"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* Right Image */}

        <div className="relative">

          <div className="flex h-130 items-center justify-center overflow-hidden rounded-3xl bg-gray-300 shadow-xl">

            {heroImage ? (
              <img
                src={heroImage}
                alt="Solar energy installation by Sun & Shadow Group"
                className="h-full w-full object-cover"
              />
            ) : (
              <p className="font-semibold text-gray-600">
                Solar Energy Solutions
              </p>
            )}

          </div>

          {/* Floating Badge */}

          <div className="absolute -right-6 top-8 rounded-2xl bg-yellow-500 px-6 py-4 text-white shadow-xl">

            <h4 className="text-2xl font-bold">
              Save
            </h4>

            <p>Up to 80% Electricity Bill</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;