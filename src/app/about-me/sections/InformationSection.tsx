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
    className:
      "bg-bamboo-50 text-dark border border-dark/10 hover:bg-bamboo-100 hover:text-dark hover:border-bamboo-600/40",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/carlos-cruz-a768a1244/",
    target: "_blank",
    icon: <FaLinkedin size={20} />,
    title: "LinkedIn",
    className:
      "bg-bamboo-50 text-bamboo-700 border border-dark/10 hover:bg-bamboo-100 hover:text-bamboo-700 hover:border-bamboo-600/40",
  },
  {
    id: 3,
    target: "_blank",
    icon: <MdEmail size={20} />,
    title: "Correo",
    className:
      "bg-bamboo-50 text-dark border border-dark/10 hover:bg-bamboo-100 hover:text-dark hover:border-bamboo-600/40",
  },

];

export const InformationSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 md:flex-row items-center justify-center h-[calc(100vh-70px)] bg-bamboo-50/30 rounded-3xl scroll-mt-20"
    >
      <FadeIn className="max-w-[300px] rounded-2xl border-2 border-solid border-dark/15 p-6 bg-light gap-5 shadow-sm shadow-black/10">
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
              className={item.className}
            />
          ))}
          <GeneralLink
            title={"CV"}
            icon={<PiReadCvLogoFill size={22} />}
            href="/CarlosDanielCruzPerez.pdf"
            className="bg-bamboo-600 text-light border border-transparent hover:bg-bamboo-700 hover:text-light hover:border-transparent"
          />

        </div>
      </SliceIn>
    </section>
  );
};
