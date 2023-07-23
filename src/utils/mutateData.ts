type RequestMethod = 'POST' | 'PUT' | 'PATCH';

type MutateDataOptions = {
	path: string;
	method: RequestMethod;
	body?: object;
};

export const mutateData = async ({ path, method, body }: MutateDataOptions) => {
	const response = await fetch(path, {
		method,
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error('Failed to mutate data');
	}

	return await response.json();
};
