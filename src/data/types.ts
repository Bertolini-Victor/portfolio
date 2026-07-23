export type Language = "es" | "en";

export interface SkillOrTagItem {
	name: string;
	slug?: string;
}

export interface ProjectItem {
	id: string;
	title: string;
	description: string;
	fullStory?: string;
	features?: string[];
	gallery?: string[];
	image: string;
	tags: (string | SkillOrTagItem)[];
	featured: boolean;
	githubUrl?: string;
	demoUrl?: string;
}
