import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { LoginUser } from '../../Services/loginService';
import { toast } from 'react-toastify';

const Login = () => {
	const [errorMessage, setErrorMessage] = useState(null);

	const initialValues = {
		email: '',
		password: '',
	};

	const onSubmit = async (values) => {
		try {
			const { data } = await LoginUser(values);
			toast.success(`${data.name} You have successfully logged in`);
			setErrorMessage(null);
			console.log(data);
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
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
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
					className='my-3 w-10/12 max-w-xs rounded-md bg-sky-400 py-1.5 text-white disabled:bg-sky-200 sm:w-5/12'>
					Login
				</button>
			</form>

			<Link to='/signup' className='my-2 text-sm hover:text-sky-500'>
				You didn't signup?
			</Link>
		</section>
	);
};

export default Login;
