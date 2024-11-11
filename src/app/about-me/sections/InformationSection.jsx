import { AnimatedText } from "@/app/components/AnimatedText";
import Image from "next/image";
import { InformationAboutMe } from "../components/InformationAboutMe";
import { Skills } from "../components/Skills";
import { SoftSkills } from "../components/SoftSkills";

export const InformationSection = () => {
  return (
    <>
      <AnimatedText
        text="Innovación a Través del Desarrollo"
        className="pb-10"
      />

      <div className="flex w-full gap-10 flex-col">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="w-full">
            <InformationAboutMe />

            <div className="hidden md:block">
              <SoftSkills />
            </div>
          </div>
          <div className="w-max h-max rounded-2xl border-2 border-solid border-black p-6  bg-light gap-5 m-auto shadow-sm shadow-black">
            <Image
              src={"/images/profile.webp"}
              alt="Imagen animada de mi"
              className=""
              width={200}
              height={200}
              quality={100}
              priority
            />
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};
