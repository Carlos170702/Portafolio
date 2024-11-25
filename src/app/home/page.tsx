import { HomeModel } from './components/HomeModel';
import { HomeInformation } from './components/HomeInformation';
import { FadeIn } from '@/components/FadeIn';

export default function HomePage() {
    return (
        <div className="flex items-center justify-center flex-col md:flex-row">
            <HomeModel />
            <FadeIn>
                <HomeInformation />
            </FadeIn>
        </div>
    )
}

