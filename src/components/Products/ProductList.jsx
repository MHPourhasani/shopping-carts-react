import * as data from '../../data';
import ProductCardItem from './ProductCardItem';
import ProductListItem from './ProductListItem';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { useState } from 'react';

const ProductList = () => {
	const [typeShowProducts, setTypeShowProducts] = useState('card');

	return (
		<section className='mt-16 w-full flex flex-col items-center justify-center'>
			<section className='my-1 flex w-10/12 items-center justify-between md:w-7/12 lg:w-1/2'>
				<p className='text-lg font-semibold'>Products</p>

				<div className='flex items-center justify-center text-lg'>
					<button
						onClick={() => setTypeShowProducts('list')}
						className={`mx-1 w-6 h-6 flex justify-center items-center ${
							typeShowProducts === 'list'
								? 'rounded-md bg-sky-500 text-white'
								: ''
						}`}>
						<AiOutlineUnorderedList />
					</button>

					<button
						onClick={() => setTypeShowProducts('card')}
						className={`mx-1 w-6 h-6 flex justify-center items-center ${
							typeShowProducts === 'card'
								? 'rounded-md bg-sky-500 text-white'
								: ''
						}`}>
						<BsGrid />
					</button>
				</div>
			</section>

			<section className='flex w-full items-center justify-center'>
				{typeShowProducts === 'card' ? (
					<section className='flex w-full flex-wrap items-start justify-center'>
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
