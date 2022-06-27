import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
	const initialValues = {
		name: '',
		phoneNumber: '',
		email: '',
		password: '',
		passwordConfirm: '',
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		phoneNumber: Yup.string().required('Phone Number is required').min(11).nullable(),
		email: Yup.string().email('Invalid email address format').required('Email is required'),

		password: Yup.string()
			.min(8, 'Password must be 8 characters at minimum')
			.required('Password is required'),

		passwordConfirm: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
	});

	const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true });

	return (
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
			<p className='my-2 text-lg font-bold'>Sign Up</p>

			<form
				onSubmit={formik.handleSubmit}
				className='flex w-full flex-col items-center justify-center'>
				<div className='mb-2 flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='name' className='my-1 mx-1'>
						Name
					</label>
					<input
						id='name'
						type='text'
						name='name'
						placeholder='example: Mohammad Hasan Pourhasani'
						{...formik.getFieldProps('name')}
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
					{formik.errors.name && formik.touched.name && (
						<div className='ml-1 text-xs text-red-600'>{formik.errors.name}</div>
					)}
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='phoneNumber' className='my-1 mx-1'>
						Phone Number
					</label>
					<input
						id='phoneNumber'
						type='tel'
						name='phoneNumber'
						placeholder='09xxxxxxxxx'
						{...formik.getFieldProps('phoneNumber')}
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
					{formik.errors.phoneNumber && formik.touched.phoneNumber && (
						<div className='ml-1 text-xs text-red-600'>{formik.errors.phoneNumber}</div>
					)}
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='email' className='my-1 mx-1'>
						Email
					</label>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='yourEmail@gmail.com'
						{...formik.getFieldProps('email')}
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
					{formik.errors.email && formik.touched.email && (
						<div className='ml-1 text-xs text-red-600'>{formik.errors.email}</div>
					)}
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='password' className='my-1 mx-1'>
						Password
					</label>
					<input
						id='password'
						type='password'
						name='password'
						{...formik.getFieldProps('password')}
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
					{formik.errors.password && formik.touched.password && (
						<div className='ml-1 text-xs text-red-600'>{formik.errors.password}</div>
					)}
				</div>

				<div className='flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='passwordConfirm' className='my-1 mx-1'>
						Confirm Password
					</label>
					<input
						id='passwordConfirm'
						type='password'
						name='passwordConfirm'
						{...formik.getFieldProps('passwordConfirm')}
						className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
					/>
					{formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
						<div className='ml-1 text-xs text-red-600'>
							{formik.errors.passwordConfirm}
						</div>
					)}
				</div>
			</form>

			<button
				type='submit'
				disabled={!formik.isValid}
				className='my-2 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200 sm:w-5/12'>
				Sign Up
			</button>

			<Link to='/login' className='my-2 text-sm hover:text-sky-500'>
				You did login?
			</Link>
		</section>
	);
};

export default Signup;
