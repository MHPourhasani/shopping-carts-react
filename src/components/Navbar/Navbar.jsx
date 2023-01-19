import { NavLink } from 'react-router-dom';
import { useCard } from '../../Providers/CardProvider';

// icons
import { BsBagDash, BsCartDash } from 'react-icons/bs';
import { IoBagRemoveOutline } from 'react-icons/io';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';

const Navbar = () => {
	const { card } = useCard();

	return (
		<nav className='fixed bottom-0 flex w-full items-center justify-between rounded-t-2xl border-t-1 border-gray-300 bg-white px-5 pb-1.5 pt-3 font-medium shadow-navBar md:hidden'>
			{/* Carts icon */}
			<NavLink
				to='/carts'
				className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-400')}>
				<span className='relative flex flex-col items-center justify-center gap-0.5'>
					<BsCartDash className='h-auto w-7' />
					<p className='text-sm'>Carts</p>
					<span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs'>
						{card.length}
					</span>
				</span>
			</NavLink>

			{/* Home icon */}
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? 'text-sky-500' : ' text-gray-400')}>
				<span className='flex flex-col items-center justify-center gap-0.5'>
					<RiHomeSmile2Line className='h-auto w-7' />
					<p className='text-sm'>Home</p>
				</span>
			</NavLink>

			{/* Setting icon */}
			<NavLink
				to='/setting'
				className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-400')}>
				<span className='flex flex-col items-center justify-center gap-0.5'>
					<AiOutlineSetting className='h-auto w-7' />
					<p className='text-sm'>Setting</p>
				</span>
			</NavLink>
		</nav>
	);
};

export default Navbar;
