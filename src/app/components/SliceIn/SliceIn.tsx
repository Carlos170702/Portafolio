'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

export interface SliceInProps {
	children: React.ReactNode
	direction: 'right' | 'left'
}

const SliceIn: React.FC<SliceInProps> = ({ children, direction = 'right' }) => {

	const initial = { x: direction == 'right' ? 700 : -700, opacity: 0 }
	const animate = { x: 0, opacity: 1, transition: { duration: 1 } }

	const VariantAnimation: Variants = {
		initial,
		animate
	}

	return (
		<motion.div
			variants={VariantAnimation}
			className='my-5'
			initial={'initial'}
			animate={'animate'}
		>
			{children}
		</motion.div>
	);
};

export default SliceIn;
