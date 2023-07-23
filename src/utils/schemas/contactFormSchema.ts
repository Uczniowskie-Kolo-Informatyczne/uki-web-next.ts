import { z } from 'zod';

export const contactFormSchema = z
	.object({
		name: z.string().min(1, 'Pole "imię" jest wymagane'),
		email: z
			.string()
			.min(1, 'Pole "email" jest wymagane')
			.email('Podano niepoprawny adres email'),
		message: z.string().min(1, 'Pole "wiadomość" jest wymagane'),
		termsOfService: z.literal(true, {
			errorMap: () => ({
				message: 'Musisz zaakceptować zasady korzystania z serwisu',
			}),
		}),
	})
	.required();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
