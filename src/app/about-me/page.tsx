import { AnimatedText } from "../components/AnimatedText";
import { InformationSection } from "./sections/InformationSection";
import PrincipalProjects from "./sections/PrincipalProjectsSection";

const About = () => {
  return (
    <>
      <AnimatedText text="Innovación a Través del Desarrollo" />
      <InformationSection />
      <PrincipalProjects />
    </>
  );
};

export default About;
