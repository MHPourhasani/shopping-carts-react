import { useState } from 'react';
import * as data from '../../data';

// components
import ProductCardItem from './ProductCardItem';
import ProductListItem from './ProductListItem';

// icons
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';

const ProductList = () => {
	const [typeShowProducts, setTypeShowProducts] = useState('card');

	return (
		<section className='flex w-full flex-col items-center justify-center pt-14 pb-8 sm:pt-16 md:pb-24'>
			<section className='my-2 flex w-11/12 items-center justify-between sm:w-8/12 md:w-6/12 lg:w-9/12'>
				<p className='text-lg font-semibold lg:font-bold'>Products</p>

				{/* list and card btn to select the type of product display */}
				<div className='flex items-center gap-1 text-xl lg:gap-2'>
					<button
						onClick={() => setTypeShowProducts('list')}
						className={`flex h-9 w-9 items-center justify-center rounded-md hover:bg-sky-300 md:h-8 md:w-8 lg:h-8 lg:w-8 ${
							typeShowProducts === 'list' ? 'bg-sky-500 text-white' : ''
						}`}>
						<AiOutlineUnorderedList />
					</button>

					<button
						onClick={() => setTypeShowProducts('card')}
						className={`flex h-9 w-9 items-center justify-center rounded-md hover:bg-sky-300 md:h-8 md:w-8 lg:h-8 lg:w-8 ${
							typeShowProducts === 'card' ? 'bg-sky-500 text-white' : ''
						}`}>
						<BsGrid />
					</button>
				</div>
			</section>

			{/* products are displayed based on the selected type */}
			<section className='flex w-11/12 items-center justify-center'>
				{typeShowProducts === 'card' ? (
					<section className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5'>
						{data.products.map((product) => {
							return <ProductCardItem product={product} key={product.id} />;
						})}
					</section>
				) : (
					<section className='grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3 xl:gap-4'>
						{data.products.map((product) => {
							return <ProductListItem product={product} key={product.id} />;
						})}
					</section>
				)}
			</section>
		</section>
	);
};

export default ProductList;
