import axios from 'axios';
import type { RegisterUserInput } from 'src/interfaces/user.schema';

const baseUrl = import.meta.env.VITE_BASEURL || process.env.VITE_BASEURL;

export const createUser = (registerUserInput: RegisterUserInput) => {
	return axios({
		method: 'post',
		url: baseUrl + '/users',
		responseType: 'json',
		data: registerUserInput
	})
		.then((res) => {
			console.log(res);
		})
		.catch((error) => {
			console.error(error);
		});
};
