import GeneralLink from "@/components/GeneralButton/GeneralLink";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InformationAboutMe } from "../components/InformationAboutMe";
import { SliceIn } from "@/components/SliceIn";
import { FadeIn } from "@/components/FadeIn";
import { PiReadCvLogoFill } from "react-icons/pi";

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
    href: "https://www.linkedin.com/in/carlos-cruz-a768a1244/",
    target: "_blank",
    icon: <FaLinkedin size={20} color="#0a66c2" />,
    title: "LinkedIn",
  },
  {
    id: 3,
    target: "_blank",
    icon: <MdEmail size={20} />,
    title: "Correo",
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
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL="/images/profile.webp"
        />
      </FadeIn>

      <SliceIn direction="right" className="space-y-5">
        <InformationAboutMe />
        <div className="flex gap-2">
          {socialLinks.map((item) => (
            <GeneralLink
              key={item.id}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}
          <GeneralLink title={"CV"} icon={<PiReadCvLogoFill size={22} />} href="/CarlosDanielCruzPerez.pdf"/>

        </div>
      </SliceIn>
    </section>
  );
};
