import React from "react";

export interface SkillModel {
  id: number;
  skill: string;
  icon: React.ReactElement;
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
