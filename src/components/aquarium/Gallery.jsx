const Gallery = ({ gallery = [] }) => {
  console.log("gallery",gallery)
  return (
    <section className="py-20 lg:py-28">

      <div className="text-center max-w-3xl mx-auto">

        <span className="text-cyan-600 text-2xl uppercase tracking-widest font-bold">
          Our Projects
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
          Explore Our Aquarium Creations
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Discover premium aquarium installations designed for
          homes, offices, hotels, restaurants, and commercial spaces.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {gallery.length > 0 ? (
          gallery.map((item) => (
            <article
              key={item._id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              <div className="h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={
                    item.title
                      ? `${item.title} - Aquarium Project`
                      : "Aquarium installation project"
                  }
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-3 text-gray-600">
                    {item.description}
                  </p>
                )}

              </div>

            </article>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Aquarium projects will be displayed here.
          </p>
        )}

      </div>

    </section>
  );
};

export default Gallery;