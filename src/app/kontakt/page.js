import ContactClient from "@/components/kontakt/kontakt-client";

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
            <h1 className="text-6xl mb-8 border-b-8">Kontakt</h1>
            <ContactClient />
            <table className="table-auto border-collapse border border-gray-400 mt-5">
                <thead>
                    <tr className="bg-red-700">
                        <th className="border border-gray-300 px-12 py-2">
                            Dag
                        </th>
                        <th className="border border-gray-300 px-12 py-2">
                            Åpningstider
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Mandag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            11:00 - 22:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Tirsdag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            11:00 - 22:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Onsdag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            11:00 - 22:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Torsdag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            11:00 - 22:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Fredag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            10:00 - 23:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Lørdag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            11:00 - 23:00
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-12 py-2">
                            Søndag
                        </td>
                        <td className="border border-gray-300 px-12 py-2">
                            10:00 - 22:00
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
