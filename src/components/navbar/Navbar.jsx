"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-100/95 shadow-[0_4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavLinks />
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-gray-100 lg:hidden"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />

      {/* Overlay */}
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-60 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
};

export default Navbar;