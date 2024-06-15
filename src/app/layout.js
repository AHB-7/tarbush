import Navbar from "../components/nav/nav";
import "../styles/globals.css";
import { montserrat } from "../ui/font";
import Head from "next/head";

export const metadata = {
    title: "Beste Midtøsten- og Asia-mat i Trondheim",
    description:
        "Oppdag spesialtilbudet på Tarbush Restaurant i Trondheim. Vi er dedikert til å tjene deg på best mulig måte. Ta en titt på vår meny og bestill dine favorittretter fra Midtøsten og Asia i dag!",
    keywords: [
        "restaurant i Trondheim",
        "beste restaurant i Trondheim",
        "Midtøsten-mat Trondheim",
        "Asia mat Trondheim",
        "god mat Trondheim",
        "Tarbush Restaurant",
        "spis sunt",
        "kebab Trondheim",
        "pizza Trondheim",
        "syrisk mat Trondheim",
        "koba",
        "syrisk mat",
        "spis sunt",
        "sunt mat",
        "adana kebab",
        "pizza",
        "salad",
        "VEGETAR PIZZA",
        "HUMMUS",
        "BABA GHANOUJ",
        "TABBOULEH",
        "TZATZIKI",
        "SHISH TAOUK",
        "SHISH KEBAB",
        "TKE",
        "GRILLEDE KYLLINGVINGER",
        "TARBUSH MIX",
        "FALAFEL",
        "SAMOSA",
        "LØKRINGER MED DIP",
        "DAGENS SUPPE",
        "FALAFEL TALLERKEN",
        "TARBUSH SALAT",
        "FALAFEL RULL",
        "CHEESEBURGER TALLERKEN",
        "HAMBURGER TALLERKEN",
        "TARBUSH BURGER",
        "PEPPERONI",
        "SKINKE",
        "MALO",
        "TILLER",
        "MARGHERITA",
        "LAHMACUN",
        "KEBAB RULL",
        "KYLLING RULL",
        "KEBAB TALLERKEN M/BIFF",
        "KEBAB TALLERKEN M/KYLLING",
        "MIX KEBAB TALLERKEN",
        "SHAWARMA RULL MED KYLLING",
        "SHAWARMA ARABI",
        "BRØD",
        "HVITLØKSKREM",
        "SYLTEDE GRØNNSAKER",
        "HVITLØKSSAUS",
        "BBQ-SAUS",
        "BERNAISE SAUS",
        "BARNEPIZZA",
        "BARNEBURGER",
        "KYLLINGSPYD MED BRØD",
        "CHIPS MED KETCHUP",
        "IS",
        "BAKLAVA MED IS",
        "OREOKAKE MED IS",
        "KUNEFE",
        "HARISE",
        "DAGENS DESSERT",
        "COLA",
        "COLA ZERO",
        "FANTA",
        "SPRITE",
        "KULI",
        "AYRAN",
        "TE I KANNE",
        "ARABISK KAFFE",
        "KAFFE",
        "VARM SJOKOLADE",
    ],
    author: "Tarbush Restaurant",
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
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <link rel="canonical" href={metadata.link.href} />
                <meta name="author" content={metadata.author} />
                <html lang={metadata.htmlAttributes.lang} />
                <script type="application/ld+json">
                    {`
                {
                  "@context": "http://schema.org",
                  "@type": "Restaurant",
                  "name": "Tarbush Restaurant",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ivar Lykkes veg 4",
                    "addressLocality": "Trondheim",
                    "postalCode": "7075",
                    "addressCountry": "NO"
                  },
                  "servesCuisine": "Middle Eastern, Asian",
                  "url": "https://www.tarbush.no",
                  "telephone": "+47 929 27 015",
                  "openingHours": "Ma-Sø 10:00-22:00"
                }
                `}
                </script>
            </Head>
            <body className={montserrat.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
