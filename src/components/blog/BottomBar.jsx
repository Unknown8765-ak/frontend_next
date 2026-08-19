import PopularPosts from "./PopularPosts";
import Tags from "./Tags";

const BottomBar = ({
  popularPosts = [],
  tags = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />


      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">


        <div className="mb-12 text-center">

          <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            Explore More
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Discover More Insights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore our most popular articles and discover topics
            that can help you learn, build, and grow.
          </p>

        </div>


       

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">

              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Trending
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Popular Posts
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Articles our readers are loving the most.
                </p>

              </div>



              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xl font-black text-slate-200 sm:flex">
                #
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-2">
              <PopularPosts posts={popularPosts} />
            </div>

          </div>
          <div className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8">

            <div className="mb-7 flex items-start justify-between gap-4">

              <div>

                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Discover
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Popular Tags
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Browse articles by topics and interests.
                </p>

              </div>



              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-xl font-black text-indigo-200 sm:flex">
                #
              </div>

            </div>
            <div className="min-h-50 rounded-2xl border border-slate-100 bg-linear-to-br from-slate-50 to-white p-5">
              <Tags tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBar;