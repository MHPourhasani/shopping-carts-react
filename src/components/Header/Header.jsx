import { Link } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';

const Header = () => {
	return (
		<header className='fixed top-0 right-0 z-10 flex h-12 w-full items-center justify-between bg-sky-500 px-5 text-white sm:h-14 lg:justify-around lg:text-lg'>
			<Link to='/' className='text-lg font-bold'>
				<p>MHP Shop</p>
			</Link>

			<Link
				to='/login'
				className='flex items-center justify-center rounded-full p-1 text-2xl hover:bg-gray-100 hover:text-black'>
				<FiUser />
			</Link>
		</header>
	);
};

export default Header;
