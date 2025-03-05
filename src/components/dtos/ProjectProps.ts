import type { SkillProps } from "./SkillProps";

export interface ProjectProps {
    name: string;
    description: string;
    image: string;
    skills: SkillProps[];
}