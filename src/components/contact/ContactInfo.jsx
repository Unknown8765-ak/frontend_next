import { contactInfo } from "./contactData";

const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-information-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Get In Touch
          </span>

          <h2
            id="contact-information-heading"
            className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900"
          >
            Contact Information
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Have a question or want to discuss a project? Reach out to
            Sun & Shadow Group using any of the contact methods below.
            Our team will be happy to assist you.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                aria-label={`${item.title}: ${item.value}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-blue-100
                  bg-linear-to-br
                  from-blue-50
                  via-sky-50
                  to-white
                  p-8
                  text-center
                  shadow-md
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-blue-400
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                "
              >

                {/* Background Glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-blue-300/20
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top Accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-linear-to-r
                    from-blue-500
                    to-sky-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-br
                    from-blue-100
                    to-sky-100
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:from-blue-500
                    group-hover:to-sky-600
                  "
                >
                  <Icon
                    size={28}
                    aria-hidden="true"
                    className="
                      text-blue-600
                      transition-all
                      duration-500
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-7
                    text-2xl
                    font-bold
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-blue-600
                  "
                >
                  {item.title}
                </h3>

                {/* Value */}
                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                    wrap-break-word
                  "
                >
                  {item.value}
                </p>

                {/* Bottom Line */}
                <div
                  aria-hidden="true"
                  className="
                    mx-auto
                    mt-8
                    h-1
                    w-14
                    rounded-full
                    bg-linear-to-r
                    from-blue-500
                    to-sky-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;