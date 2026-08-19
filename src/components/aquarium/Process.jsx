import { processSteps } from "./aquariumData";

const Process = () => {
  return (
    <section className="py-20 lg:py-28">

      <div className="max-w-3xl mx-auto text-center">

        <span className="text-cyan-600 uppercase tracking-widest font-semibold">
          Our Process
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          From Concept to a Living Masterpiece
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          We follow a structured aquarium design and installation
          process to create beautiful, healthy, and easy-to-maintain
          aquatic environments.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {processSteps.map((step) => (
          <article
            key={step.id}
            className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >

            <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
              {step.id}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              {step.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
};

export default Process;