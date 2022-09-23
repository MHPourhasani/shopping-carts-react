import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useCard, useCardActions } from '../Providers/CardProvider';

// components
import Layout from '../Layout/Layout';

// images
import empty_cart from '../asset/images/empty-cart.png';

// icons
import { BsTrash } from 'react-icons/bs';

const CartsPage = () => {
	const { card, total } = useCard();
	const dispatch = useCardActions();

	// cart is empty ==> show empty cart image and link go to shopping
	if (!card.length) {
		return (
			<Layout>
				<main className='flex min-h-screen w-full flex-col items-center justify-center'>
					<img
						src={empty_cart}
						alt='empty cart image'
						loading='lazy'
						aria-hidden
						className='w-11/12 md:w-9/12 lg:w-7/12 xl:max-w-3xl'
					/>
					<Link
						to='/'
						className='mt-10 flex w-11/12 items-center justify-center rounded-md bg-sky-400 py-2 font-sans text-white md:w-9/12 lg:w-7/12 lg:py-2.5 xl:max-w-3xl'>
						Go to Shopping
					</Link>
				</main>
			</Layout>
		);
	}

	// decrease product handler
	const decProductHandler = (product) => {
		if (product.quantity === 1) {
			toast.error(`${product.name} deleted`);
		} else {
			toast.warn(`${product.name} decreased`);
		}
		dispatch({ type: 'DECREASE_FROM_CARD', payload: product });
	};

	// increase product handler
	const addProductHandler = (product) => {
		toast.success(`${product.name} increased`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	// calcute products original total prices
	const originalTotalPrice = card.length
		? card.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	return (
		<Layout>
			<section
				className={`flex w-full flex-col items-center justify-between bg-white pt-12 pb-20 md:flex-row md:gap-5 ${
					card.length > 4 ? 'h-auto' : 'h-screen'
				}`}>
				<section className='mt-4 w-11/12 gap-y-4 md:w-5/12'>
					<span className='text-2xl font-bold text-gray-900'>Shopping Cart</span>

					<ul className='border-b border-gray-200'>
						{card.map((product) => (
							<li
								key={product.id}
								className='flex py-4 hover:scale-105 hover:opacity-90'>
								{/* image of product and pass product data */}
								<Link
									to={`../../products/${product.name}`}
									relative='path'
									state={{
										product: product,
									}}
									className='h-24 w-24 rounded-md'>
									<img
										src={product.images[0]}
										alt={product.name}
										className='h-full w-full object-cover object-center'
									/>
								</Link>

								<div className='ml-4 flex flex-1 flex-col'>
									<div className='flex justify-between text-gray-900 hover:text-gray-700'>
										{/* name of product and pass product data */}
										<Link
											to={`../../products/${product.name}`}
											relative='path'
											state={{
												product: product,
											}}
											className='text-base font-semibold'>
											{product.name}
										</Link>

										{/* show price and off price of product */}
										<div>
											<p className='mb-1 rounded-sm bg-sky-400 px-1 text-base text-white'>
												$ {product.offPrice * product.quantity}
											</p>

											<p className='rounded-sm bg-gray-300 px-1 text-sm line-through'>
												$ {product.price * product.quantity}
											</p>
										</div>
									</div>

									<div className='flex flex-1 items-end justify-start gap-x-1'>
										{/* decrease product btn */}
										<button
											onClick={() => decProductHandler(product)}
											className='flex h-6 w-6 items-center justify-center rounded-md bg-red-50 text-lg font-semibold text-red-600'>
											{product.quantity === 1 ? <BsTrash /> : '-'}
										</button>

										{/* product quantity btn */}
										<button className='flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-sm'>
											{product.quantity}
										</button>

										{/* increase product btn */}
										<button
											onClick={() => addProductHandler(product)}
											className='flex h-6 w-6 items-center justify-center rounded-md bg-green-100 text-lg font-semibold text-green-600'>
											+
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</section>

				{/* show total price and Checkout btn */}
				<div className='w-11/12 items-end border-t border-gray-200 py-3 md:w-3/12 md:border-l md:border-t-0 md:pl-4'>
					<div className='flex justify-between text-base text-gray-900'>
						<p>Original Total Price</p>
						<p>$ {originalTotalPrice.toFixed(2)}</p>
					</div>
					<div className='my-2 flex justify-between text-base text-gray-900'>
						<p>Off Price</p>
						<p>$ {(originalTotalPrice - total).toFixed(2)}</p>
					</div>
					<div className='flex justify-between rounded-md bg-sky-200 p-1 text-base font-semibold text-gray-900'>
						<p>Total Price</p>
						<p>$ {total.toFixed(2)}</p>
					</div>
					<p className='mt-1 text-sm text-gray-500'>
						* Shipping and taxes calculated at checkout.
					</p>
					<Link
						to='/login?redirect=checkout'
						className='mt-6 flex items-center justify-center rounded-md border border-transparent bg-sky-500 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-sky-600'>
						Checkout
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default CartsPage;
