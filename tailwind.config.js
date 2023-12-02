/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
		{
			pattern: /bg-(red|orange|yellow|green|blue|purple|teal)-./,
			variants: ['hover', 'focus']
		},
		// {
		// 	pattern: /text-(red|orange|yellow|green|blue|purple)-./,
		// 	variants: ['hover', 'focus']
		// },
		// {
		// 	pattern: /border-b-(red|orange|yellow|green|blue|purple)-./,
		// 	variants: ['hover', 'focus']
		// },
		// {
		// 	pattern: /border-(red|orange|yellow|green|blue|purple)-./,
		// 	variants: ['hover', 'focus']
		// },
		// {
		// 	pattern: /text-(white|slate|black)./,
		// 	variants: ['hover', 'focus']
		// }
  ],
  plugins: [],
}

