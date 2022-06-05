/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCard, useCardActions } from '../Providers/CardProvider';
import { Link } from 'react-router-dom';

import Layout from '../Layout/Layout';
import empty_cart from '../asset/image/empty_cart.png';

import { BsTrash } from 'react-icons/bs';

const CardsPage = () => {
	const { card } = useCard();
	const dispatch = useCardActions();

	const addProductHandler = (product) => {
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	const decProductHandler = (product) => {
		dispatch({ type: 'DECREASE_FROM_CARD', payload: product });
	};

	if (!card) {
		return (
			<Layout>
				<main className='mt-16 flex flex-col items-center justify-center'>
					<img
						src={empty_cart}
						alt='empty cart image'
						loading='lazy'
						className='w-9/12 sm:mt-10 lg:w-1/2 xl:mt-4'
					/>
					<Link
						to='/'
						className='mt-7 rounded-md bg-sky-400 px-3 py-1.5 font-sans text-white'>
						Go to Shopping
					</Link>
				</main>
			</Layout>
		);
	}

	return (
		<Layout>
			<main className='mt-20 flex w-full flex-col items-center justify-center md:flex-row md:items-start'>
				<section className='my-1 w-11/12 rounded-md border-2 border-sky-500 p-3 drop-shadow-md md:mr-2 md:w-7/12 lg:w-5/12'>
					<p className='text-sm font-bold'>Your Products</p>

					{card.length
						? card.map((item) => (
								<section
									key={item.id}
									className='my-2 flex items-center justify-between border-b-1 pb-4'>
									<Link to='/'>
										<img
											src={item.image}
											alt={item.name}
											loading='lazy'
											className=' h-20 w-20 rounded-md'
										/>
									</Link>

									<section className='my-1 flex flex-col items-start justify-center p-1.5 md:px-2.5'>
										<Link to='/'>
											<p className='mb-1 font-semibold'>{item.name}</p>
										</Link>

										<div className='flex items-center'>
											<p className='mr-2 text-sm text-gray-400 line-through'>
												$ {item.price}
											</p>
											<p className='text-sm'>$ {item.offPrice}</p>
										</div>
									</section>

									<section className='flex items-center justify-center'>
										<button
											onClick={() => decProductHandler(item)}
											className='mr-1 flex h-5 w-5 items-center justify-center rounded-md bg-red-50 font-semibold text-red-600'>
											{item.quantity === 1 ? <BsTrash /> : '-'}
										</button>

										<button className='mx-1 flex h-5 w-5 items-center justify-center rounded-md bg-gray-100'>
											{item.quantity}
										</button>

										<button
											onClick={() => addProductHandler(item)}
											className='ml-1 flex h-5 w-5 items-center justify-center rounded-md bg-green-100 font-semibold text-green-600'>
											+
										</button>
									</section>
								</section>
						  ))
						: ''}
				</section>
			</main>
		</Layout>
	);
};

export default CardsPage;
