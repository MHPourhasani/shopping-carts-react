import Layout from '../Layout/Layout';
import { useAuth } from '../Providers/AuthProvider';

const ProfilePage = () => {
	const userData = useAuth();

	return (
		<Layout>
			<section className='mt-14 flex w-full flex-col items-start justify-center bg-sky-100 p-8 sm:mt-16'>
				<div className='my-1'>
					<span className='font-semibold'>Name: </span>
					<span className='font-medium'>{userData.name}</span>
				</div>

				<div className='my-1'>
					<span className='font-semibold'>Phone number: </span>
					<span className='font-medium'>{userData.phoneNumber}</span>
				</div>

				<div className='my-1'>
					<span className='font-semibold'>Email: </span>
					<span className='font-medium'>{userData.email}</span>
				</div>

				<button className='my-2 w-full rounded-md border-1 text-red-500 border-red-500 py-1 hover:bg-red-50'>
					Delete My Account
				</button>
			</section>
		</Layout>
	);
};

export default ProfilePage;
