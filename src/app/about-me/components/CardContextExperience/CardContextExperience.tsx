import { ObserverEntryElement } from '@/app/components/ObserverEntryElement';
import { SliceIn } from '@/app/components/SliceIn';
import React from 'react';

export interface Props {
	title: string,
	company: string,
	description: string,
	id: number
}

const CardContextExperience: React.FC<Props> = ({ company, description, title, id }) => {
	return (
		<ObserverEntryElement>
			<SliceIn direction={id % 2 !== 0 ? 'right' : 'left'}>
				<div className="p-6">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<h4 className="text-lg font-medium text-muted-foreground mb-2">
						{company}
					</h4>
					<p className="text-muted-foreground">{description}</p>
				</div>
			</SliceIn>
		</ObserverEntryElement>
	);
};

export default CardContextExperience;
