import { FaArrowRight } from "react-icons/fa";

const Portfolio = ({ content }) => {
  const projects = content?.sections?.projects || [];

  return (
    <section className="py-24">

      <div className="text-center max-w-3xl mx-auto">

        <span className="text-indigo-600 text-2xl uppercase tracking-widest font-bold">
          Our Portfolio
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          Recent Projects We've Delivered
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Explore our recent web development, branding, and
          digital marketing projects designed to help businesses
          grow online.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {projects.map((project) => (

          <div
            key={project._id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
          >

            <div className="h-64 overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-8">

              <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                Featured Project
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition"
                >
                  View Project
                  <FaArrowRight />
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Portfolio;