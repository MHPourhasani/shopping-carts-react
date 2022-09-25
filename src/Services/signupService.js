import http from './httpService';

export const SignupUser = (data) => {
	return http.post('/api/user/register', data);
};
