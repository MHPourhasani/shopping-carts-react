import { useCardActions, useCard } from '../../Providers/CardProvider';
import { MdAddShoppingCart, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { checkInCard } from '../../utils/CheckInCard';

const ProductListItem = ({ product }) => {
	const { card } = useCard();
	const dispatch = useCardActions();
	const { name, brandLogo, price, images, offPrice } = product;

	const addProductHandler = (product) => {
		toast.success(`${product.name} added to carts`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<section className='flex w-11/12 items-center justify-between rounded-md border-1 bg-white px-1.5 py-1 shadow-sm hover:scale-105 hover:border-sky-500 hover:drop-shadow-xl sm:w-8/12 md:w-6/12 lg:max-w-sm xl:max-w-md'>
			{/* image of product and pass product data */}
			<Link
				to={`products/${name}`}
				state={{ product: product }}
				className='h-24 w-24 hover:opacity-80 lg:h-24 lg:w-24'>
				<img
					src={images[0]}
					alt={name}
					loading='lazy'
					className='h-auto w-full rounded-md'
				/>
			</Link>

			{/* show name and price and offPrice product section */}
			<section className='my-1 flex flex-col items-start justify-center'>
				<section className=' w-full p-1.5 md:px-2.5'>
					{/* name of product and pass product data */}
					<Link to={`products/${name}`} state={{ product: product }}>
						<p className='mb-1 font-semibold hover:text-gray-600'>{name}</p>
					</Link>

					{/* show brand of product */}
					<div className='my-2 flex h-5 w-auto items-center justify-start gap-2 rounded-md bg-sky-100 px-1'>
						<p className='text-xs font-semibold'>Brand:</p>
						<div className='flex h-5 w-auto items-center justify-center text-sm'>
							<img src={brandLogo} alt={name} className='h-full' />
						</div>
					</div>

					{/* show price and off price of product */}
					<div className='flex items-center gap-2'>
						<p className='rounded-md bg-gray-200 px-1.5 text-sm text-gray-400 line-through'>
							$ {price}
						</p>
						<p className='rounded-md bg-sky-200 px-1.5 text-sm'>$ {offPrice}</p>
					</div>
				</section>
			</section>

			{/* add product to cart btn */}
			<button
				onClick={() => addProductHandler(product)}
				className='flex h-7 w-7 items-center justify-center rounded-md bg-sky-400 text-lg text-white hover:bg-sky-500 sm:h-8 sm:w-8 lg:h-9 lg:w-9'>
				{checkInCard(card, product) ? <MdShoppingCart /> : <MdAddShoppingCart />}
			</button>
		</section>
	);
};

export default ProductListItem;
