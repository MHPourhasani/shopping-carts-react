module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderWidth: {
				1: '1px',
			},
			boxShadow: {
				header: '0px -50px 60px 25px rgba(0,0,0,0.75)',
				navBar: '0px 70px 60px 60px rgba(0,0,0,0.75)'
			},
		},
	},
	plugins: [],
};
