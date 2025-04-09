import type { SkillProps } from '../skill/SkillProps';

export interface ProjectProps {
	name: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	skills: SkillProps[];
}
