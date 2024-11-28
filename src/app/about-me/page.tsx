import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import { InformationSection } from "./sections/InformationSection";
import PrincipalProjects from "./sections/PrincipalProjectsSection";
import SkillSection from "./sections/SkillSection";

const About = () => {
  return (
    <>
      <InformationSection />
      <PrincipalProjects />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
    </>
  );
};

export default About;
