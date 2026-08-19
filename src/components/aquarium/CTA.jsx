import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="bg-linear-to-r from-cyan-600 to-sky-500 rounded-3xl p-10 lg:p-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div>
            <span className="uppercase tracking-widest text-sm font-semibold text-cyan-100">
              Bring Nature Into Your Space
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Create
              <br />
              Your Dream Aquarium?
            </h2>

            <p className="mt-6 text-lg text-cyan-50 leading-8">
              Whether you want a luxury home aquarium, a beautiful
              office aquascape, or a complete commercial aquatic
              installation, our experts are ready to bring your
              vision to life.
            </p>
          </div>

          {/* Right Buttons */}

          <div className="flex flex-col sm:flex-row lg:justify-end gap-5">

            <Link
              href="/contact"
              className="
                bg-white
                text-cyan-700
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                hover:bg-slate-900
                hover:text-white
                transition
              "
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>

            <Link
              href="/about"
              className="
                border-2
                border-white
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-white
                hover:text-cyan-700
                transition
                text-center
              "
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