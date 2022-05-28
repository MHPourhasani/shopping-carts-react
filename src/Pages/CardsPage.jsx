import Layout from '../Layout/Layout';
import { useCard } from '../Providers/CardProvider';
import { Link } from 'react-router-dom';

const CardsPage = () => {
	const { card } = useCard();

	return (
		<Layout>
			<main className='my-5 flex w-full flex-col items-center justify-center'>
				<section className='my-1 w-11/12 rounded-md border-2 border-sky-500 p-3 drop-shadow-md'>
					<p className='text-sm font-semibold'>Your Products</p>

					{card.length
						? card.map((item) => (
								<section>
									<Link to='/'>
										<img
											src={item.image}
											alt={item.name}
											loading='lazy'
											className=' h-20 w-20 rounded-md'
										/>
									</Link>

									<section className='my-1 flex flex-col items-start justify-center'>
										<section className=' w-full p-1.5 md:px-2.5'>
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
									</section>
								</section>
						  ))
						: ''}
				</section>

				<section className='my-1 w-11/12 rounded-md border-2 border-sky-500 p-3 drop-shadow-md'>
					<p className='text-sm font-semibold'>Card Summary</p>
				</section>
			</main>
		</Layout>
	);
};

export default CardsPage;
