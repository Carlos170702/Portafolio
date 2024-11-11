import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className="bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        CD
      </Link>
    </div>
  );
};

export default Logo;
