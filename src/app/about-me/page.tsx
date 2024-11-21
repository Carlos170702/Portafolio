import { AnimatedText } from "../components/AnimatedText";
import { InformationSection } from "./sections/InformationSection";
import PrincipalProjects from "./sections/PrincipalProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";

const About = () => {
  return (
    <>
      <AnimatedText text="Innovación a Través del Desarrollo" />
      <InformationSection />
      <ExperienceSection />
      <PrincipalProjects />
    </>
  );
};

export default About;
