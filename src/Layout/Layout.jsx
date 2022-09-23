import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<section className='flex h-auto w-full flex-col items-center justify-center'>
			<Header />
			{children}
			<Navbar />
		</section>
	);
};

export default Layout;
