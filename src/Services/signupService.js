import http from './httpService';

export const SignupUser = (data) => {
	return http.post('/user/register',data)
};
