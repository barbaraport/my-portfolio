import type { Skill } from './SkillDTO';

export interface PortfolioData {
	info: Info;
	projects: Project[];
}

interface Info {
	name: string;
	role: string;
	description: string[];
	skills: Skill[];
	education: Experience[];
	social: Social;
	photo: Image;
}

interface Experience {
	name: string;
	place?: string;
	startDate: string;
	endDate?: string;
	description: string[];
}

interface Social {
	linkedin: string;
	github: string;
	youtube: string;
}

interface Project {
	name: string;
	description: string;
	image: Image;
	skills: Skill[];
}

interface Image {
	url: string;
	alt: string;
}
