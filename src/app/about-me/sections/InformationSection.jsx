import GeneralLink from "@/app/components/GeneralButton/GeneralLink";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InformationAboutMe } from "../components/InformationAboutMe";
import { SliceIn } from "@/app/components/SliceIn";
import { FadeIn } from "@/app/components/FadeIn";

const socialLinks = [
  {
    id: 1,
    href: "https://github.com/Carlos170702?tab=repositories",
    target: "_blank",
    icon: <FaGithub size={20} />,
    title: "GitHub",
  },
  {
    id: 2,
    target: "_blank",
    icon: <MdEmail size={20} />,
    title: "Correo",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/carlos-cruz-a768a1244/",
    target: "_blank",
    icon: <FaLinkedin size={20} color="#0a66c2" />,
    title: "LinkedIn",
  },
];

export const InformationSection = () => {
  return (
    <section
      className={`flex flex-col gap-8 md:flex-row items-center justify-center h-[calc(100vh-70px)]`}
    >
      <FadeIn className="max-w-[300px] rounded-2xl border-2 border-solid border-black p-6  bg-light gap-5 shadow-sm shadow-black">
        <Image
          src={"/images/profile.webp"}
          alt="Imagen animada de mi"
          className="w-full"
          width={200}
          height={200}
          priority
        />
      </FadeIn>

      <SliceIn>
        <InformationAboutMe />
        <div className="flex gap-2">
          {socialLinks.map((item) => (
            <GeneralLink
              key={item.id}
              href={item.href}
              target={item.target}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </SliceIn>
    </section>
  );
};
