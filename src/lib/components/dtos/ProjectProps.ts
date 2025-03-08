import type { SkillProps } from './SkillProps';

export interface ProjectProps {
	name: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	skills: SkillProps[];
}
