/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './src/**/*.{html,css,js}'],
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
				attention: {
					2: '#E9B0B0',
					4: '#E28585',
					6: '#DA5A5A',
					8: '#D32F2F',
				},
				translucent: {
					0: 'rgba(255,255,255,0.01)',
					8: 'rgba(0,0,0,0.09)',
				},
			},
			height: {
				'50vh': '50dvh',
			},
			minHeight: {
				'10vh': '15vh',
			},
			screens: {
				lg: '1000px',
				md: '750px',
				sm: '530px',
			},
			dropShadow: {
				accent: [
					'0 10px 8px rgb(0 123 255 / 0.04)',
					'0 4px 3px rgb(0 123 255 / 0.3)',
				],
			},
			borderWidth: {
				1: '1px',
			},
			boxShadow: {
				round: '0 0 8px rgb(100 100 100 / 0.5)',
			},
		},
	},
	plugins: [],
};
