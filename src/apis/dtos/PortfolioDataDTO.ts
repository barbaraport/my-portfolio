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
	work: Experience[];
	education: Experience[];
}

interface Experience {
	name: string;
	place: string;
	startDate: string;
	endDate: string;
	description: string[];
}

interface Project {
	name: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	skills: Skill[];
}
