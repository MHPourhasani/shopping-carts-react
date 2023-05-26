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
	const { name, price, images, offPrice } = product;

	// add products handler function
	const addProductHandler = (product) => {
		toast.success(`${product.name} added to carts`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<section className='flex w-full flex-col items-start justify-between rounded-2xl bg-white shadow-xl shadow-gray-200 hover:shadow-2xl'>
			{/* image of product and pass product data */}
			<Link
				to={`products/${name}`}
				state={{ product: product }}
				className='aspect-square h-auto w-full'>
				<img
					src={images[0]}
					alt={name}
					loading='lazy'
					className='h-auto w-full rounded-t-2xl rounded-b-3xl'
				/>
			</Link>

			<section className='relative w-full p-1.5 md:px-2.5'>
				{/* show name and price and offPrice product section */}
				<section className='flex h-full flex-col items-start justify-between gap-1'>
					{/* name of product and pass product data */}
					<Link to={`products/${name}`} state={{ product: product }}>
						<p className='text-lg font-semibold hover:text-gray-600 md:text-xl lg:text-lg'>
							{name}
						</p>
					</Link>

					{/* show price and off price of product */}
					<section className='my-1 flex items-end justify-between gap-3 text-sm'>
						<span className='w-14'>
							<p className='rounded-md bg-gray-200 py-1 px-1.5 text-gray-400 line-through'>
								$ {price}
							</p>
							<p className='font-medium'>$ {offPrice}</p>
						</span>

						{/* add product to cart btn */}
						<button
							onClick={() => addProductHandler(product)}
							className='flex w-auto flex-1 items-center justify-center font-medium'>
							{checkInCard(card, product) ? (
								<span className='flex h-9 items-center gap-1.5 rounded-md bg-sky-500 px-3 text-white'>
									<BsCartCheckFill className='h-auto lg:w-5' />
									<p>Added to cart</p>
								</span>
							) : (
								<span className='flex h-9 items-center gap-1.5 rounded-md border-1 px-3 transition-all delay-75 ease-in-out hover:bg-sky-500 hover:text-white'>
									<BsCartPlus className='h-auto lg:w-5' />
									<p>Add To Cart</p>
								</span>
							)}
						</button>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProductCardItem;
