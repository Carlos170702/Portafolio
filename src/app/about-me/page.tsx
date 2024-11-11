import { ExperienceSection } from "./sections/ExperienceSection";
import { InformationSection } from "./sections/InformationSection";

const About = () => {
  return (
    <div className="md:mx-10">
      <InformationSection />
      <ExperienceSection />
    </div>
  );
};

export default About;
