"use client";

import { useState } from "react";

export default function ContactClient() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("+47 929 27 015");
        setIsCopied(true);
        alert("Telefonnummer kopiert!");
        setTimeout(() => setIsCopied(false), 2000); // Reset the button color after 2 seconds
    };

    return (
        <div className="flex items-center justify-center gap-2 my-5 flex-wrap">
            <p className="text-xl">Telefon: +47 929 27 015</p>
            <button
                onClick={handleCopy}
                className={`px-4 py-2 outline outline-red-500 text-white rounded-lg transition duration-300 ${
                    isCopied ? "bg-green-500" : "hover:bg-red-500"
                }`}
            >
                {isCopied ? "Kopiert!" : "Kopier Nummer"}
            </button>
        </div>
    );
}
