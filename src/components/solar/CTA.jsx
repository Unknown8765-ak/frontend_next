import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-linear-to-r from-yellow-500 to-yellow-400 p-10 lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-900">
                Let's Build a Greener Tomorrow
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Ready to Switch
                <br />
                to Solar Energy?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-800">
                Whether you're planning a residential rooftop system
                or a large commercial installation, our experts are
                ready to guide you with the best solar solution.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row lg:justify-end">

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
              >
                Get Free Quote
                <FaArrowRight aria-hidden="true" />
              </Link>

              <Link
                href="/about"
                className="rounded-xl border-2 border-slate-900 px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;