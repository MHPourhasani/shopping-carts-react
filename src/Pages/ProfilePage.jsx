import Layout from '../Layout/Layout';
import { useAuth } from '../Providers/AuthProvider';

const ProfilePage = () => {
	const userData = useAuth();

	return (
		<Layout>
			<section className='flex min-h-screen w-full flex-col items-start justify-center bg-sky-100 px-8 sm:px-32 md:px-52 lg:px-80 xl:px-96'>
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

				<button className='my-2 w-full rounded-md border-1 border-red-500 py-1 text-red-500 hover:bg-red-50'>
					Logout
				</button>
			</section>
		</Layout>
	);
};

export default ProfilePage;
