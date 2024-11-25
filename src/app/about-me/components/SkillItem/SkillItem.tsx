import { NextPage } from 'next';
import { SkillItem as Skill } from '../../models';

export interface Props {
	skill: Skill;
}

const SkillItem: NextPage<Props> = ({ skill }) => {
	return (
		<div className="bg-gray-100 rounded-lg p-2 text-center text-gray-600">
			<span className="text-sm font-medium">{skill.skill}</span>
		</div>
	);
};

export default SkillItem;
