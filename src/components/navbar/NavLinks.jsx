import Link from "next/link";
import { navLink } from "./navLink";

const NavLinks = ({ mobile = false, setOpen }) => {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-2"
          : "flex items-center gap-8"
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
              ? "block w-full rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              : "font-medium text-slate-700 transition hover:text-blue-600"
          }
        >
          {console.log("item",item)}
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;