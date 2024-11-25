'use client';
import { motion, useCycle, Variants } from "framer-motion";
import { MenuToggle } from "../NavBar/MenuToggle/MenuToggle";
import { Navigation } from "./Navigation/Navigation";

const variants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    background: "#000",
  }),
  closed: {
    clipPath: "circle(40px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
      GiDuration: 0.5,
    },
    background: "#000",
  },
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`z-[1] md:hidden`}
    >
      <motion.div className="pt-20" variants={variants}>
        <MenuToggle toggle={toggleOpen} />
        <Navigation />
      </motion.div>
    </motion.nav>
  );
};

export default Sidebar;
