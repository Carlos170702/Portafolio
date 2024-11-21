import { CardProject } from "../CardProject";

const CardContainer = ({ }) => {
	return (
		<div className='grid gap-4 sm:grid-cols-2 justify-between lg:grid-cols-3'>
			<CardProject />
			<CardProject />
			<CardProject />
		</div>
	);
};

export default CardContainer;
