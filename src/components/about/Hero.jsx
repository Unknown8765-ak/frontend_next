import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Content */}

        <div className="max-w-5xl">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            About Sun & Shadow Group
          </span>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Building Better Solutions Through{" "}
            <span className="text-blue-600">
              Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            Sun & Shadow Group is a diversified business organization
            delivering innovative, reliable, and sustainable solutions
            across multiple industries. Our expertise spans renewable
            energy, premium aquarium design and maintenance, and digital
            marketing services.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            We combine industry knowledge, modern technology, creative
            thinking, and a customer-first approach to create solutions
            that deliver meaningful long-term value. From helping
            businesses adopt cleaner energy solutions to designing
            exceptional aquatic environments and building strong digital
            brands, we focus on quality, innovation, and measurable
            results.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us
              <FaArrowRight />
            </Link>

            <Link
              href="/solar"
              className="rounded-xl border-2 border-slate-900 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Explore Our Solutions
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;