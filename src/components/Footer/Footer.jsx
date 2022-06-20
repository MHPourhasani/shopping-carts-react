import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useCard } from '../../Providers/CardProvider';

import {
	AiOutlineHome,
	AiFillHome,
	AiOutlineShopping,
	AiTwotoneShopping,
	AiOutlineSetting,
	AiTwotoneSetting,
} from 'react-icons/ai';

const Footer = () => {
	const [activeNav, setActiveNav] = useState('home');
	const { card } = useCard();

	return (
		<footer className='fixed bottom-0 right-0 flex h-14 w-full items-center justify-around rounded-t-lg bg-sky-500 font-semibold sm:h-14'>
			<NavLink
				to='/'
				onClick={() => setActiveNav('home')}
				className={({ isActive }) =>
					isActive
						? 'flex items-center justify-center rounded-md bg-sky-900 px-2 py-1.5 text-white sm:py-1.5 sm:px-3'
						: 'flex items-center justify-center opacity-60'
				}>
				{activeNav === 'home' ? <AiFillHome /> : <AiOutlineHome />}
				<p className='ml-1.5 text-sm'>Home</p>
			</NavLink>

			<NavLink
				to='/cards'
				onClick={() => setActiveNav('cartsPage')}
				className={({ isActive }) =>
					isActive
						? 'flex items-center justify-center rounded-md bg-sky-900 px-2 py-1.5 text-white sm:py-1.5 sm:px-3'
						: 'flex items-center justify-center opacity-60'
				}>
				<p className='absolute -top-1 -right-4 flex h-4 w-4 items-center justify-center rounded-full bg-sky-700 text-xs '>
					{card.length}
				</p>
				{activeNav === 'cartsPage' ? <AiTwotoneShopping /> : <AiOutlineShopping />}
				<p className='ml-1.5 text-sm'>Carts</p>
			</NavLink>

			<NavLink
				to='/setting'
				onClick={() => setActiveNav('setting')}
				className={({ isActive }) =>
					isActive
						? 'flex items-center justify-center rounded-md bg-sky-900 px-2 py-1.5 text-white sm:py-1.5 sm:px-3'
						: 'flex items-center justify-center opacity-60'
				}>
				{activeNav === 'setting' ? <AiTwotoneSetting /> : <AiOutlineSetting />}
				<p className='ml-1.5 text-sm'>Setting</p>
			</NavLink>
		</footer>
	);
};

export default Footer;
