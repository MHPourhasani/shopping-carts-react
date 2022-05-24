import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import routes from './routes';

function App() {
	return (
		<Router>
			<ToastContainer />
			<Switch>
				{routes.map((route) => (
					<Route {...route} component={route.component} key={route.path} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
