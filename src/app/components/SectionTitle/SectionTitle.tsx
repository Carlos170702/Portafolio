'use client'
import React from 'react';
import { Slide } from 'react-awesome-reveal';

export interface Props {
	sectionTitle: string;
}

const SectionTitle: React.FC<Props> = ({ sectionTitle }) => {
	return (
		<Slide direction='right'>
			<h2 className='text-4xl font-bold'>{sectionTitle}</h2>
		</Slide>
	);
};

export default SectionTitle;
