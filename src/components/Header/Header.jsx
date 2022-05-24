import { Link } from 'react-router-dom';

import { HiOutlineLogin } from 'react-icons/hi';

const Header = () => {
	return (
		<header className='flex h-11 w-full items-center justify-between bg-sky-500 px-3 sm:h-14 lg:justify-around lg:text-lg'>
			<Link to='/' className='text-lg font-bold text-white'>
				<p>MHP Shop</p>
			</Link>

			<section>
				<Link
					to='/login'
					className='flex items-center justify-center rounded-md border-1 px-2 py-1 text-sm'>
					<HiOutlineLogin className='mr-1 h-4 w-4' />
					<p>Login / Signup</p>
				</Link>
			</section>
		</header>
	);
};

export default Header;
