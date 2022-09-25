import Layout from '../Layout/Layout';
import { useCard, useCardActions } from '../Providers/CardProvider';
import { checkInCard } from '../utils/CheckInCard';

import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';

// Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
import { MdAddShoppingCart } from 'react-icons/md';
import { BsClipboardCheck } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';

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
			<section className='flex w-full flex-col items-center justify-center pt-16 pb-24 sm:pt-16 md:pt-20 lg:flex-row lg:items-start lg:gap-5'>
				{/* image slider with Swiper */}
				<div className='flex w-11/12 items-center justify-center md:w-10/12 lg:w-5/12 xl:max-w-lg'>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							640: { slidesPerView: 2, spaceBetween: 10 },
							1024: { slidesPerView: 1, spaceBetween: 0 },
						}}
						navigation={true}
						modules={[Pagination, Navigation]}>
						{product.images.map((image, index) => {
							return (
								<SwiperSlide className='flex items-center justify-start'>
									<img
										key={index}
										src={image}
										alt={image}
										className='h-full w-full rounded-md '
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				{/* product information section */}
				<div className='flex w-11/12 flex-col items-start justify-between md:w-10/12 lg:w-6/12 xl:max-w-xl'>
					{/* product name and prices */}
					<section className='my-2 flex w-full items-center justify-between sm:my-2'>
						{/* show name and brand of product */}
						<div>
							{/* product name */}
							<p className='mb-2 text-2xl font-bold md:mb-3 md:text-3xl lg:text-4xl'>
								{product.name}
							</p>
							{/* product brand logo */}
							<div className='flex w-auto items-center justify-start gap-x-2.5 rounded-md bg-sky-100 p-1'>
								<p className='text-xs font-semibold md:text-sm lg:text-base'>
									Brand:
								</p>
								<img
									src={product.brandLogo}
									alt={product.name}
									className='h-5 w-auto md:h-6'
								/>
							</div>
						</div>

						{/* show price and off price of product */}
						<div className='text-sm md:text-base xl:text-lg'>
							<p className='mb-1.5 rounded-md bg-sky-200 py-1 px-2 font-semibold'>
								$ {product.offPrice}
							</p>
							<p className='rounded-md bg-gray-200 px-2 py-1 text-gray-500 line-through'>
								$ {product.price}
							</p>
						</div>
					</section>

					{/* product sizes */}
					<section className='my-2 flex w-full flex-wrap items-center justify-start gap-1.5'>
						{product.sizes.map((size) => {
							return (
								<span
									key={size}
									className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-gray-200 shadow-sm hover:bg-gray-300 md:h-10 md:w-10 lg:h-11 lg:w-11'>
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

					{/* product services */}
					<div className='my-1 flex flex-wrap items-center justify-start gap-2 pb-12 text-sm sm:pb-14 md:pb-2'>
						{product.services.map((service) => {
							return (
								<p key={service} className='rounded-md bg-gray-200 px-2 py-1'>
									{service}
								</p>
							);
						})}
					</div>

					{/* checking the product in the shopping cart */}
					<section className='fixed bottom-20 my-2.5 w-11/12 md:static md:w-full'>
						{checkInCard(card, product) ? (
							<section className='flex w-full items-center justify-between gap-2'>
								{/* continue shopping btn */}
								<Link
									to='/'
									className='flex h-10 flex-auto cursor-pointer items-center justify-center rounded-md bg-gray-200 font-semibold text-gray-900 hover:bg-gray-300 sm:h-11 lg:h-12'>
									<HiOutlineShoppingCart className='mr-2 text-xl' />
									<p>Continue shopping</p>
								</Link>

								{/* go to checkout btn */}
								<Link
									to='/checkout'
									className='flex h-10 flex-auto cursor-pointer items-center justify-center rounded-md bg-sky-500 font-semibold text-white hover:bg-sky-600 sm:h-11 lg:h-12'>
									<BsClipboardCheck className='mr-2 text-xl' />
									<p>Go to Checkout</p>
								</Link>
							</section>
						) : (
							//  add product to cart btn
							<button
								type='submit'
								onClick={() => addProductHandler(product)}
								className='flex h-10 w-full items-center justify-center gap-2 rounded-md bg-sky-500 font-semibold text-white hover:bg-sky-600 sm:h-11 lg:h-12'>
								<MdAddShoppingCart className='text-xl' />
								<p>Add to Cart</p>
							</button>
						)}
					</section>
				</div>
			</section>
		</Layout>
	);
};

export default ProductDetailPage;
