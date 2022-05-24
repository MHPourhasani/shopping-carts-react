import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Router>
			<Switch>
				<ToastContainer />
			</Switch>
		</Router>
	);
}

export default App;
