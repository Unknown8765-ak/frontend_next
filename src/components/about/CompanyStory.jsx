const CompanyStory = ({ content }) => {
  const image = content?.sections?.about?.image;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-xl">

            {image ? (
              <img
                src={image}
                alt="Sun & Shadow Group company"
                className="h-100 w-full object-cover lg:h-130"
              />
            ) : (
              <div className="flex h-100 items-center justify-center lg:h-130">
                <span className="font-semibold text-slate-400">
                  Company Image
                </span>
              </div>
            )}

          </div>

          {/* Content */}

          <div>

            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Building Trust Through
              <span className="text-blue-600">
                {" "}Innovation & Excellence
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Sun & Shadow Group is committed to creating reliable,
              innovative, and sustainable solutions that make a
              meaningful difference for our customers.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From renewable energy solutions and premium aquarium
              services to modern digital solutions, our approach is
              built around quality, transparency, and long-term
              customer relationships.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-slate-50 p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  100%
                </h3>

                <p className="mt-2 text-slate-600">
                  Customer Focus
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  3+
                </h3>

                <p className="mt-2 text-slate-600">
                  Business Verticals
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;