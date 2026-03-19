import { SectionTitle } from '@/components/SectionTitle'
import { CardContainer } from '../components/CardContainer'

const PrincipalProjectsSection = () => {
    return (
        <section id="projects" className='space-y-5 scroll-mt-20'>
            <SectionTitle sectionTitle='Proyectos' />
            <CardContainer />
        </section>
    )
}

export default PrincipalProjectsSection
