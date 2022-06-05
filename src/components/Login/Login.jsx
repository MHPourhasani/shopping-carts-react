import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
			<p className='my-2 text-lg font-bold'>Login</p>

			<form className='flex w-full flex-col items-center justify-center'>
				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1'>User Name</label>
					<input
						type='text'
						placeholder=''
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1'>Password</label>
					<input
						type='password'
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>
			</form>

			<Link to='/signup' className='my-2 text-sm hover:text-sky-500'>
				You didn't signup?
			</Link>
		</section>
	);
};

export default Login;