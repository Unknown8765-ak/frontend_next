import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="Sun & Shadow - Home"
    >
      <span className="text-2xl font-bold">
        Sun<span className="text-yellow-500"> & </span>Shadow
      </span>
    </Link>
  );
};

export default Logo;