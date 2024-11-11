import { HomeModel } from './components/HomeModel';
import { HomeInformation } from './components/HomeInformation';

export default function HomePage() {
    return (
        <div className="flex items-center justify-center flex-col md:flex-row">
            <HomeModel />
            <HomeInformation />
        </div>
    )
}

