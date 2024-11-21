import { SectionTitle } from "@/app/components/SectionTitle";
import { experiences } from "../data";
import { CardExperience } from "../components/CardExperience";

export const ExperienceSection = () => {
  return (
    <section className="w-full">
      <SectionTitle sectionTitle="Experiencia" />
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 h-full w-1 transform -translate-x-1/2 bg-gray-200" />

        {experiences.map((experience) => (
          <CardExperience key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
