'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface Props {
	children?: React.ReactNode
	className?: string
}

const ObserverEntryElement: React.FC<Props> = ({ children, className = 'min-h-[300px]' }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});


	return (
		<div ref={ref} className={`${className}`}>
			{inView && (children)}
		</div>
	);
};

export default ObserverEntryElement;
