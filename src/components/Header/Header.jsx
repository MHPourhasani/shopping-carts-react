import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Providers
import { useAuth } from '../../Providers/AuthProvider';
import { useCard } from '../../Providers/CardProvider';

// icons
import UserIcon from '../../asset/svg/UserIcon.jsx';
import BagIcon from '../../asset/svg/BagIcon';
import Notification1 from '../../asset/svg/Notification1Icon';

// components
import Carts from '../Carts/Carts';
import SearchBarSection from '../SearchBarSection/SearchBarSection';

const Header = () => {
	const [cartsOpen, setCartsOpen] = useState(false);

	const { card } = useCard();
	const userData = useAuth();

	return (
		<header className='fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-white px-5 shadow-header md:h-16 lg:px-10 xl:px-14'>
			<div className='flex flex-1 items-center md:gap-x-14 lg:gap-x-20'>
				<Link to='/' className='text-xl font-bold text-sky-500 md:text-2xl'>
					<p>MHP Shop</p>
				</Link>

				{/* show menu items */}
				<div className='hidden items-center gap-x-8 text-gray-400 md:flex lg:text-lg'>
					<NavLink
						to='/products/male'
						className={({ isActive }) =>
							isActive ? 'text-gray-600' : 'hover:text-sky-500'
						}>
						<p>Male</p>
					</NavLink>

					<NavLink
						to='/products/famale'
						className={({ isActive }) =>
							isActive ? 'text-gray-600' : 'hover:text-sky-500'
						}>
						<p>Famale</p>
					</NavLink>
				</div>
			</div>

			<div className='flex flex-1 items-center justify-between gap-5'>
				<SearchBarSection className='hidden lg:block' />

				{/* show carts btn */}
				<button
					onClick={() => setCartsOpen(!cartsOpen)}
					className='hidden text-gray-400 md:relative md:flex md:items-center md:justify-center md:rounded-md md:p-1 md:text-2xl md:hover:bg-gray-100'>
					<BagIcon className='h-auto stroke-slate-600 text-2xl lg:w-6' />
					<span className='absolute -right-2 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs text-white'>
						{card.length}
					</span>
				</button>
				
				{/* show notification btn */}
				<Notification1 className='h-auto fill-slate-600 stroke-slate-600 text-2xl lg:w-7' />

				{/* show signup or login btn */}
				<NavLink
					to={userData ? '/profile' : '/login'}
					className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-400')}>
					{userData ? (
						<span className='flex flex-col items-center gap-1'>
							<span className='h-auto rounded-full bg-gray-200 lg:w-7 lg:h-7'>1</span>
						</span>
					) : (
						<span className='flex items-end gap-1 rounded-md p-1'>
							<UserIcon className='h-auto stroke-slate-600 text-2xl lg:w-6' />
						</span>
					)}
				</NavLink>
			</div>

			{cartsOpen ? <Carts /> : ''}
		</header>
	);
};

export default Header;
