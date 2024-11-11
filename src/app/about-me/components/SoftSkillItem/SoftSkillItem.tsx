import React from 'react';
import { softSkillModel } from '../../models';
import { NextPage } from 'next';

export interface Props {
	softSkill: softSkillModel;
}

const SoftSkillItem: NextPage<Props> = ({ softSkill }) => {
	return (
		<div
			className="flex items-center gap-2  text-dark"
		>
			<p className="font-medium text-sm">{softSkill.skill}</p>
		</div>
	);
};

export default SoftSkillItem;
