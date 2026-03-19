import { NavigationLinkEnum } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        href={NavigationLinkEnum.HOME}
        className="text-dark flex items-center justify-center rounded-full text-3xl font-bold h-[70px] overflow-hidden"
      >
        <Image alt="Logo" src='/images/logo.webp' layout="" width={160} height={70} className="object-contain" />
      </Link>
    </div>
  );
};

export default Logo;
