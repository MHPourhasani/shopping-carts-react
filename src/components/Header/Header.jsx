import { HiOutlineLogin } from 'react-icons/hi';

const Header = () => {
	return (
		<header className='flex w-full items-center justify-between'>
			<section>
				<p>Mhp Shop</p>
			</section>

			<section>
				<span className='flex items-center justify-center'>
					<HiOutlineLogin />
					<p>Login / </p>
					<p>Signup</p>
				</span>
			</section>
		</header>
	);
};

export default Header;
