import Link from "next/link";

import { quickLinks, services } from "./footerData";

const FooterLinks = () => {
  return (
    <>
      <div>
        <h2 className="mb-5 text-xl font-semibold">
          Quick Links
        </h2>

        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="transition hover:text-yellow-400"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-5 text-xl font-semibold">
          Services
        </h2>

        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={service.path}
                className="transition hover:text-yellow-400"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;