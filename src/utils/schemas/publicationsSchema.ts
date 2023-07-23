import { z } from 'zod';

export const publicationSchema = z.object({
	_id: z.number(),
	timestamp: z.string(),
	title: z.string(),
	description: z.string(),
	link: z.string(),
	image: z.string(),
});

export const publicationsSchema = z.array(publicationSchema);

export type Publication = z.infer<typeof publicationSchema>;
