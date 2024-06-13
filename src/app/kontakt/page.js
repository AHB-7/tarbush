"use client";
import { useState } from "react";

export default function Page() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("+47 929 27 015");
        setIsCopied(true);
        alert("Telefonnummer kopiert!");
        setTimeout(() => setIsCopied(false), 2000); // Reset the button color after 2 seconds
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl mb-8 border-b-8">Kontakt</h1>
            <div className="flex items-center justify-center gap-2 my-5 flex-wrap">
                <p
                    className="text-xl 
                "
                >
                    Telefon: +47 929 27 015
                </p>
                <button
                    onClick={handleCopy}
                    className={`px-4 py-2 outline outline-red-500 text-white rounded-lg transition duration-300 ${
                        isCopied ? "bg-green-500" : "hover:bg-red-500"
                    }`}
                >
                    {isCopied ? "Kopiert!" : "Kopier Nummer"}
                </button>
            </div>
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
{
    /* <p>933467031</p> */
}
