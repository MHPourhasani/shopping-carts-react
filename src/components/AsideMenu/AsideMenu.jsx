import { NavLink } from 'react-router-dom';

const AsideMenu = () => {
	return (
		<aside className='mt-14 hidden rounded-2xl p-2.5 shadow-lg lg:flex lg:h-80 lg:w-2/12 lg:flex-col lg:gap-2 lg:bg-white'>
			<span className='font-semibold'>Categories</span>
			<div>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'text-gray-600' : 'hover:text-sky-500'
					}>
					<p>Male</p>
				</NavLink>

				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'text-gray-600' : 'hover:text-sky-500'
					}>
					<p>Famale</p>
				</NavLink>
			</div>
		</aside>
	);
};

export default AsideMenu;
