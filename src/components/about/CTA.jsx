import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-linear-to-r from-blue-600 to-sky-500 p-10 lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="font-semibold uppercase tracking-widest text-blue-100">
                Let's Work Together
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Ready to Build
                <br />
                Something Better?
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Whether you need renewable energy solutions,
                aquarium services, or digital solutions, our
                team is ready to help.
              </p>

            </div>

            <div className="flex flex-col gap-5 sm:flex-row lg:justify-end">

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Contact Us
                <FaArrowRight />
              </Link>

              <Link
                href="/solar"
                className="rounded-xl border-2 border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-blue-700"
              >
                Explore Solutions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;