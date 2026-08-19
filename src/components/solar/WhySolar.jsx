import Image from "next/image";
import { whySolar } from "./solarData";

const WhySolar = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-yellow-500 text-2xl uppercase tracking-widest font-bold">
            Why Choose Solar
          </h2>

          <h3 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Invest Once. Save for Decades.
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Solar is more than reducing electricity bills.
            It's a long-term investment in your future,
            your home, and the environment.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mt-16">

          {whySolar.map((item, index) => (

            <div
              key={item.id}
              className={`
                ${item.span}
                ${item.bg}
                group
                rounded-[36px]
                overflow-hidden
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                relative
              `}
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  h-56
                  w-56
                  rounded-full
                  bg-white/40
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              <div className="relative z-10 h-full flex flex-col justify-between">

                <div>

                  {/* Badge */}
                  <span className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur font-semibold text-slate-800">
                    {item.badge}
                  </span>

                  {/* Title */}
                  <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-slate-700 leading-7">
                    {item.description}
                  </p>

                </div>

                {/* Image */}
                <div
                  className={`
                    relative
                    mt-10
                    rounded-3xl
                    overflow-hidden

                    ${
                      index === 0
                        ? "h-160"
                        : index === 1
                        ? "h-65"
                        : index === 2
                        ? "h-55"
                        : index === 3
                        ? "h-70"
                        : "h-55"
                    }
                  `}
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhySolar;