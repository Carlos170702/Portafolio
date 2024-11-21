'use client'
import Link from 'next/link';
import React from 'react';

export interface Props {
	title: string,
	className?: string,
	icon: React.ReactElement
	href?: string
}

const GeneralLink: React.FC<Props> = ({ icon, title, className, href }) => {
	const CopyMailClipboard = () => {
		navigator.clipboard.writeText("carloscruz1dev@gmail.com");
	};
	return (
		<Link
			onClick={() => !href ? CopyMailClipboard() : () => { }}
			href={href ? href : ''}
			target={href && "_blank"}
			className={`px-3 py-2.5 rounded-md font-semibold text-sm border border-solid border-transparent shadow-md flex gap-2 items-center 
	  hover:bg-light hover:text-dark hover:border-dark transition-all duration-300 ease-in-out ${className}`}
		>
			<span>{title}</span>
			{icon}
		</Link>
	);
};

export default GeneralLink;
