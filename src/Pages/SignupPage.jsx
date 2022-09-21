import Layout from '../Layout/Layout';
import Signup from '../components/Signup/Signup';

// images
import signup_image from '../asset/images/account-amico.png';

const SignupPage = () => {
	return (
		<Layout>
			<section className='mt-7 flex w-full flex-col items-center justify-center bg-white sm:mt-10 sm:flex-row xl:mt-6 xl:overflow-hidden'>
				<img
					src={signup_image}
					alt='signup image'
					aria-hidden
					className='h-auto w-11/12 sm:w-full sm:pl-3'
				/>
				<Signup />
			</section>
		</Layout>
	);
};

export default SignupPage;
