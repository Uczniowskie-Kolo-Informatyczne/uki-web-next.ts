type ErrorMessageProps = {
	message?: string;
	errorId: string;
};

export const ErrorMessage = ({ message, errorId }: ErrorMessageProps) => {
	if (!message) {
		return;
	}

	return (
		<div className="mt-2 w-full">
			<span className="pl-1 font-medium text-red-400" id={errorId}>
				{message}
			</span>
		</div>
	);
};
