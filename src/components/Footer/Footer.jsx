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
						? 'relative flex items-center justify-center rounded-md bg-sky-900 px-2 py-1.5 text-white sm:py-1.5 sm:px-3'
						: 'relative flex items-center justify-center px-2 py-1.5 opacity-60'
				}>
				{activeNav === 'cartsPage' ? <AiTwotoneShopping /> : <AiOutlineShopping />}
				<p className='ml-1.5 text-sm'>Carts</p>
				<span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-xs '>
					{card.length}
				</span>
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
