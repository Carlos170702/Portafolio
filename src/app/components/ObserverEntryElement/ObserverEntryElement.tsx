'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface Props {
	children?: React.ReactNode
}

const ObserverEntryElement: React.FC<Props> = ({ children }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});


	return (
		<div ref={ref} className='h-[300px]'>
			{inView && (children)}
		</div>
	);
};

export default ObserverEntryElement;
