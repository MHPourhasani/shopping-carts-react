import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
	const initialValues = {
		email: '',
		password: '',
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email address format').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true });

	return (
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
			<p className='my-2 text-lg font-bold'>Login</p>

			<form
				onSubmit={formik.handleSubmit}
				className='flex w-full flex-col items-center justify-center'>
				<div className='mb-2 flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
					<label htmlFor='email' className='my-1 ml-1'>
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
					<label htmlFor='password' className='my-1 ml-1'>
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
			</form>

			<button
				type='submit'
				disabled={!formik.isValid}
				className='my-3 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200 sm:w-5/12'>
				Login
			</button>

			<Link to='/signup' className='my-2 text-sm hover:text-sky-500'>
				You didn't signup?
			</Link>
		</section>
	);
};

export default Login;
