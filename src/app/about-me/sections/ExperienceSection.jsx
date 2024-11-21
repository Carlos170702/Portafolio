"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { InView } from "react-intersection-observer";

export const ExperienceSection = () => {
  const [inView, setInView] = useState(false);

  return (
    <InView
      as="div"
      threshold={0.4}
      className="py-[100px]"
      onChange={(inView) => {
        setInView(inView);
      }}
    >
      {inView && (
        <Fade fraction>
          <div
            className={`${inView ? "bg-red-400" : "bg-blue-600"} py-44`}
          >{`Header inside viewport.`}</div>
        </Fade>
      )}
    </InView>
  );
};
