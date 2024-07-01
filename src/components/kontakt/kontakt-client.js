"use client";

import { useState, useEffect } from "react";
import { MdOutlineCopyAll } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

export default function ContactClient() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("+47 929 27 015");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="border rounded-md flex gap-2 p-2">
            {isCopied ? (
                <button
                    onClick={handleCopy}
                    className="text-green-400 flex items-center"
                >
                    <p className="text-green-400 text-lg ">+47 929 27 015</p>

                    <IoCopy className="text-green-400 text-2xl ms-2" />
                </button>
            ) : (
                <button onClick={handleCopy} className="flex items-center">
                    <p className="text-lg ">+47 929 27 015</p>
                    <IoCopyOutline className=" text-2xl ms-2" />
                </button>
            )}
        </div>
    );
}
