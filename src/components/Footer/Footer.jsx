import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
	AiOutlineHome,
	AiFillHome,
	AiOutlineShopping,
	AiTwotoneShopping,
	AiOutlineSetting,
	AiTwotoneSetting,
} from 'react-icons/ai';

const Footer = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
		<footer className='fixed bottom-0 right-0 flex h-11 w-full items-center justify-around rounded-t-lg bg-sky-500'>
			<NavLink
				to='/'
				onClick={() => setActiveNav('home')}
				className={`flex items-center justify-center ${
					activeNav === 'home'
						? 'rounded-md bg-sky-900 px-2 py-0.5 text-white'
						: 'opacity-60'
				}`}>
				{activeNav === 'home' ? <AiFillHome /> : <AiOutlineHome />}
				<p className='ml-1.5 text-sm'>Home</p>
			</NavLink>

			<NavLink
				to='/cards'
				onClick={() => setActiveNav('cards')}
				className={`flex items-center justify-center ${
					activeNav === 'cards'
						? 'rounded-md bg-sky-900 px-2 py-0.5 text-white'
						: 'opacity-60'
				}`}>
				{activeNav === 'cards' ? <AiTwotoneShopping /> : <AiOutlineShopping />}
				<p className='ml-1.5 text-sm'>Cards</p>
			</NavLink>

			<NavLink
				to='/setting'
				onClick={() => setActiveNav('setting')}
				className={`flex items-center justify-center ${
					activeNav === 'setting'
						? 'rounded-md bg-sky-900 px-2 py-0.5 text-white'
						: 'opacity-60'
				}`}>
				{activeNav === 'setting' ? <AiTwotoneSetting /> : <AiOutlineSetting />}
				<p className='ml-1.5 text-sm'>Setting</p>
			</NavLink>
		</footer>
	);
};

export default Footer;
