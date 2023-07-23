import { mutateData } from '@/utils/mutateData';
import type { ContactFormValues } from '@/utils/schemas/contactFormSchema';
import { useMutation } from 'react-query';

type ContactFormPayload = Pick<ContactFormValues, 'email' | 'name' | 'message'>;

export const useContactForm = () => {
	const { data, isLoading, isSuccess, isError, error, mutate } = useMutation(
		(payload: ContactFormPayload) =>
			mutateData({
				path: 'https://uki.edu.pl/api/contact',
				method: 'POST',
				body: payload,
			})
	);

	const submit = ({
		email,
		name,
		message,
		termsOfService,
	}: ContactFormValues) => {
		if (!termsOfService) {
			return;
		}

		mutate({
			email,
			name,
			message,
		});
	};

	return {
		submit,
		data,
		isLoading,
		isSuccess,
		isError,
		error,
	};
};
