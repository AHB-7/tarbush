"use client";

import { useState, useEffect } from "react";
import { MdOutlineCopyAll } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

export default function ContactClient() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("+47 929 27 015");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="bg-opacity-5  bg-black after:-z-10 after:bg-opacity-5 after:bg-black relative flex flex-row items-center gap-4 justify-center w-full border max-w-[18rem] max-h-[20rem] rounded-lg after:rounded-lg after:border after:absolute after:max-w-[18rem] after:top-2 after:right-2  after:max-h-[20rem] after:w-full after:h-full after:border-red-400">
            {isCopied ? (
                <p className="text-green-400 text-lg py-4 ">
                    Tlf: +47 929 27 015
                </p>
            ) : (
                <p className="text-white text-lg py-4">Tlf: +47 929 27 015</p>
            )}

            {isCopied ? (
                <button
                    onClick={handleCopy}
                    className="text-green-400 flex items-center "
                >
                    kopiert
                    <IoMdDoneAll className="text-green-400  text-xl ms-1" />
                </button>
            ) : (
                <button onClick={handleCopy} className="flex items-center">
                    Kopi
                    <MdOutlineCopyAll className="text-red-500 text-xl ms-1" />
                </button>
            )}
        </div>
    );
}
