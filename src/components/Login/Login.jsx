import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { LoginUser } from '../../Services/loginService';
import { toast } from 'react-toastify';
import { useAuth, useAuthActions } from '../../Providers/AuthProvider';
import { useQuery } from '../../hooks/useQuery';

const Login = () => {
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
		email: '',
		password: '',
	};

	const onSubmit = async (values) => {
		try {
			const { data } = await LoginUser(values);
			toast.success(`${data.name} You have successfully logged in`);
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
		email: Yup.string().email('Invalid email address format').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true });

	return (
		<section className='flex h-auto w-full flex-col items-center justify-center bg-sky-100 pt-4 pb-20 sm:h-screen sm:pt-8 md:py-10'>
			<p className='my-2 text-lg font-bold'>Login</p>

			<form
				onSubmit={formik.handleSubmit}
				className='flex w-full flex-col items-center justify-center'>
				{/* Email input */}
				<Input
					lable='Email'
					name='email'
					placeholder='example: yourEmail@gmail.com'
					formik={formik}
				/>

				{/* Password input */}
				<Input lable='Password' type='password' name='password' formik={formik} />

				<button
					type='submit'
					disabled={!formik.isValid}
					className='my-3 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200'>
					Login
				</button>
			</form>

			<Link to={`/signup?redirect=${redirect}`} className='my-2 text-sm hover:text-sky-500'>
				You didn't signup?
			</Link>
		</section>
	);
};

export default Login;
