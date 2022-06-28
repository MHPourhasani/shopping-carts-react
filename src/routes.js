import LoginPage from './Pages/LoginPage';
import CardsPage from './Pages/CardsPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import SettingPage from './Pages/SettingPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import ProfilePage from './Pages/ProfilePage';
import CheckoutPage from './Pages/CheckoutPage';

const routes = [
	{ path: '/products/:id', component: ProductDetailPage },
	{ path: '/setting', component: SettingPage },
	{ path: '/login', component: LoginPage },
	{ path: '/signup', component: SignupPage },
	{ path: '/cards', component: CardsPage },
	{ path: '/profile', component: ProfilePage },
	{ path: '/checkout', component: CheckoutPage },
	{ path: '/', component: HomePage },
];

export default routes;
