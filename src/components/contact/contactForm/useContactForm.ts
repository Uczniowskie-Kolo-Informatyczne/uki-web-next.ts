import type { ContactFormValues } from '@/utils/schemas/contactFormSchema';
import { contactFormSchema } from '@/utils/schemas/contactFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
	});

	return {
		register,
		handleSubmit,
		errors,
	};
};
