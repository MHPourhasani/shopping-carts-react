import Layout from '../Layout/Layout';
import ProductList from '../components/Products/ProductList';

const HomePage = () => {
	return (
		<Layout>
			<main className='w-full pb-14'>
				<ProductList />
			</main>
		</Layout>
	);
};

export default HomePage;
