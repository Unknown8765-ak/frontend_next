import { processSteps } from "./AgencyData";

const Process = () => {
  return (
    <section className="py-24">

      <div className="max-w-3xl mx-auto text-center">

        <span className="text-indigo-600 text-2xl uppercase tracking-widest font-bold">
          Our Process
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          Our Proven Workflow
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Every successful project starts with a clear strategy.
          Our streamlined process ensures quality, transparency,
          and timely delivery.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {processSteps.map((step) => (

          <div
            key={step.id}
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
              pt-20
              shadow-md
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-indigo-400
              hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]
            "
          >

            <div className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

            <div
              className="
                absolute
                top-6
                left-8
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-br
                from-indigo-500
                to-violet-600
                text-lg
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              {String(step.id).padStart(2, "0")}
            </div>

            <h3 className="mt-5 text-3xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
              {step.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              {step.description}
            </p>

            <div className="mt-8 h-1 w-14 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

          </div>

        ))}

      </div>

    </section>
  );
};

export default Process;