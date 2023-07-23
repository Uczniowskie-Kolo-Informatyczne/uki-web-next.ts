type ErrorMessageProps = {
	message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	if (!message) {
		return;
	}

	return (
		<div className="mt-2 w-full">
			<span className="pl-1 font-medium text-red-400">{message}</span>
		</div>
	);
};
