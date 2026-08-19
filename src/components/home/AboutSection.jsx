import Link from "next/link";
import Image from "next/image";

const AboutSection = ({ content }) => {
  const aboutImage = content?.sections?.about?.image;

  return (
    <section
      aria-labelledby="about-heading"
      className="py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="text-2xl font-bold uppercase tracking-widest text-yellow-500">
            About Sun & Shadow Group
          </span>

          <h2
            id="about-heading"
            className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl"
          >
            Innovation, Balance,
            <br />
            and Performance.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Sun & Shadow Group is a progressive innovation startup
            built at the intersection of efficiency,
            sustainability, and market acceleration.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            We bridge the gap between three modern operational
            spaces:

            <span className="font-semibold text-yellow-500">
              {" "}Sun
            </span>{" "}
            (Clean Tech & Renewable Energy),

            <span className="font-semibold text-cyan-500">
              {" "}Aqua
            </span>{" "}
            (Indoor Nature & Aquarium Solutions), and

            <span className="font-semibold text-slate-900">
              {" "}Shadow
            </span>{" "}
            (Digital Growth & Marketing).
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            Operating with a technology-first mindset, we build
            scalable solutions that deliver measurable results for
            homeowners, businesses, and modern enterprises.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-white transition hover:bg-yellow-600"
          >
            Learn More
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-112.5 w-full overflow-hidden rounded-3xl bg-gray-200">
          {aboutImage ? (
            <Image
              src={aboutImage}
              alt="Sun & Shadow Group company"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-gray-500">
                Company Image Not Found
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;