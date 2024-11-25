'use client';
import { Variants, motion } from 'framer-motion';
import { NextPage } from 'next';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const FadeIn: NextPage<Props> = ({ children, className = '' }) => {
	const variants: Variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 1 } },
		exit: { opacity: 0 },
	}

	return (
		<motion.div
			className={className}
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
