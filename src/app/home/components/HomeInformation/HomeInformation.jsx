import { AnimatedText } from "@/app/components/AnimatedText";
import { MESSAGE_DESCRIPTION } from "@/assets/common/messages";
import { NavigationLinkEnum } from "@/assets/enum";
import Link from "next/link";
import { PiReadCvLogo } from "react-icons/pi";

const HomeInformation = ({}) => {
  return (
    <div className="max-w-[800px] flex flex-col">
      <AnimatedText
        text="¡Hola! Soy Carlos Daniel, Desarrollador de Software."
        className="text-[30px] text-left lg:text-5xl"
      />
      <p className="my-4 text-base font-medium text-gray-600 ">
        {MESSAGE_DESCRIPTION}
      </p>

      <div className="flex items-center self-start mt-2 gap-5 justify-center">
        <Link
          href={NavigationLinkEnum.ABOUT_ME}
          className="bg-dark text-light px-6 py-2.5 rounded-md font-semibold text-lg border border-solid border-transparent shadow-md flex gap-2 items-center 
	  hover:bg-light hover:text-dark hover:border-dark transition-all duration-300 ease-in-out"
        >
          Conóceme
        </Link>
        <Link
          href="/CarlosDanielCruzPerez.pdf"
          target="_blank"
          className="text-light font-normal text-lg flex gap-2 items-center hover:border-b-2 border-black relative group"
          download
        >
          <span>CV</span> <PiReadCvLogo size={22} />
          <span
            className={`absolute h-[2px] bg-black w-0 -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300`}
          >
            &nbsp;
          </span>
        </Link>
      </div>
    </div>
  );
};
export default HomeInformation;
