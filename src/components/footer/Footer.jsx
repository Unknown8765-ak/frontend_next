import Link from "next/link";

import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-6
          py-16
          md:grid-cols-2
          lg:grid-cols-5
        "
      >
        {/* Company */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="text-3xl font-bold"
            aria-label="Sun & Shadow - Home"
          >
            Sun
            <span className="text-yellow-500"> & </span>
            Shadow
          </Link>

          <p className="mt-6 leading-7 text-gray-300">
            Sun & Shadow Group provides Renewable Energy,
            Aquarium Solutions and Digital Marketing services
            across India.
          </p>
        </div>

        {/* Quick Links + Services */}
        <FooterLinks />

        {/* Contact */}
        <FooterContact />

        {/* Social */}
        <FooterSocial />
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-6
            py-5
            md:flex-row
          "
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Sun & Shadow Group.
            All Rights Reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <Link
              href="/privacy-policy"
              className="transition hover:text-yellow-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-yellow-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;