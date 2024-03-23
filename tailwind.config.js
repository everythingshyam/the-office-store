/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './src/*.{html,css,js}'],
	theme: {
		extend: {
			colors: {
				accent: {
					2: '#B2E5F8',
					4: '#77C2FA',
					6: '#3B9EFD',
					8: '#007BFF',
				},
				secondary: {
					2: '#9FA8B5',
					4: '#70767F',
					6: '#404449',
					8: '#111213',
				},
				primary: {
					2: '#CAD1DA',
					4: '#D9DEE4',
					6: '#E9EBEE',
					8: '#F8F8F8',
				},
			},
			height: {
				'50vh': '50dvh',
			},
			minHeight: {
				'10vh': '15vh',
			},
		},
	},
	plugins: [],
};
