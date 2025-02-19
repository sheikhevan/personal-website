export type Tags = 'school-note' | 'physics' | 'quantum-physics' | 'free-will' | 'religion';
export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: Tags[];
	published: boolean;
};
