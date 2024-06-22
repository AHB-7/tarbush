/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                padding: {
                    DEFAULT: "0",
                },
            },
            screens: {
                sm: "500px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                red: {
                    50: "#ffeeef",
                    100: "#ffdcde",
                    200: "#ffb2bb",
                    300: "#ff6d81",
                    400: "#ff2040",
                    500: "#ff0016",
                    600: "#df0006",
                    700: "#b40003",
                    800: "#950005",
                    900: "#7a0004",
                    950: "#050000",
                },
            },
        },
    },
    plugins: [],
};
