import { MESSAGE_DESCRIPTION } from "@/assets/common/messages";
import { NavigationLinkEnum } from "@/assets/enum";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";

const HomeInformation = ({}) => {
  return (
    <div className="max-w-[800px] flex flex-col">
      <AnimatedText
        text="¡Hola! Soy Carlos Daniel, Desarrollador de Web."
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
          <FaArrowRight size={20} />
        </Link>
        <Link
          href="/CarlosDanielCruzPerez.pdf"
          target="_blank"
          className="text-white px-6 py-2.5 rounded-md font-semibold text-lg border border-solid border-transparent shadow-md flex gap-2 items-center 
          transition-all duration-300 ease-in-out bg-black"
          download
        >
          <span>CV</span> <PiReadCvLogoFill size={22} />
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
