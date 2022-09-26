import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Providers
import { useCardActions, useCard } from '../../Providers/CardProvider';

import { checkInCard } from '../../utils/CheckInCard';

// icons
import { BsCartCheckFill, BsCartPlus } from 'react-icons/bs';

const ProductCardItem = ({ product }) => {
	const { card } = useCard();
	const dispatch = useCardActions();
	const { name, brandLogo, price, images, offPrice } = product;

	// add products handler function
	const addProductHandler = (product) => {
		toast.success(`${product.name} added to carts`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<section className='flex w-full flex-col items-start justify-between rounded-md border-1 bg-white shadow-lg shadow-gray-200 hover:scale-105 hover:border-sky-500 hover:drop-shadow-xl'>
			{/* image of product and pass product data */}
			<Link to={`products/${name}`} state={{ product: product }} className='hover:opacity-80'>
				<img
					src={images[0]}
					alt={name}
					loading='lazy'
					className='h-auto w-full rounded-t-md'
				/>
			</Link>

			<section className='relative w-full p-1.5 md:px-2.5'>
				{/* add product to cart btn */}
				<button
					onClick={() => addProductHandler(product)}
					className='absolute -top-5 right-2 flex h-9 w-9 items-center justify-center rounded-md bg-sky-400 text-2xl text-white hover:bg-sky-500 md:h-10 md:w-10 md:text-2xl lg:h-11 lg:w-11'>
					{checkInCard(card, product) ? <BsCartCheckFill /> : <BsCartPlus />}
				</button>

				{/* show name and price and offPrice product section */}
				<section className='flex h-full flex-col items-start justify-between gap-1'>
					{/* name of product and pass product data */}
					<Link to={`products/${name}`} state={{ product: product }}>
						<p className='text-lg font-semibold hover:text-gray-600 md:text-xl lg:text-xl'>
							{name}
						</p>
					</Link>

					{/* show brand of product */}
					<div className='flex h-6 items-center gap-2 rounded-md bg-sky-100 px-2 md:h-7'>
						<p className='mr-2 text-xs font-semibold'>Brand:</p>
						<img src={brandLogo} alt={name} className='h-6 md:h-7' />
					</div>

					{/* show price and off price of product */}
					<section className='my-1 flex items-center gap-2 text-sm md:text-base'>
						<p className='bg-gray-20 rounded-md bg-gray-200 py-1 px-1.5 text-gray-400 line-through'>
							$ {price}
						</p>
						<p className='rounded-md bg-sky-200 py-1 px-1.5'>$ {offPrice}</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProductCardItem;
