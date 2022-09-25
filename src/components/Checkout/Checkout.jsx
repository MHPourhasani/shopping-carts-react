// Providers
import { useAuth } from '../../Providers/AuthProvider';
import { useCard, useCardActions } from '../../Providers/CardProvider';

// components
import LoginPage from '../../Pages/LoginPage';
import Layout from '../../Layout/Layout';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// icons
import { BiPlus, BiMinus } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

// images
import empty_cart from '../../asset/images/empty-cart.png';

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

	// calcute products original total prices
	const originalTotalPrice = card.length
		? card.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	if (!card.length) {
		return (
			<Layout>
				<main className='flex min-h-screen w-full flex-col items-center justify-center overflow-hidden lg:mt-5'>
					<img
						src={empty_cart}
						alt='empty cart image'
						loading='lazy'
						aria-hidden
						className='w-11/12 md:w-9/12 lg:w-8/12 xl:w-5/12'
					/>
					<Link
						to='/'
						className='mt-10 flex w-11/12 items-center justify-center rounded-md bg-sky-400 py-2.5 font-medium text-white md:w-9/12 md:py-3 md:text-lg lg:w-8/12 xl:w-5/12'>
						Go to Shopping
					</Link>
				</main>
			</Layout>
		);
	}

	return (
		<main className='flex w-full flex-col items-center justify-center pt-16 pb-24 lg:pt-20'>
			{auth ? (
				<section className='flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:items-start sm:gap-1'>
					{/* User Orders section */}
					<section className='w-11/12 rounded-lg border-2 border-sky-500 bg-white p-3 shadow-sm sm:mr-1 sm:w-6/12 md:w-7/12 lg:w-6/12 lg:p-5 xl:max-w-lg'>
						<p className='text-lg font-bold sm:text-base md:text-lg lg:text-xl'>
							Your Orders
						</p>

						{card &&
							card.map((cart) => {
								return (
									<div
										key={cart.id}
										className='flex w-full items-center justify-between border-b-1 py-4 shadow-sm hover:scale-105'>
										{/* image of product and pass product data */}
										<Link
											to={`/products/${cart.name}`}
											state={{ product: cart }}
											className='hover:opacity-90'>
											<img
												src={cart.images[0]}
												alt={cart.name}
												aria-hidden
												className='h-20 w-20 rounded-md md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32'
											/>
										</Link>

										{/* product name and prices */}
										<div className='flex flex-col justify-between'>
											{/* name of product and pass product data */}
											<Link
												to={`/products/${cart.name}`}
												state={{ product: cart }}
												className='mb-1 font-semibold lg:text-lg'>
												{cart.name}
											</Link>

											{/* show price and off price of product */}
											<div className='my-2 flex gap-x-2 text-sm lg:gap-x-3 lg:text-base'>
												<p className='rounded-md bg-sky-200 p-0.5 lg:px-1.5'>
													$ {cart.offPrice}
												</p>
												<p className='text-gray-400 line-through'>
													$ {cart.price}
												</p>
											</div>
										</div>

										<div className='flex items-center justify-center'>
											{/* decrease product btn */}
											<button
												onClick={() => decProductHandler(cart)}
												className='mr-1 flex h-6 w-6 items-center justify-center rounded-md bg-red-50 font-semibold text-red-600 shadow-sm hover:bg-red-100 lg:h-7 lg:w-7'>
												{cart.quantity === 1 ? <BsTrash /> : <BiMinus />}
											</button>

											{/* products quantity btn */}
											<span className='mx-1 flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 shadow-sm lg:h-7 lg:w-7'>
												{cart.quantity}
											</span>

											{/* increase products btn */}
											<button
												onClick={() => addProductHandler(cart)}
												className='ml-1 flex h-6 w-6 items-center justify-center rounded-md bg-green-100 font-semibold text-green-600 shadow-sm hover:bg-green-200 lg:h-7 lg:w-7'>
												<BiPlus />
											</button>
										</div>
									</div>
								);
							})}
					</section>

					{/* User Information and Cart Summary sections */}
					<section className='flex w-11/12 flex-col gap-y-2 rounded-lg border-2 border-sky-500 bg-white p-3 shadow-sm sm:ml-1 sm:w-5/12 md:w-4/12 xl:max-w-sm'>
						{/* User Information section */}
						<div className='flex flex-col gap-2.5 border-b-1 border-gray-400 pb-5'>
							<p className='text-lg font-bold sm:text-base md:text-lg lg:text-xl'>
								Your Information
							</p>

							{/* name of user */}
							<div className='flex items-center gap-x-2 text-sm lg:text-base'>
								<p className='font-semibold'>Name:</p>
								<p className='font-medium'>{auth.name}</p>
							</div>

							{/* phone number of user */}
							<div className='flex items-center gap-x-2 text-sm lg:text-base'>
								<p className='font-semibold'>Phone Number:</p>
								<p className='font-medium'>{auth.phoneNumber}</p>
							</div>

							{/* email of user */}
							<div className='flex items-center gap-x-2 text-sm lg:text-base'>
								<p className='font-semibold'>Email:</p>
								<p className='font-medium'>{auth.email}</p>
							</div>
						</div>

						{/* Cart Summary section */}
						<div className='my-1.5'>
							<p className='mb-2 text-lg font-bold sm:text-base md:text-lg lg:text-xl'>
								Cart Summary
							</p>

							{/* show original total price and off price and total Price */}
							<section className='flex flex-col gap-y-2.5'>
								<span className='flex items-center justify-between text-sm font-medium lg:text-base'>
									<p>Original Total Price</p>
									<p>$ {originalTotalPrice.toFixed(2)}</p>
								</span>

								<span className='flex items-center justify-between text-sm font-medium lg:text-base'>
									<p>Off Price</p>
									<p>$ {(originalTotalPrice - total).toFixed(2)}</p>
								</span>

								<span className='flex items-center justify-between text-sm font-semibold lg:text-base'>
									<p>Total Price</p>
									<p>$ {total.toFixed(2)}</p>
								</span>
							</section>

							{/* Payment btn */}
							<button className='mt-5 w-full rounded-md bg-sky-500 py-2 text-lg font-semibold text-white shadow-sm hover:bg-sky-600'>
								Payment
							</button>
						</div>
					</section>
				</section>
			) : (
				<LoginPage />
			)}
		</main>
	);
};

export default Checkout;
