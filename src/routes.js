import CardsPage from './Pages/CardsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

const routes = [
	{ path: '/login', component: LoginPage },
	{ path: '/cards', component: CardsPage },
	{ path: '/', component: HomePage },
];

export default routes;
