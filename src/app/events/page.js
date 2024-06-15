import Opning from "@/components/opning/opning";

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
    return <Opning />;
}
