import { menyItems } from "../../services/index";
import MenyClient from "../../components/meny/menyClient";
import Header from "../../components/meny/header";
import Head from "next/head";

export const metadata = {
    title: "Meny",
    description: "Oppdag vår utsøkte meny med retter fra Midtøsten.",
    keywords: [
        "Midtøsten-mat",
        "Meny",
        "Tarbush Restaurant",
        "Trondheim restaurant",
        "beste restaurant i Trondheim",
        "authentic Lebanese food",
        "family restaurant Trondheim",
        "Mediterranean dishes",
        "Halal food",
        "vegetarretter",
        "kebabretter",
        "grillretter",
        "burger",
        "pizza",
        "dessert",
        "HUMMUS",
        "BABA GHANOUJ",
        "TABBOULEH",
        "YALANJI",
        "TZATZIKI",
        "FALAFEL",
        "SAMOSA",
        "KOBA",
        "LØKRINGER MED DIP",
        "DAGENS SUPPE",
        "SHISH TAOUK",
        "SHISH KEBAB",
        "ADANA KEBAB",
        "TKE",
        "GRILLEDE KYLLINGVINGER",
        "TARBUSH MIX",
        "FALAFEL TALLERKEN",
        "TARBUSH SALAT",
        "VEGETAR PIZZA",
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
        href: "https://www.tarbush.no/meny",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default async function MenyPage() {
    const data = await menyItems();

    return (
        <>
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
            <Header />
            <MenyClient data={data.menies} />
        </>
    );
}
