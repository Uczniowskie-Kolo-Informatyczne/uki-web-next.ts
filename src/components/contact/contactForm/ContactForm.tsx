'use client';

import { useForm } from 'react-hook-form';
import { useContactForm } from './useContactForm';
import { Button } from '@/components/inc/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ContactFormValues } from '@/utils/schemas/contactFormSchema';
import { contactFormSchema } from '@/utils/schemas/contactFormSchema';
import { ErrorMessage } from './ErrorMessage';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
	});

	const { submit, isLoading, isSuccess, isError } = useContactForm();

	return (
		<div className="mx-auto max-w-4xl">
			{isSuccess && (
				<div className="mb-12 rounded-lg bg-black/20 p-5">
					<span className="font-medium tracking-wide text-green-500">
						Wiadomość została wysłana
					</span>
				</div>
			)}

			{isError && (
				<div className="mb-5 rounded-lg bg-black/20 p-5">
					<span className="font-medium tracking-wide text-red-400">
						Coś poszło nie tak, wiadomość nie została wysłana
					</span>
				</div>
			)}

			<form onSubmit={handleSubmit(submit)}>
				<div className="flex flex-col gap-7">
					<div className="flex flex-col text-gray-300">
						<label className="pb-1 pl-1" htmlFor="input-name">
							Imię
						</label>

						<input
							id="input-name"
							className="rounded-lg bg-black/20 px-4 py-3 shadow-md focus-visible:outline-offset-[4px]"
							{...register('name')}
						/>

						{errors.name && (
							<ErrorMessage message={errors.name.message} />
						)}
					</div>

					<div className="flex flex-col text-gray-300">
						<label className="pb-1 pl-1" htmlFor="input-email">
							Email
						</label>

						<input
							id="input-email"
							className="rounded-lg bg-black/20 px-4 py-3 shadow-md outline-none focus-visible:!outline-offset-[4px]"
							{...register('email')}
						/>

						{errors.email && (
							<ErrorMessage message={errors.email.message} />
						)}
					</div>

					<div className="flex flex-col text-gray-300">
						<label className="pb-1 pl-1" htmlFor="input-message">
							Wiadomość
						</label>

						<textarea
							{...register('message')}
							className="rounded-lg bg-black/20 px-4 py-3 shadow-md focus-visible:outline-offset-[4px]"
							id="input-message"
						></textarea>

						{errors.message && (
							<ErrorMessage message={errors.message.message} />
						)}
					</div>

					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="input-termsOfService"
								{...register('termsOfService')}
							/>

							<label
								className="mt-0.5 cursor-pointer"
								htmlFor="input-termsOfService"
							>
								Zgadzam się na przetwarzanie danych osobowych
							</label>
						</div>

						{errors.termsOfService && (
							<ErrorMessage
								message={errors.termsOfService.message}
							/>
						)}
					</div>

					<Button
						type="submit"
						size="lg"
						variant="blue-fill"
						disabled={isLoading}
					>
						Wyślij
					</Button>
				</div>
			</form>
		</div>
	);
};
