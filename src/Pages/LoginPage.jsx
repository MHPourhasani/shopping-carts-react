import Login from '../components/Login/Login';
import Layout from '../Layout/Layout';

const LoginPage = () => {
	return (
		<Layout>
			<section className='w-full pb-16'>
				<Login />
			</section>
		</Layout>
	);
};

export default LoginPage;
