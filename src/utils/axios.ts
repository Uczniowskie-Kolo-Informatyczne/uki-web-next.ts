import Axios from 'axios';
import { NEXT_PUBLIC_BACKEND_URL } from './env';

const axios = Axios.create({
	baseURL: NEXT_PUBLIC_BACKEND_URL,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
	},
	withCredentials: true,
});

export const fetchData = async (path: string) => {
	const response = await axios.get(path);
	return response.data;
};

export const mutateData = async (path: string, data: object) => {
	const response = await axios.post(path, data);
	return response.data;
};
