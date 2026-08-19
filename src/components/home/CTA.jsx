import Link from "next/link";

const CTA = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-500">
            Let's Build the Future Together
          </span>

          <h2
            id="cta-heading"
            className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl"
          >
            Ready to Power Your Vision?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Whether you're looking for clean energy solutions,
            premium aquarium installations, or digital marketing
            strategies, Sun & Shadow Group is here to help you
            achieve sustainable growth with innovative solutions.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-yellow-500 px-8 py-4 text-white transition duration-300 hover:bg-yellow-600"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white px-8 py-4 text-white transition duration-300 hover:bg-white hover:text-slate-900"
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