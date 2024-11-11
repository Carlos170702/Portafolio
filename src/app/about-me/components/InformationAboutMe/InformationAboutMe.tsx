import { MESSAGE_ABOUT_ME } from "@/assets/common/messages";
import React from "react";

const InformationAboutMe = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
        Sobre mi
      </h2>
      {MESSAGE_ABOUT_ME.map((message, index) => (
        <p key={index} className="font-medium mb-4 text-sm text-dark">
          {message}
        </p>
      ))}
    </div>
  );
};

export default InformationAboutMe;
