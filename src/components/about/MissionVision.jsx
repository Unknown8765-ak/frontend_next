import {
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const missionVision = [
  {
    id: 1,
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "Our mission is to deliver dependable, innovative, and customer-focused solutions that create measurable value while maintaining the highest standards of quality and service.",
  },
  {
    id: 2,
    icon: FaEye,
    title: "Our Vision",
    description:
      "Our vision is to build a trusted and forward-thinking organization known for innovation, sustainability, exceptional service, and long-term relationships.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-2xl font-bold uppercase tracking-widest text-blue-600">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Where We Are Going
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mission and vision guide the way we build products,
            deliver services, and create lasting relationships.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-sky-500 transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default MissionVision;