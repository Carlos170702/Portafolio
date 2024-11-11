import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
const AnimatedNumber = ({ value, className }) => {
  const numberRef = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(numberRef);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (numberRef.current && latest.toFixed(0) <= value) {
        numberRef.current.innerText = latest.toFixed(0) + "+";
      }
    });

    return () => motionValue.stop();
    // eslint-disable-next-line
  }, [springValue, value]);

  return (
    <p
      className={`inline-block text-7xl font-bold ${className}`}
      ref={numberRef}
    >
      0+
    </p>
  );
};

export default AnimatedNumber;
