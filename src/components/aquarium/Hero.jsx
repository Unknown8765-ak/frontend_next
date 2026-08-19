import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = ({ content }) => {
  const image = content?.sections?.hero?.image;

  return (
   <section
  aria-labelledby="aquarium-hero-heading"
  className="w-full min-w-0 py-20 lg:py-28"
>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}

          <div className="min-w-0">
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Premium Aquarium Solutions
            </span>

            <h1
              id="aquarium-hero-heading"
              className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Creating Beautiful
              <br />

              <span className="text-cyan-600">
                Underwater Worlds
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              From luxury home aquariums to commercial aquatic
              installations, we design, build, and maintain stunning
              aquatic environments with complete professional care.
            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 items-center gap-3">
                <FaCheckCircle className="shrink-0 text-cyan-600" />
                <span>Custom Aquarium Design</span>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <FaCheckCircle className="shrink-0 text-cyan-600" />
                <span>Professional Aquascaping</span>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <FaCheckCircle className="shrink-0 text-cyan-600" />
                <span>Installation Service</span>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <FaCheckCircle className="shrink-0 text-cyan-600" />
                <span>Maintenance & Support</span>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700 sm:px-8"
              >
                Get Free Consultation
                <FaArrowRight />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border-2 border-slate-900 px-6 py-4 font-semibold transition hover:bg-slate-900 hover:text-white sm:px-8"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}

          <div className="relative min-w-0 w-full">
            <div className="h-[420px] w-full overflow-hidden rounded-3xl bg-gray-300 shadow-xl sm:h-[500px] lg:h-[520px]">
              {image ? (
                <img
                  src={image}
                  alt="Premium aquarium design by Sun & Shadow Group"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-semibold text-gray-600">
                    Aquarium Image
                  </p>
                </div>
              )}
            </div>

            {/* Floating Badge */}

            <div className="absolute right-4 top-8 rounded-2xl bg-cyan-600 px-5 py-4 text-white shadow-xl sm:right-6 sm:px-6 sm:py-4">
              <h4 className="text-xl font-bold sm:text-2xl">
                Expert
              </h4>

              <p className="text-sm sm:text-base">
                Design & Maintenance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;