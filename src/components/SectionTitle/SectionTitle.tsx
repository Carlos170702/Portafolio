'use client'
import React from 'react';
import { SliceIn } from '../SliceIn';

export interface Props {
	sectionTitle: string;
	position?: 'left' | 'right' | 'center';
}

const SectionTitle: React.FC<Props> = ({ sectionTitle, position = 'right' }) => {
	return (
		<SliceIn direction={'right'}>
			<h2 className={`text-3xl font-bold text-${position}`}>{sectionTitle}</h2>
		</SliceIn>
	);
};

export default SectionTitle;
