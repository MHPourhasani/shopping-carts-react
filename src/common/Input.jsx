const Input = ({ formik, lable, name, placeholder, type = 'text' }) => {
	return (
		<div className='mb-2 flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-5/12'>
			<label htmlFor={name} className='my-1 mx-1'>
				{lable}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				{...formik.getFieldProps(name)}
				className='my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400'
			/>
			{formik.errors[name] && formik.touched[name] && (
				<div className='ml-1 text-xs text-red-600'>{formik.errors[name]}</div>
			)}
		</div>
	);
};

export default Input;
