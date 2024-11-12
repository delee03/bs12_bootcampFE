/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#111",
            },
            container: {
                screens: {
                    xl: "1140px",
                    "2xl": "1200px",
                },
                center: true,
            },
        },
    },
    plugins: [],
};
