import { NavigationLinkEnum } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href={NavigationLinkEnum.HOME}
        className="bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        <Image alt="Logo" src='/images/logo2.webp' layout="" width={80} height={80} />
      </Link>
    </div>
  );
};

export default Logo;
