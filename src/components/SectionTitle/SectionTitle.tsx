'use client'
import React from 'react';
import { SliceIn } from '../SliceIn';

export interface Props {
	sectionTitle: string;
}

const SectionTitle: React.FC<Props> = ({ sectionTitle }) => {
	return (
		<SliceIn direction='right'>
			<h2 className='text-3xl font-bold'>{sectionTitle}</h2>
		</SliceIn>
	);
};

export default SectionTitle;
