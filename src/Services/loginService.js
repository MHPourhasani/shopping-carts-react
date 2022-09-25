import http from './httpService';

export const LoginUser = (data) => {
	return http.post('/api/user/login', data);
};
