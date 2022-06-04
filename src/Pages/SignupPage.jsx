import Layout from '../Layout/Layout';
import Signup from '../components/Signup/Signup';

const SignupPage = () => {
	return (
		<Layout>
			<section className='w-full pb-16'>
				<Signup />
			</section>
		</Layout>
	);
};

export default SignupPage;
