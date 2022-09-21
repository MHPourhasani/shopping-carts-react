import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { SignupUser } from '../../Services/signupService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth, useAuthActions } from '../../Providers/AuthProvider';
import { useQuery } from '../../hooks/useQuery';

const Signup = () => {
	const [errorMessage, setErrorMessage] = useState(null);

	const auth = useAuth();
	const setAuth = useAuthActions();

	const navigate = useNavigate();
	const query = useQuery();
	const redirect = query.get('redirect') || '';

	useEffect(() => {
		if (auth) navigate(`/${redirect}`);
	}, [auth, navigate, redirect]);

	const initialValues = {
		name: '',
		phoneNumber: '',
		email: '',
		password: '',
		passwordConfirm: '',
	};

	const onSubmit = async (values) => {
		const { name, phoneNumber, email, password } = values;
		const userData = { name, phoneNumber, email, password };

		try {
			const { data } = await SignupUser(userData);
			toast.success(`${data.name} Registration completed successfully`);
			setAuth(data);
			setErrorMessage(null);
			navigate(`/${redirect}`);
		} catch (error) {
			if (error.response && error.response.data.message) {
				setErrorMessage(error.response.data.message);
			}
			toast.error(errorMessage);
		}
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required').min(6),
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
		<section className='flex h-auto w-full flex-col items-center justify-center bg-sky-100 pt-4 pb-20 sm:pt-8 md:py-10 md:pt-7 lg:overflow-hidden xl:h-screen'>
			<p className='mb-3 text-3xl font-bold sm:mt-3'>Sign Up</p>

			<form
				onSubmit={formik.handleSubmit}
				className='flex w-full flex-col items-center justify-center'>
				{/* Name input */}
				<Input
					lable='Name'
					name='name'
					placeholder='Mohammad Hasan Pourhasani'
					formik={formik}
				/>

				{/* Phone Number input */}
				<Input
					lable='Phone Number'
					type='tel'
					name='phoneNumber'
					placeholder='09xxxxxxxxx'
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
					className='my-2 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200'>
					Sign Up
				</button>
			</form>

			<Link to={`/login?redirect=${redirect}`} className='my-2 text-sm hover:text-sky-500'>
				You did login?
			</Link>
		</section>
	);
};

export default Signup;
