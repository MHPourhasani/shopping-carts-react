// icons
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsArrowUpSquare } from 'react-icons/bs';

const Footer = () => {
	// goToTop function to go to the top of the page
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className='mt-5 flex h-48 w-full flex-col items-center justify-start gap-4 bg-sky-500 px-2 py-3 sm:h-36 sm:flex-row sm:items-start sm:justify-between sm:p-5 md:fixed md:bottom-0 md:h-16 md:items-center xl:h-14'>
			{/* copyright section */}
			<section className='flex flex-col items-center gap-1 sm:flex-row'>
				<AiOutlineCopyrightCircle className='hidden h-auto w-5 text-gray-200 sm:block' />
				<p className='text-sm text-gray-200'>Designed and developed by</p>
				<a
					href='https://mh-pourhasani.vercel.app/'
					target='_blank'
					rel='noopener noreferrer'
					className='font-semibold text-white hover:text-sky-900'>
					Mohammad Hasan Pourhasani
				</a>
			</section>

			{/* go to top btn */}
			<BsArrowUpSquare
				onClick={() => goToTop()}
				className='h-auto w-7 cursor-pointer text-gray-300 hover:text-gray-50 sm:w-9'
			/>
		</footer>
	);
};

export default Footer;
