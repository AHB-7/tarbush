import OpningsTimes from "@/components/kontakt/opningstimes";
import ContactClient from "../../components/kontakt/kontakt-client";

export const metadata = {
    title: "Kontakt",
    description:
        "Kontakt oss for mer informasjon eller for å bestille time i dag. Ring oss eller besøk oss i Trondheim.",
    keywords: [
        "kontakt",
        "kontakt oss",
        "bestille time",
        "Trondheim",
        "restaurant Trondheim",
        "Tarbush Restaurant",
        "spørsmål",
        "åpningstider",
        "telefonnummer Tarbush",
        "besøksadresse Tarbush",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/kontakt",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative h-full w-screen overflow-hidden sm:px-20 bg-opacity-20">
                <div className="z-10 flex h-full flex-col items-center justify-center space-y-4">
                    <h1 className="text-center text-5xl font-bold text-white py-6">
                        Kontakt informasjonen til Tarbush
                    </h1>
                    <ContactClient />
                    <OpningsTimes />
                </div>
                <div className="-z-1 absolute bottom-3 left-1/4 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
                <div className="-z-1 absolute -top-4 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
                <div className="-z-1 absolute top-2/3 left-3/4 h-72 w-40 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
            </div>
        </div>
    );
}
