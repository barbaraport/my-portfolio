import type { SkillProps } from './SkillProps';

export type AboutMeSectionProps = {
	info: Info;
};

type Info = {
	name: string;
	role: string;
	description: string[];
	skills: SkillProps[];
	work: Experience[];
	education: Experience[];
	photo: {
		url: string;
		alt: string;
	};
};

type Experience = {
	name: string;
	place: string;
	startDate: string;
	endDate: string;
	description: string[];
};
