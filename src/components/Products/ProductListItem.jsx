import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Providers
import { useCardActions, useCard } from '../../Providers/CardProvider';

import { checkInCard } from '../../utils/CheckInCard';

// icons
import { BsCartCheckFill, BsCartPlus } from 'react-icons/bs';

const ProductListItem = ({ product }) => {
	const { card } = useCard();
	const dispatch = useCardActions();
	const { name, brandLogo, price, images, offPrice } = product;

	const addProductHandler = (product) => {
		toast.success(`${product.name} added to carts`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<section className='flex w-full items-center justify-between gap-2 rounded-md border-1 bg-white p-2 shadow-sm hover:scale-105 hover:border-sky-500 hover:drop-shadow-xl'>
			{/* image of product and pass product data */}
			<Link
				to={`products/${name}`}
				state={{ product: product }}
				className='h-28 w-28 hover:opacity-80 md:h-36 md:w-36 lg:h-40 lg:w-40'>
				<img
					src={images[0]}
					alt={name}
					loading='lazy'
					className='h-auto w-full rounded-md'
				/>
			</Link>

			{/* show name and price and offPrice product section */}
			<section className='flex h-full flex-col items-start justify-between'>
				{/* name of product and pass product data */}
				<Link to={`products/${name}`} state={{ product: product }}>
					<p className='text-lg font-semibold hover:text-gray-600 md:text-xl lg:text-xl'>
						{name}
					</p>
				</Link>

				{/* show brand of product */}
				<div className='flex h-5 items-center gap-2 rounded-md bg-sky-100 px-2 md:h-7'>
					<p className='text-xs font-semibold'>Brand:</p>
					<img src={brandLogo} alt={name} className='h-5 md:h-7' />
				</div>

				{/* show price and off price of product */}
				<div className='flex items-center gap-2 text-sm md:text-base'>
					<p className='rounded-md bg-gray-200 px-1.5 py-1 text-gray-400 line-through'>
						$ {price}
					</p>
					<p className='rounded-md bg-sky-200 px-1.5 py-1 font-medium'>$ {offPrice}</p>
				</div>
			</section>

			{/* add product to cart btn */}
			<button
				onClick={() => addProductHandler(product)}
				className='flex h-9 w-9 items-center justify-center rounded-md bg-sky-400 text-2xl text-white hover:bg-sky-500 md:h-10 md:w-10 md:text-2xl lg:h-11 lg:w-11'>
				{checkInCard(card, product) ? <BsCartCheckFill /> : <BsCartPlus />}
			</button>
		</section>
	);
};

export default ProductListItem;
