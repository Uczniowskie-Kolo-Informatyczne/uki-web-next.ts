export const formatTimestamp = (date: string) => {
	const parsedDate = new Date(Number(date));

	return parsedDate.toLocaleString('pl-PL', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
};
