import { services } from "./AgencyData";

const Services = () => {
  return (
    <section className="py-24">
      <div className="text-center max-w-3xl mx-auto">

        <span className="text-indigo-600 text-2xl uppercase tracking-widest font-bold">
          Our Services
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          Complete Digital Solutions
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          From website development to digital marketing, we help
          businesses establish a strong online presence and achieve
          measurable growth.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-indigo-100
                bg-linear-to-br
                from-indigo-50
                via-violet-50
                to-white
                p-8
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-indigo-400
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]
              "
            >

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

              <div
                className="
                  relative z-10
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-indigo-100
                  to-violet-100
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:from-indigo-500
                  group-hover:to-violet-600
                "
              >
                <Icon
                  size={30}
                  className="text-indigo-600 transition-all duration-500 group-hover:text-white"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Services;