import axios from 'axios';
import type registerDto from 'src/interfaces/registerDto.interface';

const baseUrl = import.meta.env.VITE_BASEURL || process.env.VITE_BASEURL;

export const createUser = (registerDto: registerDto) => {
	return axios({
		method: 'post',
		url: baseUrl + '/users',
		responseType: 'json',
		data: registerDto
	})
		.then((res) => {
			console.log(res);
		})
		.catch((error) => {
			console.error(error);
		});
};
