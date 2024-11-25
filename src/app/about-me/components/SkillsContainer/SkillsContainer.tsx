import { NextPage } from "next";
import { SkillItem as SkillItemModel } from "../../models";
import { SkillItem } from "../SkillItem";

interface Props {
  title: string
  skills: SkillItemModel[]
  className?: string
}


const SkillsContainer: NextPage<Props> = ({ title, skills, className = '' }) => {
  return (
    <div className={`rounded-md border-gray-200 border-2 shadow-sm p-4 ${className}`}>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
