import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';

import { FiUser, FiUserCheck } from 'react-icons/fi';

const Header = () => {
	const userData = useAuth();

	return (
		<header className='fixed top-0 right-0 z-10 flex h-14 w-full items-center justify-between bg-sky-500 px-5 text-white sm:h-14 lg:justify-around lg:text-lg'>
			<Link to='/' className='text-lg font-bold'>
				<p>MHP Shop</p>
			</Link>

			<Link
				to={userData ? '/profile' : '/login'}
				className='flex items-center justify-center rounded-full p-1 text-2xl hover:bg-gray-100 hover:text-black'>
				{userData ? <FiUserCheck /> : <FiUser />}
			</Link>
		</header>
	);
};

export default Header;
