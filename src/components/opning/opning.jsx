"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Opning() {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-fixed text-center bg-center"
            style={{
                backgroundImage: `url(/images/grillmat.png)`,
                height: "100vh",
            }}
        >
            <div className="mx-auto max-w-md md:max-w-xl my-auto absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white backdrop-blur-md p-5 md:p-10 rounded-xl">
                        <div
                            className={`relative cursor-pointer transition-transform duration-300 ${
                                isZoomed ? "scale-150" : "scale-100"
                            }`}
                            onClick={handleImageClick}
                        >
                            <Image
                                src="/images/Eid.png"
                                className="rounded-xl"
                                alt="alt"
                                width={1000}
                                height={1000}
                                layout="responsive"
                            />
                        </div>
                        <Link
                            href="/"
                            className="mt-4 block px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                        >
                            Hjem Side
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
