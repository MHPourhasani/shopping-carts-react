/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCard, useCardActions } from '../Providers/CardProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Layout from '../Layout/Layout';
import empty_cart from '../asset/image/empty_cart.png';

import { BsTrash } from 'react-icons/bs';

const CardsPage = () => {
	const { card, total } = useCard();
	const dispatch = useCardActions();

	if (!card.length) {
		return (
			<Layout>
				<main className='flex min-h-screen w-full flex-col items-center justify-center'>
					<img
						src={empty_cart}
						alt='empty cart image'
						loading='lazy'
						className='w-11/12 md:w-9/12 lg:w-7/12 xl:max-w-3xl'
					/>
					<Link
						to='/'
						className='mt-7 flex w-11/12 items-center justify-center rounded-md bg-sky-400 py-2 font-sans text-white md:w-9/12 lg:w-7/12 lg:py-2.5 xl:max-w-3xl'>
						Go to Shopping
					</Link>
				</main>
			</Layout>
		);
	}

	// increase products handler function
	const addProductHandler = (product) => {
		toast.success(`${product.name} increased`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	// decrease products handler function
	const decProductHandler = (product) => {
		if (product.quantity === 1) {
			toast.error(`${product.name} deleted`);
		} else {
			toast.warn(`${product.name} decreased`);
		}
		dispatch({ type: 'DECREASE_FROM_CARD', payload: product });
	};

	return (
		<Layout>
			<main className='mt-20 flex w-full flex-col items-center justify-center sm:flex-row sm:items-start'>
				<section className='my-1 w-11/12 rounded-md border-2 border-sky-500 p-3 drop-shadow-md sm:mr-2 sm:w-7/12 lg:w-6/12 xl:max-w-md'>
					<p className='text-sm font-bold'>Your Products</p>

					{card.map((item) => (
						<section
							key={item.id}
							className='my-2 flex items-center justify-between border-b-1 pb-4'>
							{/* pass product data */}
							<Link
								to={`/products/${item.name}`}
								state={{ product: item }}
								className='hover:opacity-75'>
								<img
									src={item.images[0]}
									alt={item.name}
									loading='lazy'
									className='h-20 w-20 rounded-md'
								/>
							</Link>

							<section className='my-1 flex flex-col items-start justify-center p-1.5 md:px-2.5'>
								{/* pass product data */}
								<Link to={`/products/${item.name}`} state={{ product: item }}>
									<p className='mb-1 font-semibold'>{item.name}</p>
								</Link>

								<div className='flex items-center'>
									<p className='mr-2 text-sm text-gray-400 line-through'>
										$ {item.price * item.quantity}
									</p>
									<p className='text-sm'>$ {item.offPrice * item.quantity}</p>
								</div>
							</section>

							<section className='flex items-center justify-center'>
								{/* decrease product btn */}
								<button
									onClick={() => decProductHandler(item)}
									className='mr-1 flex h-5 w-5 items-center justify-center rounded-md bg-red-50 font-semibold text-red-600'>
									{item.quantity === 1 ? <BsTrash /> : '-'}
								</button>

								{/* products quantity btn */}
								<button className='mx-1 flex h-5 w-5 items-center justify-center rounded-md bg-gray-100'>
									{item.quantity}
								</button>

								{/* increase products btn */}
								<button
									onClick={() => addProductHandler(item)}
									className='ml-1 flex h-5 w-5 items-center justify-center rounded-md bg-green-100 font-semibold text-green-600'>
									+
								</button>
							</section>
						</section>
					))}
				</section>

				<CardSummary />
			</main>
		</Layout>
	);
};

export default CardsPage;

const CardSummary = () => {
	const { card, total } = useCard();

	const originalTotalPrice = card.length
		? card.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	return (
		<section className='mt-1 mb-16 w-11/12 rounded-md border-2 border-sky-500 p-3 drop-shadow-md sm:w-4/12 md:ml-2 lg:w-4/12'>
			<p className='text-sm font-bold'>Card Summary</p>

			<section>
				<div className='my-2 flex items-center justify-between text-sm'>
					<p>Total Price</p>
					<p className='font-semibold'>$ {originalTotalPrice}</p>
				</div>

				<div className='my-2 flex items-center justify-between border-b-1 border-gray-400 pb-3 text-xs'>
					<p>Off Price</p>
					<p className='font-semibold'>$ {originalTotalPrice - total}</p>
				</div>

				<div className='my-2 flex items-center justify-between text-sm font-semibold'>
					<p className=''>Net Price</p>
					<p className=''>$ {total}</p>
				</div>
			</section>

			<Link to='/signup?redirect=checkout'>
				<button
					type='submit'
					className='mt-2 w-full rounded-md bg-sky-400 py-1.5 text-sm font-semibold text-white'>
					Checkout
				</button>
			</Link>
		</section>
	);
};
