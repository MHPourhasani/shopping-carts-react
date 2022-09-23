import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import { useCard } from '../../Providers/CardProvider';

// icons
import { FiUser, FiUserCheck } from 'react-icons/fi';
import { BsBagDash } from 'react-icons/bs';

// components
import Carts from '../Carts/Carts';

const Header = () => {
	const [cartsOpen, setCartsOpen] = useState(false);

	const { card } = useCard();
	const userData = useAuth();

	return (
		<header className='fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-sky-500 px-5 text-white lg:h-16 lg:px-20 lg:text-lg'>
			<div className='flex items-center gap-x-20'>
				<Link to='/' className='text-xl font-bold md:text-2xl'>
					<p>MHP Shop</p>
				</Link>

				<div className='hidden items-center gap-x-10 md:flex'>
					<NavLink
						to='/products/male'
						className={({ isActive }) =>
							isActive ? 'animate-bounce border-b-1' : 'hover:text-gray-100'
						}>
						<p>Male</p>
					</NavLink>

					<NavLink
						to='/products/famale'
						className={({ isActive }) =>
							isActive ? 'animate-bounce border-b-1' : 'hover:text-gray-100'
						}>
						<p>Famale</p>
					</NavLink>
				</div>
			</div>

			<div className='flex items-center gap-x-5'>
				<Link
					to={userData ? '/profile' : '/login'}
					className='flex items-center justify-center rounded-lg p-1 text-2xl hover:bg-gray-100 hover:text-black'>
					{userData ? (
						<FiUserCheck className='h-auto lg:w-7' />
					) : (
						<FiUser className='h-auto lg:w-7' />
					)}
				</Link>

				<button
					onClick={() => setCartsOpen(!cartsOpen)}
					className='relative hidden items-center justify-center rounded-lg p-1 text-2xl hover:bg-gray-100 hover:text-black md:flex'>
					<BsBagDash className='h-auto lg:w-7' />
					<span className='absolute top-0 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-xs '>
						{card.length}
					</span>
				</button>
			</div>

			{cartsOpen ? <Carts /> : ''}
		</header>
	);
};

export default Header;
