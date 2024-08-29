import Navbar from "../components/nav/nav";
import "../styles/globals.css";
import { rubik } from "../ui/font";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
    title: "Tarbush Restaurant - Vi lover deg en opplevelse Restaurant i Trondheim",
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
        "طربوش تروندهايم",
        "طربوش مطعم",
        "طربوش",
        "طربوش تروندهايم",
        "مطعم عائلي",
        "Halal / Halal / Halal / Halal / حلال",
        "Hof auf den Tisch / من المزرعة إلى المائدة",
        "Gastronomic experience / Experiencia gastronómica / Expérience gastronomique / Gastronomisches Erlebnis / تجربة طعام",
        "Wine tasting / Cata de vinos / Dégustation de vins / Weinprobe / تذوق النبيذ",
        "Signature dish / Plato característico / Plat signature / Signaturgericht / الطبق المميز",
        "Nyhet / New / Novedad / Nouvelle / Neuheit / جديد",
        "Eksklusiv / Exclusive / Exclusivo / Exclusif / Exklusiv / حصري",
        "Spesialtilbud / Special offer / Oferta especial / Offre spéciale / Sonderangebot / عرض خاص",
        "Ny / New / Nuevo / Nouveau / Neu / جديد",
        "Kreativ / Creative / Creativo / Créatif / Kreativ / مبتكر",
        "Midtøsten mat / Middle Eastern cuisine / Cocina del Medio Oriente / Cuisine du Moyen-Orient / Mittlere Osten Küche / مأكولات الشرق الأوسط",
        "Arabisk mat / Arabic food / Comida árabe / Cuisine arabe / Arabische Küche / الطعام العربي",
        "Libanesisk restaurant / Lebanese restaurant / Restaurante libanés / Restaurant libanais / Libanesisches Restaurant / مطعم لبناني",
        "Persisk restaurant / Persian restaurant / Restaurante persa / Restaurant persan / Persisches Restaurant / مطعم فارسي",
        "Syrisk restaurant / Syrian restaurant / Restaurante sirio / Restaurant syrien / Syrisches Restaurant / مطعم سوري",
        "Hummus / Hummus / Hummus / Houmous / Hummus / حمص",
        "Falafel / Falafel / Falafel / Falafel / Falafel / فلافل",
        "Shawarma / Shawarma / Shawarma / Shawarma / Shawarma / شاورم",
        "Baklava / Baklava / Baklava / Baklava / Baklava / بقلاوة",
        "Kebab / Kebab / Kebab / Kebab / Kebab / كباب",
        "Tabbouleh / Tabbouleh / Tabulé / Tabouleh / Tabouleh / تبولة",
        "Fattoush / Fattoush / Fattoush / Fattoush / Fattoush / فتوش",
        "Manakish / Manakish / Manakish / Manakish / Manakish / مناقيش",
        "Kibbeh / Kibbeh / Kibbeh / Kibbeh / Kibbeh / كبة",
        "Mutabbal / Mutabbal / Mutabbal / Mutabbal / Mutabbal / متبل",
        "Labneh / Labneh / Labneh / Labneh / Labneh / لبن",
        "Moujadara / Moujadara / Moujadara / Moujadara / Moujadara / مجدره",
        "Dolma / Dolma / Dolma / Dolma / Dolma / دولم",
        "Harees / Harees / Harees / Harees / Harees / هريس",
        "Sambousek / Sambousek / Sambousek / Sambousek / Sambousek / سمبوسة",
        "Arak / Arak / Arak / Arak / Arak / عرق",
        "Za'atar / Za'atar / Za'atar / Za'atar / Za'atar / زعتر",
        "Sfeeha / Sfeeha / Sfeeha / Sfeeha / Sfeeha / صفيحة",
        "Kousa Mahshi / Kousa Mahshi / Kousa Mahshi / Kousa Mahshi / Kousa Mahshi / كوسا محشي",
        "Shish Taouk / Shish Taouk / Shish Taouk / Shish Taouk / Shish Taouk / شيش طاووق",
        "Jibneh / Jibneh / Jibneh / Jibneh / Jibneh / جبن",
        "Moghrabieh / Moghrabieh / Moghrabieh / Moghrabieh / Moghrabieh / مغربية",
        "Qatayef / Qatayef / Qatayef / Qatayef / Qatayef / قطايف",
        "Riz au Lait / Rice pudding / Arroz con leche / Riz au lait / Reisbrei / رز بالحليب",
        "Knafeh / Knafeh / Knafeh / Knafeh / Knafeh / كنافة",
        "Ghraybeh / Ghraybeh / Ghraybeh / Ghraybeh / Ghraybeh / غريبة",
        "Maqlooba / Maqluba / Maqluba / Maqluba / Maqluba / مقلوبة",
        "Hummus bi Tahini / Hummus with Tahini / Hummus con Tahini / Houmous au Tahini / Hummus mit Tahini / حمص بالطحينة",
        "Fatteh / Fatteh / Fatteh / Fatté / Fatteh / فتة",
        "Ratatouille / Ratatouille / Ratatouille / Ratatouille / Ratatouille / راتاتوي",
        "Shakshuka / Shakshuka / Shakshuka / Shakshouka / Shakshuka / شكشوكة",
        "Hummus bi Lahm / Hummus with Meat / Hummus con Carne / Houmous à la viande / Hummus mit Fleisch / حمص باللحم",
        "Mansaf / Mansaf / Mansaf / Mansaf / Mansaf / منسف",
        "Sarayeb / Sarayeb / Sarayeb / Sarayeb / Sarayeb / سراييب",
        "Knafeh Nabulsieh / Nabulsi Knafeh / Knafeh Nabulsieh / Knafeh de Nabulsi / Nabulsi Knafeh / كنافة نابلسية",
        "Baba Ghanoush / Baba Ghanoush / Baba Ghanoush / Baba Ganoush / Baba Ganoush / بابا غنوج",
        "Kibbeh Nayeh / Kibbeh Nayeh / Kibbeh Nayeh / Kibbeh Nayeh / Kibbeh Nayeh / كبة نية",
        "Kousa Mahshi / Stuffed Zucchini / Calabacín Relleno / Courgettes farcies / Gefüllte Zucchini / كوسا محشي",
        "Sambousek / Sambousek / Sambousek / Sambousek / Sambousek / سمبوسك",
        "Ajami / Ajami / Ajami / Ajami / Ajami / عجمي",
        "Goulash / Goulash / Goulash / Goulash / Gulasch / جولاش",
        "Mouhalabia / Mouhalabia / Mouhalabia / Mouhalabia / Mouhalabia / محلاية",
        "Zaatar Manakish / Za'atar Manakish / Manakish de Za'atar / Manakich au Za'atar / Za'atar Manakisch / مناقيش زعتر",
        "Mutabal / Mutabal / Mutabal / Mutabal / Mutabal / متبل",
        "Ruz al-Bukhari / Rice with Meat / Arroz al Bukhari / Riz au Bukhari / Bukhari-Reis / رز البخاري",
        "Jebneh Arabieh / Arabic Cheese / Queso árabe / Fromage arabe / Arabischer Käse / جبنة عربية",
        "Lentil Soup / Lentejas / Soupe de lentilles / Linsensuppe / شوربة عدس",
        "Yogurt Labneh / Labneh / Labneh / Labneh / Labneh / لبن",
        "Bamieh / Okra / Bamia / Gombo / Okra / بامية",
        "اكل سوري",
        "بحب الاكل",
        "كباب",
        "كباب سوري",
        "غنا",
        "god mat",
        "best maten",
        "مطعم حلال",
        "اكل حلال",
        "مقبلات شرقي",
        "اكل شرقي",
        "قهوة سوري",
        "مطعم سوري",
        "شاورما",
        "اكل طيب",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no",
    },
    htmlAttributes: {
        lang: "no",
    },
    verification: {
        google: "AmKgMh56Lz2XNzwKxiFeEQjC_EFQTgToiCh2juC9Wxs",
    },
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no",
    },
    htmlAttributes: {
        lang: "no",
    },
    verification: {
        google: "AmKgMh56Lz2XNzwKxiFeEQjC_EFQTgToiCh2juC9Wxs",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="no">
            <Head>
                <link
                    rel="preconnect"
                    href="https://dev.visualwebsiteoptimizer.com"
                />

                <title>{metadata.title}</title>
                <meta
                    name="google-site-verification"
                    content={metadata.verification.google}
                />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <link rel="canonical" href={metadata.link.href} />
                <meta name="author" content={metadata.author} />
                <html lang={metadata.htmlAttributes.lang} />
            </Head>
            <body className={rubik.className}>
                <Navbar />
                {children}

                {/* Google Analytics Script */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-HLNRK8CSZ6"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-HLNRK8CSZ6');
                    `}
                </Script>
            </body>
        </html>
    );
}
