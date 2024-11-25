'use client'
import { FadeIn } from '@/components/FadeIn';
import GeneralLink from '@/components/GeneralButton/GeneralLink';
import { ObserverEntryElement } from '@/components/ObserverEntryElement';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectModel } from '../../models';


const CardProject: React.FC<ProjectModel> = ({ description, image, links, technologies, title }) => {
	return (
		<ObserverEntryElement>
			<FadeIn>
				<div className='w-full sm:max-w-[350px] min-h-[400px] rounded-md overflow-hidden shadow-md flex flex-col'>
					<Image
						loading='lazy'
						src={image}
						width={350}
						height={200}
						className='w-full max-h-[250px] object-cover'
						alt={`Imagen de ${title}`}
					/>

					<div className='flex-1 m-4 gap-2 flex-col flex'>
						<h4 className='text-xl font-bold'>{title}</h4>

						<p className='text-gray-600'>{description}</p>

						<div className=' flex gap-3'>
							{
								technologies.map((technology, index) => (
									<div className='flex gap-4 items-center w-max bg-gray-100 rounded-2xl px-2 py-1 text-gray-500 text-sm' key={index}>
										<span>{technology}</span>
									</div>
								))
							}
						</div>

						{/* Links */}
						<div className='flex items-center gap-4 flex-wrap'>
							<GeneralLink icon={<FaGithub size={20} />} title={'GitHub'} href={links.github} />
							{
								links.demo && <GeneralLink icon={<FaExternalLinkAlt size={20} />} title={'Demo'} href={links.demo} />
							}
							<Link href={''} className='bg-slate-950 text-white w-full px-3 py-2 rounded-md flex items-center gap-4 justify-center'>
								<span>Conocer mas</span>
							</Link>
						</div>
					</div>
				</div>
			</FadeIn>
		</ObserverEntryElement>
	);
};

export default CardProject;
