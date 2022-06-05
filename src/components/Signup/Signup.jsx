import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
			<p className='my-2 text-lg font-bold'>Sign Up</p>

			<form className='flex w-full flex-col items-center justify-center'>
				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1 mx-1'>Name</label>
					<input
						type='text'
						placeholder=''
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1 mx-1'>Phone</label>
					<input
						type='tel'
						placeholder='09xxxxxxxxx'
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1 mx-1'>Email</label>
					<input
						type='email'
						placeholder='yourEmail@gmail.com'
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1 mx-1'>Password</label>
					<input
						type='password'
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label className='my-1 mx-1'>Confirm Password</label>
					<input
						type='password'
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
				</div>
			</form>

			<button
				type='submit'
				className='my-2 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white sm:w-5/12'>
				Sign Up
			</button>

			<Link to='/login' className='my-2 text-sm hover:text-sky-500'>
				You did login?
			</Link>
		</section>
	);
};

export default Signup;