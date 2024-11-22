'use client'
import { FaGitAlt, FaPython, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { PiFigmaLogoBold } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiFramer, SiMui, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SkillModel } from "../../models";
import { SkillItem } from "../SkillItem";
import { SliceIn } from "@/app/components/SliceIn";

const skills: SkillModel[] = [
  {
    id: 1,
    skill: "JavaScript",
    icon: <IoLogoJavascript color="rgb(247, 223, 30)" />,
  },
  {
    id: 2,
    skill: "Python",
    icon: <FaPython color="rgb(55, 118, 171)" />,
  },
  {
    id: 3,
    skill: "TypeScript",
    icon: <SiTypescript color="rgb(0, 122, 204)" />,
  },
  {
    id: 9,
    skill: "HTML",
    icon: <TiHtml5 color="rgb(228, 77, 38)" />,
  },
  {
    id: 10,
    skill: "CSS",
    icon: <IoLogoCss3 color="rgb(21, 114, 182)" />,
  },
  {
    id: 4,
    skill: "React",
    icon: <FaReact color="rgb(97, 218, 251)" />,
  },
  {
    id: 5,
    skill: "DRF",
    icon: <SiDjango color="rgb(9, 46, 32)" />,
  },
  {
    id: 12,
    skill: "Next.js",
    icon: <RiNextjsFill color="black" />,
  },
  {
    id: 6,
    skill: "Material-UI",
    icon: <SiMui color="rgb(0, 129, 203)" />,
  },
  {
    id: 8,
    skill: "Git",
    icon: <FaGitAlt color="rgb(240, 80, 50)" />,
  },
  {
    id: 11,
    skill: "Tailwind",
    icon: <RiTailwindCssFill color="rgb(56, 178, 172)" />,
  },
  {
    id: 14,
    skill: "Figma",
    icon: <PiFigmaLogoBold color="rgb(255, 69, 58)" />, // Rojo oscuro según el branding de Figma
  },
  {
    id: 15,
    skill: "Framer Motion",
    icon: <SiFramer color="rgb(66, 156, 255)" />, // Azul de Framer Motion
  },
  {
    id: 17,
    skill: "Redux",
    icon: <TbBrandRedux color="rgb(118, 74, 188)" />, // Púrpura específico de Redux
  },
  {
    id: 19,
    skill: "Styled-components",
    icon: <SiStyledcomponents color="rgb(219, 112, 147)" />, // Rosa similar a su logo
  }
];

const Skills = () => {
  return (
    <SliceIn>
      <h2 className="text-lg font-bold uppercase text-dark/75">
        Habilidades técnicas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </SliceIn >
  );
};

export default Skills;
