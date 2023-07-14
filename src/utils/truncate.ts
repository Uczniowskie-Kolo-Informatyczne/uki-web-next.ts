export const truncate = (
	text: string,
	maxLength: number,
	decorator = '...'
) => {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + decorator;
	}

	return text;
};
