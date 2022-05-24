import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
	const { name, price, image, offPrice } = product;

	return (
		<section className='m-1 flex w-5/12 flex-col items-start justify-between rounded-md border-1 hover:border-sky-500 hover:drop-shadow-xl sm:m-2 sm:w-3/12 lg:w-2/12'>
			<Link to='/'>
				<img src={image} alt={name} className=' h-auto w-full rounded-md' />
			</Link>

			<section className='relative w-full bg-gray-100 p-1.5 md:px-2.5'>
				<button className='absolute -top-4 right-2 flex h-7 w-7 items-center justify-center rounded-md bg-sky-400 text-lg text-white hover:bg-sky-500'>
					<MdAddShoppingCart />
				</button>

				<section className='my-1 flex flex-col items-start justify-center'>
					<Link>
						<p className='mb-1 font-semibold'>{name}</p>
					</Link>

					<section className='flex items-center'>
						<p className='mr-2 text-sm text-gray-400 line-through'>$ {price}</p>
						<p className='text-sm'>$ {offPrice}</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Products;
