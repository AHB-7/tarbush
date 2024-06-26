import GalleryDetailPage from "../../../components/gallary/fetchgallary";
export const metadata = {
    title: "Blogg",
    description:
        "Les våre historier, se våre bilder og utforsk artikler om Tarbush Restaurant. Hold deg oppdatert med de siste nyhetene og oppdateringene fra vår restaurant i Trondheim.",
    keywords: [
        "Tarbush Restaurant",
        "Tarbush blogg",
        "restaurant blogg",
        "Trondheim restaurant blogg",
        "syrisk mat blogg",
        "kurdiske retter blogg",
        "Tarbush historier",
        "Tarbush bilder",
        "Tarbush artikler",
        "restaurant nyheter",
        "Tarbush oppdateringer",
        "kontakt oss",
        "bestille time",
        "Trondheim",
        "restaurant Trondheim",
        "spørsmål",
        "åpningstider",
        "telefonnummer Tarbush",
        "besøksadresse Tarbush",
        "Autentisk syrisk mat",
        "Kurdiske retter",
        "Trondheim restaurant",
        "Familie restaurant",
        "Matopplevelse",
        "Tradisjonell mat",
        "Kontaktinformasjon Tarbush",
        "Åpningstider Tarbush",
        "Beste restaurant i Trondheim",
        "Del din historie Tarbush",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/blogg",
    },
    htmlAttributes: {
        lang: "no",
    },
};
const Page = ({ params }) => {
    return (
        <section>
            <GalleryDetailPage params={params} />
        </section>
    );
};

export default Page;
