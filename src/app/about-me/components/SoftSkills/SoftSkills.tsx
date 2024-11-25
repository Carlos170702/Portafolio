import { FadeIn } from "@/components/FadeIn";
import { softSkillModel } from "../../models";
import { SoftSkillItem } from "../SoftSkillItem";

const softSkills: softSkillModel[] = [
  { id: 1, skill: "Trabajo en equipo" },
  { id: 2, skill: "Proactividad" },
  { id: 3, skill: "Aprendizaje Continuo" },
  { id: 4, skill: "Capacidad de autogestión" },
  { id: 5, skill: "Atención al detalle" },
  { id: 6, skill: "Adaptabilidad al cambio" },
  { id: 7, skill: "Pensamiento analítico" },
  { id: 8, skill: "Autonomía en el aprendizaje" },
  { id: 9, skill: "Capacidad de dar feedback" },
  { id: 10, skill: "Capacidad de recibir feedback" },
  { id: 11, skill: "Visión estratégica" },
];

const SoftSkills = ({ }) => {
  return (
    <FadeIn className="shadow-xl p-4">
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {softSkills.map((skill) => (
          <SoftSkillItem key={skill.id} softSkill={skill} />
        ))}
      </div>
    </FadeIn>
  );
};

export default SoftSkills;
