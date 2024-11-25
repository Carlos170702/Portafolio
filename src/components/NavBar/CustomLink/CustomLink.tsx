'use client'
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string;
  className?: string;
  target?: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const CustomLink: NextPage<Props> = ({ href, title, className = "", target = "_parent" }) => {
  const pathName = usePathname()


  return (
    <motion.li variants={variants} className="list-none">
      <Link
        href={href}
        target={target}
        className={`${className} relative group`}
      >
        {title}
        <span
          className={`absolute h-[2px] bg-black w-0 -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300
	 	${pathName === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    </motion.li>
  );
};

export default CustomLink;
