import { FadeIn } from '@/components/FadeIn';
import GeneralLink from '@/components/GeneralButton/GeneralLink';
import { ObserverEntryElement } from '@/components/ObserverEntryElement';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectModel } from '../../models';


const CardProject: React.FC<ProjectModel> = ({ description, image, links, technologies, title, id }) => {
	console.log(id % 2 != 0)
	return (
		<ObserverEntryElement>
			<FadeIn className={`overflow-hidden lg:h-[400px] gap-2 flex flex-col ${id % 2 != 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
				<div className='p-3 border-2 border-gray-100 rounded-lg flex-1'>
					<Image
						loading='lazy'
						src={image}
						width={350}
						height={200}
						className='w-full h-full object-cover'
						alt={`Imagen de ${title}`}
						quality={100}
					/>
				</div>

				<div className='space-y-3 flex-col grid grid-rows-2 lg:w-[500px]'>
					<div className='border-2 border-gray-100 p-5  rounded-lg'>
						<h4 className='text-2xl font-bold text-center'>{title}</h4>

						<p className='text-gray-600'>{description}</p>
					</div>

					<div className='border-2 p-5 border-gray-100 rounded-lg'>
						<div className=' flex gap-3'>
							{
								technologies.map((technology, index) => (
									<div className='flex gap-4 items-center w-max bg-gray-100 rounded-2xl px-4 py-1 text-gray-500 text-sm' key={index}>
										<span>{technology}</span>
									</div>
								))
							}
						</div>

						<div className='flex items-center gap-4 flex-wrap'>
							<GeneralLink icon={<FaGithub size={20} />} title={'GitHub'} href={links.github} />
							{
								links.demo && <GeneralLink icon={<FaExternalLinkAlt size={20} />} title={'Demo'} href={links.demo} />
							}
						</div>
						<Link href={''} className='bg-slate-950 text-white w-full px-3 py-2 rounded-md flex items-center gap-4 justify-center'>
							<span>Conocer mas</span>
						</Link>
					</div>

				</div>
			</FadeIn>
		</ObserverEntryElement>
	);
};

export default CardProject;
