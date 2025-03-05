import type { Skill } from "./SkillDTO";

export interface PortfolioData {
    projects: Project[];
}

interface Project {
    name: string;
    description: string;
    image: string;
    skills: Skill[];
}