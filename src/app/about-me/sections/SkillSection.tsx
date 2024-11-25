import { ObserverEntryElement } from "@/components/ObserverEntryElement"
import { SectionTitle } from "@/components/SectionTitle"
import { SkillsContainer } from "../components"
import { skills } from "../data"
import { FadeIn } from "@/components/FadeIn"

const SkillSection = () => {
    return (
        <section className="w-full grid">
            <ObserverEntryElement>
                <SectionTitle sectionTitle="Habilidades" />

                <FadeIn className="grid md:grid-cols-2 gap-5">
                    <SkillsContainer title="FrontEnd" skills={skills.frontend} />
                    <div className="grid gap-5">
                        <SkillsContainer title="BackEnd" skills={skills.backend} />
                        <SkillsContainer title="Herramientas" skills={skills.tools} />
                    </div>
                </FadeIn>
            </ObserverEntryElement>
        </section>
    )
}
export default SkillSection