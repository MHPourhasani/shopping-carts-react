import LoginPage from './Pages/LoginPage';
import CardsPage from './Pages/CardsPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import SettingPage from './Pages/SettingPage';

const routes = [
	{ path: '/setting', component: SettingPage },
	{ path: '/login', component: LoginPage },
	{ path: '/signup', component: SignupPage },
	{ path: '/cards', component: CardsPage },
	{ path: '/', component: HomePage },
];

export default routes;
