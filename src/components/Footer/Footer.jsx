// icons
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsArrowUpSquare } from 'react-icons/bs';
import UpIcon from '../../asset/svg/Up';

const Footer = () => {
	// goToTop function to go to the top of the page
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className='mt-5 flex h-48 w-full flex-col items-center justify-start gap-4 border-1 bg-white px-2 py-3 sm:h-36 sm:flex-row sm:items-start sm:justify-between sm:p-5 md:h-auto md:items-center'>
			{/* copyright section */}
			<span className='flex flex-col items-center gap-1 sm:flex-row'>
				<AiOutlineCopyrightCircle className='hidden h-auto w-5 text-gray-400 sm:block' />
				<p className='text-sm text-gray-400'>Designed and developed by</p>
				<a
					href='https://mh-pourhasani.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='font-semibold text-gray-500 hover:text-gray-600'>
					Mohammad Hasan Pourhasani
				</a>
			</span>

			{/* go to top btn */}
			<UpIcon
				onClick={() => goToTop()}
				className='h-auto w-7 cursor-pointer stroke-slate-400 transition-all ease-in-out hover:stroke-sky-500 sm:w-7'
			/>
		</footer>
	);
};

export default Footer;
