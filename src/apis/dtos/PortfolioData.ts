export interface PortfolioData {
	info: Info;
	projects: Project[];
}

export interface Info {
	name: string;
	photo: Image;
	role: string;
	description: string[];
	skills: Skill[];
	education: Experience[];
	social: Social;
}

export interface Skill {
	name: string;
}

export interface Experience {
	name: string;
	place?: string;
	startDate: Date;
	endDate?: Date;
	description: string[];
}

export interface Social {
	linkedin: string;
	github: string;
	youtube: string;
}

export interface Project {
	name: string;
	description: string;
	image: Image;
	skills: Skill[];
}

export interface Image {
	url: string;
	alt: string;
}
