/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			white100: "rgb(255, 255, 255)",
			white40: "rgba(255, 255, 255, 0.4)",
			white20: "rgba(255, 255, 255, 0.2)",
			primaryGray: "rgb(43, 43, 43)",
			primaryGray40: "rgba(43, 43, 43, 0.4)",
			darkGray: "rgb(51, 51, 51)",
			yellow: "rgb(248, 213, 126)",
			yellowLight: "#FBE4AB",
			purple: "rgb(191, 175, 242)",
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans serif"],
			},
		},
	},
	plugins: [],
};
