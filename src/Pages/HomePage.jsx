// components
import Layout from '../Layout/Layout';
import ProductList from '../components/Products/ProductList';
import Footer from '../components/Footer/Footer';
import AsideMenu from '../components/AsideMenu/AsideMenu';

const HomePage = () => {
	return (
		<Layout>
			<main className='flex w-full flex-col bg-white pt-16 pb-8 md:pt-20 md:pb-0'>
				<section className='flex items-start justify-between lg:px-10'>
					<AsideMenu/>
					<ProductList />
				</section>
				<Footer />
			</main>
		</Layout>
	);
};

export default HomePage;
