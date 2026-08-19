import {
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: FaAward,
    title: "Quality",
    description:
      "We deliver high-quality solutions that meet professional standards and exceed customer expectations.",
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We continuously embrace new ideas, technologies, and better ways of solving real-world problems.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Integrity",
    description:
      "Honesty, transparency, and trust are the foundation of every relationship we build.",
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Customer Satisfaction",
    description:
      "We focus on understanding our customers and delivering solutions that provide genuine long-term value.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-2xl font-bold uppercase tracking-widest text-blue-600">
            Our Core Values
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Values That Define Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            These principles guide every project, every decision,
            and every relationship we build.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.id}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-sky-50 to-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-blue-400 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-500 group-hover:rotate-6 group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;