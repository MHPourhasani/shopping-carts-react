// components
import Layout from '../Layout/Layout';
import ProductList from '../components/Products/ProductList';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
	return (
		<Layout>
			<main className='w-full'>
				<ProductList />
				<Footer />
			</main>
		</Layout>
	);
};

export default HomePage;
