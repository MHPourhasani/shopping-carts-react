import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useCard, useCardActions } from '../../Providers/CardProvider';
import empty_cart from '../../asset/images/empty-cart.png';

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Carts = () => {
	const [open, setOpen] = useState(true);

	const { card, total } = useCard();
	const dispatch = useCardActions();

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

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
											<div className='flex items-center justify-between'>
												<Dialog.Title className='text-lg font-medium text-gray-900'>
													Shopping cart
												</Dialog.Title>
												<button
													className='text-gray-400 hover:text-gray-500'
													onClick={() => setOpen(false)}>
													<XMarkIcon
														className='h-6 w-6'
														aria-hidden='true'
													/>
												</button>
											</div>

											{card.length ? (
												<section className='flex-1'>
													<div className='mt-2 flow-root'>
														<ul className='divide-y divide-gray-200'>
															{card.map((product) => (
																<li
																	key={product.id}
																	className='flex py-6 hover:scale-105 hover:opacity-90'>
																	{/* image of product and pass product data */}
																	<Link
																		to={`../../products/${product.name}`}
																		relative='path'
																		state={{
																			product: product,
																		}}
																		onClick={() =>
																			setOpen(false)
																		}
																		className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
																		<img
																			src={product.images[0]}
																			alt={product.name}
																			className='h-full w-full object-cover object-center'
																		/>
																	</Link>

																	<div className='ml-4 flex flex-1 flex-col'>
																		<div className='flex justify-between text-gray-900'>
																			{/* name of product and pass product data */}
																			<Link
																				to={`../../products/${product.name}`}
																				relative='path'
																				state={{
																					product:
																						product,
																				}}
																				className='text-base font-semibold'>
																				{product.name}
																			</Link>

																			{/* show price and off price of product */}
																			<div>
																				<p className='mb-1 rounded-sm bg-sky-400 px-1 text-base text-white'>
																					${' '}
																					{
																						product.offPrice
																					}
																				</p>

																				<p className='rounded-sm bg-gray-300 px-1 text-sm line-through'>
																					${' '}
																					{product.price}
																				</p>
																			</div>
																		</div>

																		<div className='flex flex-1 items-end justify-start gap-x-1'>
																			{/* decrease product btn */}
																			<button
																				onClick={() =>
																					decProductHandler(
																						product
																					)
																				}
																				className='flex h-6 w-6 items-center justify-center rounded-md bg-red-50 text-lg font-semibold text-red-600'>
																				-
																			</button>

																			{/* product quantity btn */}
																			<button className='flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-sm'>
																				{product.quantity}
																			</button>

																			{/* increase products btn */}
																			<button
																				onClick={() =>
																					addProductHandler(
																						product
																					)
																				}
																				className='flex h-6 w-6 items-center justify-center rounded-md bg-green-100 text-lg font-semibold text-green-600'>
																				+
																			</button>
																		</div>
																	</div>
																</li>
															))}
														</ul>
													</div>
												</section>
											) : (
												<section className='flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center'>
													<img
														src={empty_cart}
														alt='empty cart image'
														loading='lazy'
														aria-hidden
														className='md:w-11/12 xl:max-w-3xl'
													/>
													<button
														onClick={() => setOpen(false)}
														className='mt-7 flex w-11/12 items-center justify-center rounded-md bg-sky-400 py-2 font-sans text-white hover:bg-sky-500 lg:py-2.5 xl:max-w-3xl'>
														Go Shopping
													</button>
												</section>
											)}
										</div>

										{card.length ? (
											<div className='border-t border-gray-200 p-4 md:px-6'>
												{/* show total price and Checkout btn */}
												<div className='flex justify-between text-base font-medium text-gray-900'>
													<p>Total</p>
													<p>$ {total.toFixed(2)}</p>
												</div>
												<p className='mt-0.5 text-sm text-gray-500'>
													* Shipping and taxes calculated at checkout.
												</p>
												<div className='mt-6'>
													<Link
														to='/checkout'
														className='flex items-center justify-center rounded-md border border-transparent bg-sky-500 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-sky-600'>
														Checkout
													</Link>
												</div>
											</div>
										) : null}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Carts;
