'use client';

import { useSubmitContactForm } from './useSubmitContactForm';
import { Button } from '@/components/inc/Button';
import { ErrorMessage } from './ErrorMessage';
import { useContactForm } from './useContactForm';

export const ContactForm = () => {
	const { register, handleSubmit, errors } = useContactForm();
	const { submit, isLoading, isSuccess, isError } = useSubmitContactForm();

	return (
		<div className="mx-auto max-w-4xl">
			<div role="status">
				{isSuccess && (
					<div className="mb-12 rounded-lg bg-black/20 p-5">
						<span className="font-medium tracking-wide text-green-500">
							Wiadomość została wysłana
						</span>
					</div>
				)}
			</div>

			<div role="alert">
				{isError && (
					<div className="mb-5 rounded-lg bg-black/20 p-5">
						<span className="font-medium tracking-wide text-red-400">
							Coś poszło nie tak, wiadomość nie została wysłana
						</span>
					</div>
				)}
			</div>

			<form onSubmit={handleSubmit(submit)}>
				<div className="flex flex-col gap-7">
					<div className="flex flex-col text-gray-300">
						<label className="pb-1 pl-1" htmlFor="input-name">
							Imię
						</label>

						<input
							id="input-name"
							className="rounded-lg bg-black/20 px-4 py-3 shadow-md focus-visible:outline-offset-[4px]"
							autoComplete="name"
							aria-invalid={Boolean(errors.name)}
							aria-describedby="input-name-error-message"
							required
							{...register('name')}
						/>

						{errors.name && (
							<ErrorMessage
								message={errors.name.message}
								errorId="input-name-error-message"
							/>
						)}
					</div>

					<div className="flex flex-col text-gray-300">
						<label className="pb-1 pl-1" htmlFor="input-email">
							Email
						</label>

						<input
							id="input-email"
							className="rounded-lg bg-black/20 px-4 py-3 shadow-md outline-none focus-visible:!outline-offset-[4px]"
							autoComplete="email"
							aria-invalid={Boolean(errors.email)}
							aria-describedby="input-email-error-message"
							required
							{...register('email')}
						/>

						{errors.email && (
							<ErrorMessage
								message={errors.email.message}
								errorId="input-email-error-message"
							/>
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
							autoComplete="off"
							aria-invalid={Boolean(errors.message)}
							aria-describedby="input-message-error-message"
							required
						></textarea>

						{errors.message && (
							<ErrorMessage
								message={errors.message.message}
								errorId="input-message-error-message"
							/>
						)}
					</div>

					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="input-termsOfService"
								aria-invalid={Boolean(errors.termsOfService)}
								aria-describedby="input-termsOfService-error-message"
								required
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
								errorId="input-termsOfService-error-message"
							/>
						)}
					</div>

					<div className="mt-12 w-full">
						<Button
							type="submit"
							size="lg"
							variant="blue"
							disabled={isLoading}
						>
							Wyślij
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};
