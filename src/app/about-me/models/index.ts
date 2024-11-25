import { StaticImageData } from "next/image";
import React from "react";

export interface SkillItem {
  id: number;
  skill: string;
  icon: React.ReactElement;
}

export interface SkillModel {
  frontend: SkillItem[];
  backend: SkillItem[];
  tools: SkillItem[]
}

export interface softSkillModel {
  id: number;
  skill: string;
}

//model experience
export interface ExperienceModel {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

// model projects
export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  links: {
    github: string;
    demo?: string;
  };
  technologies: string[];
}
