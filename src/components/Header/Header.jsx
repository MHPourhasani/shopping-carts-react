import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Providers
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
		<header className='fixed top-0 z-20 flex h-14 w-full items-center justify-between bg-sky-500 px-5 text-white md:h-16 lg:px-10 xl:px-14'>
			<div className='flex items-center md:gap-x-14 lg:gap-x-20'>
				<Link to='/' className='text-xl font-bold md:text-2xl'>
					<p>MHP Shop</p>
				</Link>

				{/* show menu items */}
				<div className='hidden items-center gap-x-8 md:flex lg:text-lg'>
					<NavLink
						to='/products/male'
						className={({ isActive }) =>
							isActive
								? 'animate-bounce border-b-1'
								: 'hover:border-b-1 hover:text-gray-100'
						}>
						<p>Male</p>
					</NavLink>

					<NavLink
						to='/products/famale'
						className={({ isActive }) =>
							isActive
								? 'animate-bounce border-b-1'
								: 'hover:border-b-1 hover:text-gray-100'
						}>
						<p>Famale</p>
					</NavLink>
				</div>
			</div>

			<div className='flex items-center gap-x-5'>
				{/* show signup or login btn */}
				<Link to={userData ? '/profile' : '/login'}>
					{userData ? (
						<span className='flex items-end gap-1 rounded-md p-1 hover:bg-gray-100 hover:text-black sm:bg-gray-50 sm:text-gray-900 sm:hover:bg-gray-100 sm:hover:text-black lg:text-lg'>
							<FiUserCheck className='h-auto text-2xl lg:w-7' />
							<p className='hidden sm:block sm:text-base'>{userData.name}</p>
						</span>
					) : (
						<span className='flex items-end gap-1 rounded-md p-1 hover:bg-gray-100 hover:text-black'>
							<FiUser className='h-auto text-2xl lg:w-7' />
							<p className='hidden sm:block sm:text-base'>Signup / Login</p>
						</span>
					)}
				</Link>

				{/* show carts btn */}
				<button
					onClick={() => setCartsOpen(!cartsOpen)}
					className='hidden md:relative md:flex md:items-center md:justify-center md:rounded-md md:p-1 md:text-2xl md:hover:bg-gray-100 md:hover:text-black'>
					<BsBagDash className='h-auto lg:w-7' />
					<span className='absolute -right-2.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-xs'>
						{card.length}
					</span>
				</button>
			</div>

			{cartsOpen ? <Carts /> : ''}
		</header>
	);
};

export default Header;
