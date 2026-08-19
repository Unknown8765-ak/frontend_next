import Link from "next/link";
import { navLink } from "./navLink";

const NavLinks = ({ mobile = false, setOpen }) => {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-5"
          : "flex items-center gap-6"
      }
    >
      {navLink.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          onClick={() => {
            if (mobile && setOpen) {
              setOpen(false);
            }
          }}
          className={
            mobile
              ? "block w-full text-base font-medium text-slate-800 transition hover:text-blue-600"
              : "text-sm font-medium text-slate-800 transition hover:text-blue-600"
          }
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;