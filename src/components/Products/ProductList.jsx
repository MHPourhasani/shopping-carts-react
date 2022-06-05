import * as data from '../../data';
import ProductCardItem from './ProductCardItem';
import ProductListItem from './ProductListItem';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { useState } from 'react';

const ProductList = () => {
	const [typeShowProducts, setTypeShowProducts] = useState('card');

	return (
		<section className='mt-14 flex w-full flex-col items-center justify-center sm:mt-16'>
			<section className='my-1 flex w-11/12 items-center justify-between sm:w-8/12 md:w-6/12 lg:w-1/2'>
				<p className='text-lg font-semibold lg:font-bold'>Products</p>

				<div className='flex items-center justify-center text-lg'>
					<button
						onClick={() => setTypeShowProducts('list')}
						className={`mr-1 flex h-6 w-6 items-center justify-center rounded-md hover:bg-sky-300 md:h-8 md:w-8 lg:h-8 lg:w-8 ${
							typeShowProducts === 'list' ? 'bg-sky-500 text-white' : ''
						}`}>
						<AiOutlineUnorderedList />
					</button>

					<button
						onClick={() => setTypeShowProducts('card')}
						className={`ml-1 flex h-6 w-6 items-center justify-center rounded-md hover:bg-sky-300 md:h-8 md:w-8 lg:h-8 lg:w-8 ${
							typeShowProducts === 'card' ? 'bg-sky-500 text-white' : ''
						}`}>
						<BsGrid />
					</button>
				</div>
			</section>

			<section className='flex w-full items-center justify-center'>
				{typeShowProducts === 'card' ? (
					<section className='flex w-full flex-wrap items-stretch justify-center'>
						{data.products.map((product) => {
							return (
								<ProductCardItem
									product={product}
									key={product.id}
									className='w-full'
								/>
							);
						})}
					</section>
				) : (
					<section className='flex w-full flex-wrap items-start justify-center'>
						{data.products.map((product) => {
							return (
								<ProductListItem
									product={product}
									key={product.id}
									className='w-full'
								/>
							);
						})}
					</section>
				)}
			</section>
		</section>
	);
};

export default ProductList;
