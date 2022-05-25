import CardsPage from './Pages/CardsPage';
import HomePage from './Pages/HomePage';

const routes = [
	{ path: '/cards', component: CardsPage },
	{ path: '/', exact: true, component: HomePage },
];

export default routes;
