import React from 'react';
import { SkillModel } from '../../models';
import { NextPage } from 'next';

export interface Props {
	skill: SkillModel;
}

const SkillItem: NextPage<Props> = ({ skill }) => {
	return (
		<div
			className={`flex items-center justify-center gap-2 text-dark border border-solid border-black shadow px-4 py-2 rounded-lg h-[35.35px]`}
		>
			<p className="text-xl bg-">{skill.icon}</p>
			<p className="font-medium text-sm">{skill.skill}</p>
		</div>
	);
};

export default SkillItem;
