import { useAuth } from '../../Providers/AuthProvider';
import { useCard, useCardActions } from '../../Providers/CardProvider';

import { BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import empty_cart from '../../asset/image/empty_cart.png';

const Checkout = () => {
	const { card, total } = useCard();
	const auth = useAuth();
	const dispatch = useCardActions();

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

	const originalTotalPrice = card.length
		? card.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	if (!card.length) {
		return (
			<main className='flex min-h-screen w-full flex-col items-center justify-center'>
				<img
					src={empty_cart}
					alt='empty cart'
					loading='lazy'
					className='w-11/12 md:w-9/12 lg:w-7/12 xl:mt-4'
				/>
				<Link
					to='/'
					className='mt-7 flex h-10 w-10/12 items-center justify-center rounded-md bg-sky-400 font-sans text-white lg:w-7/12'>
					Go to Shopping
				</Link>
			</main>
		);
	}

	return (
		<main className='my-16 flex w-full flex-col items-center justify-center sm:my-20'>
			{auth ? (
				<section className='flex w-full flex-col items-center justify-center sm:flex-row sm:items-start'>
					<section className='my-1.5 w-11/12 rounded-lg border-2 border-sky-500 bg-white p-3 shadow-sm sm:my-0 sm:mr-1 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:max-w-lg'>
						<p className='text-lg font-bold sm:text-base lg:text-lg'>Your Orders</p>

						{card &&
							card.map((cart) => {
								return (
									<section
										key={cart.id}
										className='bg-gray- my-2 flex w-full items-center justify-between rounded-md border-1 p-2 shadow-sm'>
										<Link
											to={`/products/${cart.name}`}
											state={{ product: cart }}
											className='hover:opacity-75'>
											<img
												src={cart.images[0]}
												alt={cart.name}
												aria-hidden
												className='h-14 w-14 rounded-md sm:h-16 sm:w-16 lg:h-20 lg:w-20'
											/>
										</Link>

										<div>
											<p className='mb-1 font-semibold'>{cart.name}</p>
											<p className='text-sm'>$ {cart.offPrice}</p>
										</div>

										<div className='flex items-center justify-center'>
											{/* decrease product btn */}
											<button
												onClick={() => decProductHandler(cart)}
												className='mr-1 flex h-6 w-6 items-center justify-center rounded-md bg-red-50 font-semibold text-red-600 shadow-md'>
												{cart.quantity === 1 ? <BsTrash /> : '-'}
											</button>

											{/* products quantity btn */}
											<span className='mx-1 flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 shadow-md'>
												{cart.quantity}
											</span>

											{/* increase products btn */}
											<button
												onClick={() => addProductHandler(cart)}
												className='ml-1 flex h-6 w-6 items-center justify-center rounded-md bg-green-100 font-semibold text-green-600 shadow-md'>
												+
											</button>
										</div>
									</section>
								);
							})}
					</section>

					<section className='my-1.5 w-11/12 rounded-lg border-2 border-sky-500 bg-white p-3 shadow-sm sm:my-0 sm:ml-1 sm:w-5/12 md:w-4/12 lg:w-64 xl:max-w-sm'>
						<div className='border-b-1 border-gray-400'>
							<p className='mb-2 text-lg font-bold sm:text-base lg:text-lg'>
								Your Information
							</p>

							<div className='my-1.5 flex items-center justify-start text-sm lg:text-base'>
								<p className='font-semibold'>Name:</p>
								<p className='ml-2 font-medium'>{auth.name}</p>
							</div>

							<div className='my-1.5 flex items-center justify-start text-sm lg:text-base'>
								<p className='font-semibold'>Phone Number:</p>
								<p className='ml-2 font-medium'>{auth.phoneNumber}</p>
							</div>

							<div className='my-1.5 flex items-center justify-start text-sm lg:text-base'>
								<p className='font-semibold'>Email:</p>
								<p className='ml-2 font-medium'>{auth.email}</p>
							</div>
						</div>

						<div className='my-1.5'>
							<p className='mb-2 text-lg font-bold sm:text-base lg:text-lg'>
								Cart Summary
							</p>

							<section>
								<div className='my-2 flex items-center justify-between text-sm'>
									<p className='font-semibold'>Total Price</p>
									<p className='font-medium'>$ {originalTotalPrice}</p>
								</div>

								<div className='my-2 flex items-center justify-between text-sm'>
									<p className='font-semibold'>Off Price</p>
									<p className='font-medium'>$ {originalTotalPrice - total}</p>
								</div>

								<div className='my-2 flex items-center justify-between text-sm'>
									<p className='font-semibold'>Net Price</p>
									<p className='font-medium'>$ {total}</p>
								</div>
							</section>

							<button className='mt-2 w-full rounded-md bg-sky-400 py-1.5 text-lg font-semibold text-white shadow-sm'>
								Pay
							</button>
						</div>
					</section>
				</section>
			) : (
				<section>
					<Link
						to='/login'
						className='flex h-10 w-10/12 items-center justify-center rounded-md'>
						Please login!
					</Link>
				</section>
			)}
		</main>
	);
};

export default Checkout;
