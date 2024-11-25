import { projects } from "../../data";
import { CardProject } from "../CardProject";

const CardContainer = ({ }) => {
	return (
		<div className='grid gap-4 sm:grid-cols-2 justify-between lg:grid-cols-3'>
			{
				projects.map((project) => (
					<CardProject key={project.id} {...project} />
				))
			}
		</div>
	);
};

export default CardContainer;
