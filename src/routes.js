import LoginPage from './Pages/LoginPage';
import CardsPage from './Pages/CardsPage';
import HomePage from './Pages/HomePage';

const routes = [
	{ path: '/login', component: LoginPage },
	{ path: '/cards', component: CardsPage },
	{ path: '/', component: HomePage },
];

export default routes;
