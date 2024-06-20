import React from "react";
import Link from "next/link";
import { BsPinMap } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function Page() {
    const address = "Ivar Lykkes veg 4, 7075 Tiller";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        address
    )}`;
    return (
        <div className="flex flex-col items-center py-10 min-h-screen pt-28">
            <h1 className="text-4xl font-bold mb-6">Vi beffinner oss</h1>
            <div className="flex items-center gap-2 mb-6 w-fit">
                <div className="flex items-center gap-2 text-lg">
                    <BsPinMap className="text-blue-500" />
                    <p>Adresse:</p>
                </div>
                <p className="text-lg">Ivar Lykkes veg 4, 7075 Tiller</p>
            </div>
            <div
                className="w-full max-w-4xl relative flex justify-center items-center"
                style={{ height: "50vh" }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.1039634582755!2d10.374718513498584!3d63.357808676712764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d2e680488bc2b%3A0xd9bfe8d38d54f!2sIvar%20Lykkes%20veg%204%2C%207075%20Tiller!5e0!3m2!1sen!2sno!4v1718238711693!5m2!1sen!2sno"
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 flex items-center gap-2 mt-8 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
            >
                <FiMapPin />
                Get Directions
            </Link>
        </div>
    );
}
