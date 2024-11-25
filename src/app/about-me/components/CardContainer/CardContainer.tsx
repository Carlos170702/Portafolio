import { projects } from "../../data";
import { CardProject } from "../CardProject";

const CardContainer = ({ }) => {
	return (
		<div className='space-y-4'>
			{
				projects.map((project) => (
					<CardProject key={project.id} {...project} />
				))
			}
		</div>
	);
};

export default CardContainer;
