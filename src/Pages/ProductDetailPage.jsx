import Layout from '../Layout/Layout';
import { useCard, useCardActions } from '../Providers/CardProvider';
import { checkInCard } from '../utils/CheckInCard';

import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneShopping } from 'react-icons/ai';

const ProductDetailPage = () => {
	const { state } = useLocation();
	const { product } = state;

	const { card } = useCard();
	const dispatch = useCardActions();

	// add products handler function
	const addProductHandler = (product) => {
		toast.success(`${product.name} added to carts`);
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<Layout>
			<section className='flex w-full flex-col items-center justify-center py-16 sm:pt-16 md:flex-row md:flex-wrap md:items-start md:pt-20'>
				{/* image slider */}
				<div className='flex w-11/12 items-center justify-center md:mr-3 md:w-5/12 xl:max-w-lg'>
					<Swiper
						slidesPerView={'auto'}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}>
						<SwiperSlide className='flex items-center justify-start overflow-x-scroll'>
							{product.images.map((image, index) => {
								return (
									<img
										key={index}
										src={image}
										alt={image}
										className='mx-1 h-auto w-52 rounded-md sm:w-60 md:w-[19rem] lg:w-[22rem]'
									/>
								);
							})}
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='flex w-11/12 flex-col items-start justify-between md:w-6/12 xl:max-w-xl'>
					{/* product name and price */}
					<section className='my-2 flex w-full items-center justify-between'>
						<div>
							<p className='mb-2 text-2xl font-bold lg:text-4xl'>{product.name}</p>
							<div className='flex h-5 w-auto items-center justify-start rounded-md bg-sky-100 p-1'>
								<p className='mr-2 text-xs font-semibold lg:text-base'>Brand:</p>
								<div className='flex h-5 w-auto items-center justify-center text-sm lg:text-base'>
									<img
										src={product.brandLogo}
										alt={product.name}
										className='mr-1 h-full'
									/>
								</div>
							</div>
						</div>

						<div>
							<p className='mb-1 rounded-md bg-sky-200 py-1 px-2 text-sm font-semibold sm:text-base lg:text-lg'>
								$ {product.offPrice}
							</p>
							<p className='rounded-md bg-gray-200 px-2 text-sm text-gray-500 line-through lg:text-lg'>
								$ {product.price}
							</p>
						</div>
					</section>

					{/* product size */}
					<section className='my-1 flex w-full items-center justify-start'>
						{product.sizes.map((size) => {
							return (
								<span
									key={size}
									className='mr-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-gray-200 shadow-sm hover:bg-gray-300 md:h-11 md:w-11'>
									{size}
								</span>
							);
						})}
					</section>

					{/* product decreption */}
					<div className='my-2 w-full text-sm font-light text-gray-600 md:text-base'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt
						optio maiores, aliquid numquam nam quibusdam quaerat! Ab, assumenda magni
						rem voluptate distinctio adipisci fugit repellat, dicta, voluptatibus
						nostrum deleniti.
					</div>

					<div className='my-1 flex flex-wrap items-center justify-start pb-12 text-sm sm:justify-center sm:pb-14 md:pb-2'>
						{product.services.map((service) => {
							return (
								<p
									key={service}
									className='md: m-1 rounded-md bg-gray-200 px-2 py-0.5'>
									{service}
								</p>
							);
						})}
					</div>

					{/* add product btn */}
					<button
						type='submit'
						onClick={() => addProductHandler(product)}
						className='fixed bottom-14 my-2 h-9 w-11/12 rounded-md bg-sky-400 text-white hover:bg-sky-500 sm:bottom-14 md:static md:h-10 md:w-full lg:h-11'>
						{checkInCard(card, product) ? (
							<Link
								to='/cards'
								className='flex items-center justify-center font-semibold'>
								<AiTwotoneShopping className='mr-2 text-xl' />
								<p>Go to your Cart</p>
							</Link>
						) : (
							<section className='flex items-center justify-center font-semibold'>
								<MdAddShoppingCart className='mr-2 text-xl' />
								<p> Add to Card</p>
							</section>
						)}
					</button>
				</div>
			</section>
		</Layout>
	);
};

export default ProductDetailPage;
