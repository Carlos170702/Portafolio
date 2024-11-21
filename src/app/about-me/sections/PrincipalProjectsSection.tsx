import { SectionTitle } from '@/app/components/SectionTitle'
import { CardContainer } from '../components/CardContainer'

const PrincipalProjectsSection = () => {
    return (
        <section className='space-y-5'>
            <SectionTitle sectionTitle='Proyectos' />
            <CardContainer />
        </section>
    )
}

export default PrincipalProjectsSection
