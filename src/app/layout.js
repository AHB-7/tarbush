import Navbar from "@/components/nav/nav";
import "@/styles/globals.css";
import { roboto } from "@/ui/font";

export const metadata = {
    title: "Beste Midtøsten-mat i Trondheim",
    description:
        "Oppdag spesialtilbudet på Tarbush Restaurant i Trondheim. Vi er dedikert til å tjene deg på best mulig måte. Ta en titt på vår meny og bestill dine favorittretter fra Midtøsten i dag!",
    keywords: [
        "Tarbush Restaurant",
        "Midtøsten-mat Trondheim",
        "beste restaurant i Trondheim",
        "spesialtilbud Tarbush",
        "koba",
        "syrisk mat",
        "asia mat",
        "spis sunt",
        "sunt mat",
        "adana kebab",
        "pizza",
        "salad",
        "VEGETAR PIZZA",
        "HUMMUS",
        "BABA GHANOUJ",
        "TABBOULEH",
        "TABBOULEH",
        "TZATZIKI",
        "SHISH TAOUK",
        "SHISH KEBAB",
        "TKE",
        "GRILLEDE KYLLINGVINGER",
        "TARBUSH MIX",
        "FALAFEL",
    ],
    author: "Tarbush Restaurant",
    viewport: "width=device-width, initial-scale=1.0",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="no">
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
