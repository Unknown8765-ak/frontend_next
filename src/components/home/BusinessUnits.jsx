import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const businessUnits = [
  {
    id: 1,
    title: "SUN",
    subtitle: "Sun & Shadow Enertech",
    description:
      "Transition to clean, independent power with residential and commercial solar solutions.",
    button: "Explore Solar & Wind",
    link: "/solar",
    bg: "from-yellow-50 to-yellow-100",
    accent: "bg-yellow-500",
  },
  {
    id: 2,
    title: "AQUA",
    subtitle: "Fish World Aquarium",
    description:
      "Premium aquascaping, aquarium engineering and hassle-free maintenance services.",
    button: "Explore Aquatics",
    link: "/aquarium",
    bg: "from-cyan-50 to-cyan-100",
    accent: "bg-cyan-500",
  },
  {
    id: 3,
    title: "SHADOW",
    subtitle: "Shadow Digital Agency",
    description:
      "Performance marketing solutions built to scale brands and generate quality leads.",
    button: "Explore Agency",
    link: "/agency",
    bg: "from-indigo-50 to-indigo-100",
    accent: "bg-indigo-600",
  },
];

const BusinessUnits = () => {
  return (
    <section
      aria-labelledby="business-units-heading"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Our Business Units
          </span>

          <h2
            id="business-units-heading"
            className="mt-5 text-5xl font-bold text-slate-900"
          >
            Three Brands.
            <br />
            One Vision.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Building sustainable businesses across renewable energy,
            aquatics and digital transformation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {businessUnits.map((unit) => (
            <article
              key={unit.id}
              className={`group relative overflow-hidden rounded-4xl bg-linear-to-br ${unit.bg} p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]`}
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 select-none text-8xl font-black text-white/40 transition duration-500 group-hover:scale-110"
              >
                {unit.title}
              </span>

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/40 blur-3xl"
              />

              <span
                className={`${unit.accent} inline-block rounded-full px-5 py-2 text-sm font-semibold text-white`}
              >
                {unit.title}
              </span>

              <h3 className="mt-8 text-3xl font-bold leading-tight text-slate-900">
                {unit.subtitle}
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                {unit.description}
              </p>

              <Link
                href={unit.link}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition-all group-hover:gap-5"
              >
                {unit.button}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;