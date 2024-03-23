/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './src/*.{html,css,js}'],
	theme: {
		extend: {
			colors: {
				accent: '#007BFF',
				secondary: '#111213',
				primary: '#F8F8F8',
			},
		},
	},
	plugins: [],
};