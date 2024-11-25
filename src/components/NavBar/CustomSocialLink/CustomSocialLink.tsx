import { motion } from "framer-motion";
import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
  link: string;
}

const CustomSocialLink: NextPage<Props> = ({ children, link = "/" }) => {
  return (
    <motion.a
      whileHover={{
        y: -2,
      }}
      className="w-6"
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  );
};

export default CustomSocialLink;
