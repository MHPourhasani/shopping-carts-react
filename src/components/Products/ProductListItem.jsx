import { useCardActions } from '../../Providers/CardProvider';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductListItem = ({ product }) => {
	const dispatch = useCardActions();
	const { name, price, image, offPrice } = product;

	const addProductHandler = (product) => {
		dispatch({ type: 'ADD_TO_CARD', payload: product });
	};

	return (
		<section className='m-1 flex w-11/12 items-center justify-between rounded-md border-1 px-2 py-1 hover:border-sky-500 hover:drop-shadow-xl sm:m-2 sm:w-10/12 md:w-7/12 lg:w-1/2'>
			<Link to='/'>
				<img src={image} alt={name} loading='lazy' className=' h-20 w-20 rounded-md' />
			</Link>

			<section className='my-1 flex flex-col items-start justify-center'>
				<section className=' w-full p-1.5 md:px-2.5'>
					<Link to='/'>
						<p className='mb-1 font-semibold'>{name}</p>
					</Link>

					<div className='flex items-center'>
						<p className='mr-2 text-sm text-gray-400 line-through'>$ {price}</p>
						<p className='text-sm'>$ {offPrice}</p>
					</div>
				</section>
			</section>

			<button
				onClick={() => addProductHandler(product)}
				className='flex h-7 w-7 items-center justify-center rounded-md bg-sky-400 text-lg text-white hover:bg-sky-500'>
				<MdAddShoppingCart />
			</button>
		</section>
	);
};

export default ProductListItem;
