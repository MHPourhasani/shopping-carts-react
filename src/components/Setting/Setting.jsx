const Setting = () => {
	return (
		<section className='mt-16 flex w-full flex-col items-center justify-center'>
			<p className='my-2 text-lg font-bold'>Setting</p>

			<section className='w-11/12 flex-col items-center justify-center sm:w-1/2 lg:w-1/3'>
				<div className='my-2 flex w-full items-center justify-start rounded-md border-2 border-sky-400 py-1.5'>
					<input type='checkbox' className='mx-2 accent-sky-400' />
					<p>Enable notifications</p>
				</div>

				<div className='my-2 flex w-full items-center justify-start rounded-md border-2 border-sky-400 py-1.5'>
					<input type='checkbox' className='mx-2 accent-sky-400' />
					<p>Enable notifications</p>
				</div>
			</section>
		</section>
	);
};

export default Setting;
