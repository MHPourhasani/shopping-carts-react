import { NavLink } from 'react-router-dom';
import { useCard } from '../../Providers/CardProvider';

// icons
import { AiOutlineSetting } from 'react-icons/ai';
import { RiHomeLine, RiHomeSmile2Line } from 'react-icons/ri';
import { BsBagDash } from 'react-icons/bs';

const Navbar = () => {
	const { card } = useCard();

	return (
		<nav className='fixed bottom-0 flex h-16 w-11/12 -translate-y-4 items-center justify-between rounded-md border-2 border-sky-500 bg-white px-1.5 font-semibold shadow-md md:hidden'>
			{/* Carts icon */}
			<NavLink
				to='/carts'
				className={({ isActive }) =>
					isActive
						? 'relative flex h-12 items-center justify-center gap-x-1 rounded-md bg-sky-500 px-3 text-white sm:py-1.5 sm:px-3'
						: 'relative flex items-center justify-center px-2 py-1.5 text-gray-600'
				}>
				{({ isActive }) => (
					<>
						<BsBagDash className='h-auto w-7' />
						{isActive ? <p className='text-sm'>Carts</p> : null}
						<span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-xs'>
							{card.length}
						</span>
					</>
				)}
			</NavLink>

			{/* Home icon */}
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive
						? 'flex h-12 items-center justify-center gap-x-1 rounded-md bg-sky-500 px-3 text-white sm:py-1.5 sm:px-3'
						: 'flex items-center justify-center text-gray-600'
				}>
				{({ isActive }) => (
					<>
						{isActive ? (
							<RiHomeSmile2Line className='h-auto w-8' />
						) : (
							<RiHomeLine className='h-auto w-8' />
						)}
						{isActive ? <p className='text-sm'>Home</p> : null}
					</>
				)}
			</NavLink>

			{/* Setting icon */}
			<NavLink
				to='/setting'
				className={({ isActive }) =>
					isActive
						? 'flex h-12 items-center justify-center gap-x-1 rounded-md bg-sky-500 px-3 text-white sm:py-1.5 sm:px-3'
						: 'flex items-center justify-center text-gray-600'
				}>
				{({ isActive }) => (
					<>
						<AiOutlineSetting className='h-auto w-7' />
						{isActive ? <p className='text-sm'>Setting</p> : null}
					</>
				)}
			</NavLink>
		</nav>
	);
};

export default Navbar;
