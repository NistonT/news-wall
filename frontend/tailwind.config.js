/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridAutoFlow: {
				row: "row",
				column: "column",
				dense: "dense",
			},
		},
	},
	plugins: [],
};
