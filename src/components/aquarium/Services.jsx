import { services } from "./aquariumData";

const Services = () => {
  return (
    <section className="py-20 lg:py-28">

      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto">

        <span className="text-cyan-600 text-2xl uppercase tracking-widest font-bold">
          Our Services
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          Complete Aquarium Solutions
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          We design, install, and maintain premium aquariums that
          bring beauty, peace, and nature into homes, offices,
          hotels, and commercial spaces.
        </p>

      </div>

      {/* Services */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

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
                border-cyan-100
                bg-linear-to-br
                from-cyan-50
                via-sky-50
                to-white
                p-8
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]
              "
            >

              {/* Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Accent */}

              <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full" />

              {/* Icon */}

              <div
                className="
                  relative z-10
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-cyan-100
                  to-sky-100
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:from-cyan-500
                  group-hover:to-sky-600
                "
              >
                <Icon
                  size={30}
                  className="text-cyan-600 transition-all duration-500 group-hover:text-white"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                {service.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-7">
                {service.description}
              </p>

              <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full" />

            </article>
          );
        })}

      </div>

    </section>
  );
};

export default Services;