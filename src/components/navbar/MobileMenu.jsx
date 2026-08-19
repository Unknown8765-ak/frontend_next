"use client";

import { X, Building2, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <aside
  className={`
    fixed
    top-0
    right-0
    z-50
    flex
    h-dvh
    w-80
    flex-col
    overflow-hidden
    bg-white
    shadow-2xl
    transition-transform
    duration-300
    ease-in-out
    lg:hidden
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
      {/* Header */}
      <div className="flex items-center justify-between border-b p-6">
        <Logo />

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full p-2 transition hover:bg-gray-100"
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <NavLinks
          mobile
          setOpen={setOpen}
        />
      </div>

      {/* Footer */}
      <div className="border-t bg-gray-50 p-6">
        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-5 text-white shadow-lg">

          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Building2 size={24} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Sun & Shadow
              </h3>

              <p className="text-sm text-white/80">
                Solar • Aquarium • Digital Agency
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <a
              href="tel:+919696142030"
              className="flex items-center gap-2"
            >
              <Phone size={16} />
              <span>+91 96961 42030</span>
            </a>

            <a
              href="mailto:info@sunandshadow.in"
              className="flex items-center gap-2"
            >
              <Mail size={16} />
              <span>info@sunandshadow.in</span>
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          © 2026 Sun & Shadow. All Rights Reserved.
        </p>
      </div>
    </aside>
  );
};

export default MobileMenu;