'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SliceInProps {
	children: React.ReactNode
}

const SliceIn: React.FC<SliceInProps> = ({ children }) => {
	return (
		<motion.div
			className='my-5'
			initial={{ x: 700, opacity: 0 }}
			animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
		>
			{children}
		</motion.div>
	);
};

export default SliceIn;
