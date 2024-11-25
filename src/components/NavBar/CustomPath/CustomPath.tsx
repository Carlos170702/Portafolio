import { SVGMotionProps, motion } from 'framer-motion';
import { NextPage } from 'next';
import React from 'react';

const CustomPath: NextPage<SVGMotionProps<SVGPathElement>> = (props) => {
	return (
		<motion.path
			fill="transparent"
			strokeWidth="2"
			stroke="hsl(0, 0%, 100%)"
			strokeLinecap="round"
			{...props}
		/>
	);
};

export default CustomPath;
