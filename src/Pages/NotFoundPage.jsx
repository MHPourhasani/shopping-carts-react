import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

// image
import not_found_page from '../asset/images/not-found-page.png';

const NotFoundPage = () => {
	return (
		<Layout>
			<section className='flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden md:py-20 lg:h-auto xl:mt-7'>
				<img
					src={not_found_page}
					alt='not found image'
					aria-hidden
					className='w-full xl:w-10/12'
				/>

				<Link
					to='/'
					className='flex w-10/12 items-center justify-center rounded-md bg-sky-400 py-2 text-white hover:bg-sky-500 sm:py-2.5 sm:text-lg md:py-3 md:text-xl xl:max-w-4xl'>
					Go To Home
				</Link>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
