import Link from "next/link";
import Image from "next/image";

const Hero = ({ content }) => {
  const heroImage = content?.sections?.hero?.image;

  return (
    <section
      aria-labelledby="hero-heading"
      className="py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="mb-4 inline-block text-2xl font-bold uppercase tracking-widest text-yellow-500">
            Welcome to Sun & Shadow Group
          </span>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl"
          >
            Empowering Energy,
            <br />
            Enhancing Spaces,
            <br />
            Elevating Brands.
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Welcome to Sun & Shadow Group — a next-generation
            multi-vertical startup pushing structural boundaries
            across renewable clean energy, bespoke nature aquatics,
            and hyper-targeted digital marketing.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/about"
              className="rounded-lg bg-yellow-500 px-8 py-4 text-white transition hover:bg-yellow-600"
            >
              Discover Our Units
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-slate-900 px-8 py-4 transition hover:bg-slate-900 hover:text-white"
            >
              Consult With Us
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative h-112.5 w-full max-w-md overflow-hidden rounded-3xl bg-gray-300">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="Sun & Shadow Group renewable energy, aquarium and digital marketing solutions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="font-semibold text-gray-600">
                  Hero Image
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;