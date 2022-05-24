import http from './httpService';

const getProductServise = (data) => {
	return http.get('/user/login', data);
};

export default getProductServise;
