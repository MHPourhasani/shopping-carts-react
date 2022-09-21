import Login from '../components/Login/Login';
import Layout from '../Layout/Layout';

// images
import login_image from '../asset/images/fingerprint-bro.png';

const LoginPage = () => {
	return (
		<Layout>
			<section className='mt-12 flex w-full flex-col items-center justify-center bg-white sm:mt-0 sm:flex-row xl:overflow-hidden'>
				<img
					src={login_image}
					alt='login image'
					aria-hidden
					className='h-auto w-11/12 sm:w-full sm:pl-3 md:scale-90 lg:scale-75 '
				/>
				<Login />
			</section>
		</Layout>
	);
};

export default LoginPage;
