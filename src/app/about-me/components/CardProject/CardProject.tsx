'use client'
import GeneralLink from '@/app/components/GeneralButton/GeneralLink';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export interface Props {
	title?: string
}

const CardProject: React.FC<Props> = ({ }) => {
	return (
		<div className='w-full sm:max-w-[350px] min-h-[400px] rounded-md overflow-hidden shadow-md flex flex-col'>
			<Image
				loading='lazy'
				src={'https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png'}
				width={350}
				height={200}
				className='w-full h-full'
				alt='project'
			/>

			<div className='flex-1 m-4 gap-2 flex-col flex'>
				{/* title */}
				<h4 className='text-xl font-bold'>Proyecto</h4>

				{/* description */}
				<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptas corrupti sequi cumque in sit est ullam minima. Enim nihil veniam accusamus eaque quo sunt aspernatur ex alias? Incidunt, quas!</p>

				{/* Technologies */}
				<div className=' flex gap-3'>
					<div className='flex gap-4 items-center w-max bg-gray-100 rounded-2xl px-2 py-1 text-gray-500 text-sm'>
						<span>React</span>
					</div>
					<div className='flex gap-4 items-center w-max bg-gray-100 rounded-2xl px-2 py-1 text-gray-500 text-sm'>
						<span>Next</span>
					</div>
				</div>

				{/* Links */}
				<div className='flex items-center gap-4 flex-wrap'>
					<GeneralLink icon={<FaGithub size={20} />} title={'GitHub'} href='' />
					<GeneralLink icon={<FaExternalLinkAlt size={20} />} title={'Demo'} href='' />
					<Link href={''} className='bg-slate-950 text-white w-full px-3 py-2 rounded-md flex items-center gap-4 justify-center'>
						<span>Conocer mas</span>
					</Link>
				</div>
			</div>


		</div>
	);
};

export default CardProject;
