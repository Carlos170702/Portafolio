'use client'
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
  const pathName = usePathname();
  const hash = href.includes("#") ? href.split("#")[1] : null;
  const basePath = href.split("#")[0];
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!hash || pathName !== basePath) {
      setIsActive(!hash && pathName === href);
      return;
    }

    const el = document.getElementById(hash);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -60% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hash, basePath, pathName, href]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!hash) return;

      if (pathName === basePath) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [hash, pathName, basePath],
  );

  return (
    <motion.li variants={variants} className="list-none">
      <Link
        href={href}
        target={target}
        onClick={handleClick}
        className={`${className} relative group`}
      >
        {title}
        <span
          className={`absolute h-[2px] w-0 -bottom-1 left-0 group-hover:w-full transition-[width] ease duration-300
          ${isActive ? "w-full" : "w-0"}
          rounded-full bg-[#4CAF50]`}
        >
          &nbsp;
        </span>
      </Link>
    </motion.li>
  );
};

export default CustomLink;
