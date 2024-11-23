import { ExperienceModel } from '../../models';
import { CardContextExperience } from '../CardContextExperience';

export interface Props {
	experience: ExperienceModel
}

const CardExperience: React.FC<Props> = ({ experience }) => {
	return (

		<div className="mb-8 flex flex-col md:flex-row items-center">
			<div className="flex-1 w-full md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
				{experience.id % 2 === 0 && (
					<CardContextExperience {...experience} />
				)}
			</div>
			<div className="mx-auto md:mx-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-border text-primary relative z-10 order-1 md:order-2 bg-white">
				<span className="text-sm font-semibold">
					{experience.date.split(" ")[0]}
				</span>
			</div>
			<div className="flex-1 w-full md:w-1/2 md:pl-8 order-2 md:order-3">
				{experience.id % 2 !== 0 && (
					<CardContextExperience {...experience} />
				)}
			</div>
		</div>
	);
};

export default CardExperience;
