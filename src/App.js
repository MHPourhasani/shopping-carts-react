import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import AuthProvider from './Providers/AuthProvider';
import CardProvider from './Providers/CardProvider';
import routes from './routes';

function App() {
	return (
		<Router>
			<HelmetProvider>
				<Helmet>
					{/*  HTML Meta Tags  */}
					<title>Shopping Carts</title>
					<meta name='description' content='MHP store, a store full of lovely shoes' />

					{/* Google / Search Engine Tags  */}
					<meta itemprop='name' content='Shopping Carts' />
					<meta
						itemprop='description'
						content='MHP store, a store full of lovely shoes'
					/>

					{/* Facebook Meta Tags  */}
					<meta
						property='og:url'
						content='https://shopping-carts-mhpourhasani.vercel.app'
					/>
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Shopping Carts' />
					<meta
						property='og:description'
						content='MHP store, a store full of lovely shoes'
					/>

					{/* Twitter Meta Tags  */}
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content='Shopping Carts' />
					<meta
						name='twitter:description'
						content='MHP store, a store full of lovely shoes'
					/>
				</Helmet>

				<AuthProvider>
					<CardProvider>
						<ToastContainer />
						<Routes>
							{routes.map((route) => (
								<Route {...route} element={<route.component />} key={route.path} />
							))}
						</Routes>
					</CardProvider>
				</AuthProvider>
			</HelmetProvider>
		</Router>
	);
}

export default App;
