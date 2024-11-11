'use client';
import { motion } from "framer-motion";
import { NextPage } from "next";

interface Props {
  text: string;
  className?: string;
}

const AnimatedText: NextPage<Props> = ({ text, className }) => {
  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden `}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`w-full text-dark font-bold capitalize flex flex-wrap ${className} text-left text-[30px] lg:text-5xl xl:text-6xl`}
      >
        {text.split(" ").map((item, index) => (
          <motion.span key={`${item}_${index}`} variants={singleWord}>
            {item}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
