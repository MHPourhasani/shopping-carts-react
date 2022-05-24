import Header from '../components/Header/Header';
import Footer from '../components/Header/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
