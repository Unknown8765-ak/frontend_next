import { processSteps } from "./solarData";

const Process = () => {
  return (
    <section
      aria-labelledby="solar-process-heading"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-2xl font-bold uppercase tracking-widest text-yellow-500">
            Installation Process
          </span>

          <h2
            id="solar-process-heading"
            className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            From Consultation to Clean Energy
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined installation process ensures a smooth,
            transparent, and hassle-free experience from planning to
            long-term support.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="group relative overflow-hidden rounded-3xl border border-yellow-100 bg-linear-to-br from-yellow-50 via-orange-50 to-white p-8 pt-16 shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)]"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-yellow-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />

              <div className="absolute left-8 top-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-orange-500 text-lg font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {String(step.id).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-3xl font-bold leading-snug text-slate-900 transition-all duration-300 group-hover:text-yellow-600">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {step.description}
              </p>

              <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;