import ExperienceSection from "./sections/ExperienceSection";
import { InformationSection } from "./sections/InformationSection";
import PrincipalProjects from "./sections/PrincipalProjectsSection";
import SkillSection from "./sections/SkillSection";

const About = () => {
  return (
    <>
      <InformationSection />
      <SkillSection />
      <ExperienceSection />
      <PrincipalProjects />
    </>
  );
};

export default About;
