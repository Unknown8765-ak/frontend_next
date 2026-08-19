import { services } from "./solarData";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Heading */}

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-yellow-500">
          Our Services
        </h2>

        <h3 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
          Complete Solar Energy Solutions
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          From consultation to installation and maintenance, we
          deliver complete solar solutions for homes and businesses.
        </p>
      </div>

      {/* Services */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-yellow-100
                bg-linear-to-br
                from-yellow-50
                via-orange-50
                to-white
                p-8
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-400
                hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)]
              "
            >
              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-yellow-300/20
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-linear-to-r
                  from-yellow-400
                  to-orange-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-yellow-100
                  to-orange-100
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:from-yellow-200
                  group-hover:to-orange-500
                "
              >
                <Icon
                  className="
                    text-3xl
                    text-yellow-600
                    transition-all
                    duration-500
                    group-hover:text-white
                  "
                />
              </div>

              {/* Title */}

              <h4
                className="
                  mt-7
                  text-2xl
                  font-bold
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-yellow-600
                "
              >
                {service.title}
              </h4>

              {/* Description */}

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Bottom Line */}

              <div
                className="
                  mt-8
                  h-1
                  w-14
                  rounded-full
                  bg-linear-to-r
                  from-yellow-400
                  to-orange-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;