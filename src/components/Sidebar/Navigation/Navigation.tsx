import { motion, Variants } from "framer-motion";
import * as React from "react";
import { CustomLink } from "../../NavBar/CustomLink";
import { NavigationLinks } from "@/models";

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navigation_links: NavigationLinks[] = [
  {
    link: "/",
    title: "Inicio",
  },
  {
    link: "/About",
    title: "Acerca de mi",
  },
  {
    link: "/Projects",
    title: "Proyectos",
  },
];

export const Navigation = () => {
  return (
    <motion.ul variants={variants} className="flex flex-col gap-5 ml-[28px]">
      {navigation_links.map((item, index) => (
        <CustomLink
          key={index}
          href={item.link}
          title={item.title}
          className="text-white"
        />
      ))}
    </motion.ul>
  );
};
