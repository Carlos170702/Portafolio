import { MESSAGE_ABOUT_ME } from "@/assets/common/messages";
import React from "react";

const InformationAboutMe = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold uppercase text-dark/75">
        Sobre mi
      </h2>
      <div className="max-w-[600px]">
        {MESSAGE_ABOUT_ME.map((message, index) => (
          <p key={index} className="font-normal mb-4 text-base text-dark ">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InformationAboutMe;
