import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { ExperienceModel, ProjectModel, SkillModel } from "../models";
import { FaGitAlt, FaPython, FaReact } from "react-icons/fa6";
import { PiFigmaLogoBold } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMui, SiFramer, SiStyledcomponents, SiDjango, SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

export const experiences: ExperienceModel[] = [
  {
    id: 1,
    date: "2023 - Presente",
    title: "Desarrollador Full Stack",
    company: "FactoryApps",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
  },
  {
    id: 2,
    date: "2021 - 2023",
    title: "Desarrollador Front-end",
    company: "Freelancer",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
  },
  {
    id: 3,
    date: "2019 - 2021",
    title: "Desarrollador Full Stack",
    company: "Proyecto gubernamental",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
  },
];

export const projects: ProjectModel[] = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
    image: "https://via.placeholder.com/150",
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
    technologies: ["React", "Node", "Express"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
    image: "https://via.placeholder.com/150",
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
    technologies: ["React", "Node", "Express"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.",
    image: "https://via.placeholder.com/150",
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
    technologies: ["React", "Node", "Express"],
  },
];

export const skills: SkillModel = {
  frontend: [
    {
      id: 1,
      skill: "JavaScript",
      icon: <IoLogoJavascript color="rgb(247, 223, 30)" />,
    },
    {
      id: 2,
      skill: "TypeScript",
      icon: <SiTypescript color="rgb(0, 122, 204)" />,
    },
    {
      id: 3,
      skill: "HTML",
      icon: <TiHtml5 color="rgb(228, 77, 38)" />,
    },
    {
      id: 4,
      skill: "CSS",
      icon: <IoLogoCss3 color="rgb(21, 114, 182)" />,
    },
    {
      id: 5,
      skill: "React",
      icon: <FaReact color="rgb(97, 218, 251)" />,
    },
    {
      id: 6,
      skill: "Next.js",
      icon: <RiNextjsFill color="black" />,
    },
    {
      id: 7,
      skill: "Material-UI",
      icon: <SiMui color="rgb(0, 129, 203)" />,
    },
    {
      id: 8,
      skill: "Tailwind",
      icon: <RiTailwindCssFill color="rgb(56, 178, 172)" />,
    },
    {
      id: 9,
      skill: "Framer Motion",
      icon: <SiFramer color="rgb(66, 156, 255)" />,
    },
    {
      id: 10,
      skill: "Redux",
      icon: <TbBrandRedux color="rgb(118, 74, 188)" />,
    },
    {
      id: 11,
      skill: "Styled-components",
      icon: <SiStyledcomponents color="rgb(219, 112, 147)" />,
    },
  ],
  backend: [
    {
      id: 1,
      skill: "Python",
      icon: <FaPython color="rgb(55, 118, 171)" />,
    },
    {
      id: 2,
      skill: "Django",
      icon: <SiDjango color="rgb(9, 46, 32)" />,
    },
    {
      id: 3,
      skill: "SQL",
      icon: <SiMysql color="rgb(0, 123, 255)" />,
    },
  ],
  tools: [
    {
      id: 1,
      skill: "Git",
      icon: <FaGitAlt color="rgb(240, 80, 50)" />,
    },
    {
      id: 2,
      skill: "Figma",
      icon: <PiFigmaLogoBold color="rgb(255, 69, 58)" />,
    },
  ],
};











