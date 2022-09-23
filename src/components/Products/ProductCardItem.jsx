import { useCardActions, useCard } from '../../Providers/CardProvider';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { checkInCard } from '../../utils/CheckInCard';

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
		<section className='flex w-5/12 flex-col items-start justify-between rounded-md border-1 bg-white shadow-lg shadow-gray-200 hover:scale-105 hover:border-sky-500 hover:drop-shadow-xl sm:w-3/12 md:w-1/5 lg:w-2/12'>
			{/* image of product and pass product data */}
			<Link to={`products/${name}`} state={{ product: product }} className='hover:opacity-80'>
				<img
					src={images[0]}
					alt={name}
					loading='lazy'
					className='h-auto w-full rounded-md'
				/>
			</Link>

			<section className='relative w-full p-1.5 md:px-2.5'>
				{/* add product to cart btn */}
				<button
					onClick={() => addProductHandler(product)}
					className='absolute -top-4 right-2 flex h-8 w-8 items-center justify-center rounded-md bg-sky-400 text-lg text-white hover:bg-sky-500 md:h-9 md:w-9'>
					{checkInCard(card, product) ? <MdShoppingCart /> : <MdAddShoppingCart />}
				</button>

				{/* show name and price and offPrice product section */}
				<section className='flex flex-col items-start justify-center'>
					{/* name of product and pass product data */}
					<Link to={`products/${name}`} state={{ product: product }}>
						<p className='mb-1 font-semibold hover:text-gray-600'>{name}</p>
					</Link>

					{/* show brand of product */}
					<div className='my-1 flex h-5 w-auto items-center justify-start rounded-md bg-sky-100 p-1'>
						<p className='mr-2 text-xs font-semibold'>Brand:</p>
						<div className='flex h-5 w-auto items-center justify-center text-sm'>
							<img src={brandLogo} alt={name} className='mr-1 h-full' />
						</div>
					</div>

					{/* show price and off price of product */}
					<section className='my-1 flex items-center'>
						<p className='bg-gray-20 mr-2 rounded-md bg-gray-200 px-1.5 text-sm text-gray-400 line-through'>
							$ {price}
						</p>
						<p className='rounded-md bg-sky-200 px-1.5 text-sm'>$ {offPrice}</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProductCardItem;
