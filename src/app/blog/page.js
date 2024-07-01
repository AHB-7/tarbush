import Image from "next/image";
import { fetchGallery } from "../../services/index";
import Link from "next/link";
import Loading from "../../components/loading";

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

const GalleryPage = async () => {
    const galleries = await fetchGallery();
    if (!galleries) {
        return <Loading className="h-screen" />;
    } else {
        return (
            <div className=" h-screen md:p-24 py-24 px-2 bg-red-100 bg-opacity-5 ">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-3xl font-bold py-5 text-center uppercase">
                        Vår små historiene og mer!
                    </h1>
                    <p className="font-thin pb-5 text-center md:w-4/5">
                        Vi er glad for at du ser gjennom vår samling av bilder,
                        historier og mange andre artikler som handler om vår
                        restaurant. Hvis du har noen spørsmål, ikke nøl med å
                        kontakte oss.
                    </p>
                    <Link
                        href="/kontakt"
                        className=" mb-6 font-normal  px-7 relative text uppercase py-2.5 text-black bg-white shadow-sm shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
                    >
                        Kontakt oss for å dele
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleries.map((gallery) => (
                        <div key={gallery.id} className="grid gap-4">
                            <Link
                                href={`/blog/${gallery.id}`}
                                className="opacity-80 saturate-100 hover:saturate-50 hover:scale-105 hover:opacity-100 transition-all duration-300 ease-in-out"
                            >
                                <Image
                                    className="h-auto max-w-full rounded-lg"
                                    src={gallery.resImage[0].url}
                                    alt={gallery.title}
                                    width={500}
                                    height={500}
                                    layout="responsive"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default GalleryPage;
