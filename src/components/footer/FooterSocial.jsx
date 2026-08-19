import { socialLinks } from "./footerData";

const FooterSocial = () => {
  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold">
        Follow Us
      </h2>

      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.id}
              href={social.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-yellow-500
              "
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocial;