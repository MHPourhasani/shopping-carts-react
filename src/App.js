import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardProvider from './Providers/CardProvider';
import routes from './routes';

function App() {
	return (
		<Router>
			<CardProvider>
				<ToastContainer />
				<Routes>
					{routes.map((route) => (
						<Route {...route} element={<route.component />} key={route.path} />
					))}
				</Routes>
			</CardProvider>
		</Router>
	);
}

export default App;
