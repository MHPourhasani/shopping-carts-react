import * as data from '../../data';
import Product from './Product';

const ProductList = () => {
	return (
		<section className='flex w-full flex-wrap items-center justify-center'>
			{data.products.map((product) => {
				return <Product product={product} key={product.id} className='w-full' />;
			})}
		</section>
	);
};

export default ProductList;
