export const fetchData = async (url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return response.json();
};
