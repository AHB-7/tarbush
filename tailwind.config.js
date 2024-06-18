/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
                "brand-red": {
                    50: "#fff0f0",
                    100: "#ffdddd",
                    200: "#ffc0c0",
                    300: "#ff9494",
                    400: "#ff5757",
                    500: "#ff2323",
                    600: "#ff0000",
                    700: "#d70000",
                    800: "#b10303",
                    900: "#920a0a",
                    950: "#500000",
                },
                "brand-dark": {
                    50: "#f5f2f1",
                    100: "#e5e0dc",
                    200: "#ccc3bc",
                    300: "#afa095",
                    400: "#988377",
                    500: "#897369",
                    600: "#756059",
                    700: "#5f4c49",
                    800: "#524341",
                    900: "#483b3b",
                    950: "#251d1d",
                },
            },
        },
    },
    plugins: [],
};
