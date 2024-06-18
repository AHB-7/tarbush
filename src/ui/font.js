import { Bellota, Roboto, Montserrat, Rubik } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});
export const bellota = Bellota({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
});

export const montserrat = Montserrat({
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    subsets: ["latin"],
});
export const rubik = Rubik({
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    subsets: ["latin"],
});
