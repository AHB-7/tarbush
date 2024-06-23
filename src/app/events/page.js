import Image from "next/image";
import Opning from ".././../components/events/opning";
import Link from "next/link";

export const metadata = {
    title: "Bestill Nå",
    description:
        "Bestill bord hos Tarbush Restaurant eller kontakt oss for mer informasjon. Vi er her for deg i Trondheim.",
    keywords: [
        "Tarbush Restaurant",
        "bestill nå",
        "kontakt oss",
        "bestille bord",
        "Trondheim",
        "restaurant Trondheim",
        "Tarbush Restaurant",
        "spørsmål",
        "åpningstider",
        "telefonnummer Tarbush",
        "besøksadresse Tarbush",
        "lunsjservering",
        "rabatt",
        "reservasjon",
        "mat Trondheim",
        "autentisk mat",
        "syrisk mat",
        "kurdiske retter",
        "familierestaurant",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/bestill",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default function Page() {
    return (
        <>
            <section className="flex items-center justify-center my-24 h-full flex-col gap-8">
                <div className="flex items-center justify-center flex-col gap-4">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                        Bestill Nå
                    </h1>
                    <p className="max-w-3xl text-lg text-center font-light ">
                        Har du spørsmål eller ønsker å bestille bord? Ta kontakt
                        med oss i dag. Vi er her for deg!
                    </p>
                    <div className="border-b pb-12 border-red-500 w-full flex items-center justify-center pt-4">
                        <Link
                            href="/kontakt"
                            className="px-6 relative text uppercase py-2.5 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
                        >
                            Ring for å bestille
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start relative -z-10">
                    <h1 className="bg-white text-red-500 p-3 font-extrabold text-2xl rounded-md uppercase w-fit">
                        lunsjservering
                    </h1>
                    <p className="font-light text-md rounded-md text-nowrap pt-9">
                        Servering starter mellom:{" "}
                        <strong> 11:00 - 14-00</strong>
                        <br />
                        For reservasjoner: <strong>+47 929 27 015</strong>
                        <br />
                        Adresse: <strong>Ivar Lykkes veg 4, 7075 Tiller</strong>
                    </p>
                    <p className="pt-8 pe-8">
                        Perfekt for en rask pause eller en koselig lunsj med
                        venner og kollegaer.
                    </p>
                    <div className="absolute top-0 me-7 mt-7 rotate-12 right-0 md:w-20 w-10 md:h-20 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <p className="text-white font-extrabold text-md md:text-3xl">
                            15%
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-wrap w-fit gap-5 pt-8">
                        <Image
                            className="rounded-lg max-w-56 md:max-w-32 -rotate-90 bg-white"
                            src="/images/mat1.png"
                            alt="t"
                            width="1000"
                            height="50"
                        />{" "}
                        <Image
                            className="rounded-lg max-w-32 -rotate-90 bg-white"
                            src="/images/mat22.png"
                            alt="t"
                            width="1000"
                            height="50"
                        />{" "}
                        <Image
                            className="rounded-lg max-w-32 -rotate-90 bg-white"
                            src="/images/mat3.png"
                            alt="t"
                            width="1000"
                            height="50"
                        />
                    </div>
                    <h2 className="bg-red-500 p-1 mt-6 font-extrabold text-normal rounded-md w-fit text-center">
                        Vis innlegget i kassen for å få rabatten.
                    </h2>
                </div>
            </section>
        </>
    );
}
