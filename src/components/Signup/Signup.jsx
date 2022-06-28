import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';

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
				{/* Name input */}
				<Input
					lable='Name'
					name='name'
					placeholder='example: Mohammad Hasan Pourhasani'
					formik={formik}
				/>

				{/* Phone Number input */}
				<Input
					lable='Phone Number'
					type='tel'
					name='phoneNumber'
					placeholder='example: Mohammad Hasan Pourhasani'
					formik={formik}
				/>

				{/* Email input */}
				<Input
					lable='Email'
					name='email'
					placeholder='example: yourEmail@gmail.com'
					formik={formik}
				/>

				{/* Password input */}
				<Input lable='Password' type='password' name='password' formik={formik} />

				{/* Password Confirm input */}
				<Input
					lable='Confirm Password'
					type='password'
					name='passwordConfirm'
					formik={formik}
				/>

				<button
					type='submit'
					disabled={!formik.isValid}
					className='my-2 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200 sm:w-5/12'>
					Sign Up
				</button>
			</form>

			<Link to='/login' className='my-2 text-sm hover:text-sky-500'>
				You did login?
			</Link>
		</section>
	);
};

export default Signup;
