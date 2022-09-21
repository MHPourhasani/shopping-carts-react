const Input = ({ formik, lable, name, placeholder, type = 'text' }) => {
	return (
		<div className='mb-0.5 flex w-10/12 max-w-xs flex-col items-start justify-center text-sm sm:w-10/12'>
			<div className='flex w-full items-center justify-between'>
				<label htmlFor={name} className='my-1 mx-1'>
					{lable}
				</label>

				{formik.errors[name] && formik.touched[name] && (
					<div className='ml-1 text-xs text-red-600'>* {formik.errors[name]}</div>
				)}
			</div>
			<input
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				{...formik.getFieldProps(name)}
				className={`my-1 h-9 w-full rounded-md border-2 px-2 py-1 outline-none focus-within:border-sky-400 ${
					formik.errors[name] && formik.touched[name]
						? 'border-red-500'
						: 'border-sky-400'
				} `}
			/>
		</div>
	);
};

export default Input;
