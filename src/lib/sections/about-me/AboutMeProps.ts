import type { SkillProps } from '../../components/skill/SkillProps';

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
	social: Social;
};

type Experience = {
	name: string;
	place: string;
	startDate: string;
	endDate: string;
	description: string[];
};

type Social = {
	linkedin: string;
	github: string;
	youtube: string;
};
