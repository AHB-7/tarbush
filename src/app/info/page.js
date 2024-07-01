import React from "react";
import Link from "next/link";
import { BsPinMap } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import ContactClient from "../../components/kontakt/kontakt-client";
import OpningsTimes from "../../components/kontakt/opningstimes";
import { FaClock, FaInfoCircle, FaMap } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

export const metadata = {
    title: "Kontakt og Informasjon",
    description:
        "Få all informasjon du trenger om Tarbush Restaurant. Kontakt oss for mer informasjon eller bestill bord i dag. Besøk oss i Trondheim.",
    keywords: [
        "Tarbush Restaurant",
        "kontakt",
        "kontakt oss",
        "bestille time",
        "bestille bord",
        "Trondheim",
        "restaurant Trondheim",
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
        "restaurant informasjon",
        "restaurant kontakt",
        "restaurant åpningstider",
        "restaurant beliggenhet",
        "Google Maps Tarbush",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/informasjon",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default function Page() {
    const address = "Ivar Lykkes veg 4, 7075 Tiller";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        address
    )}`;
    return (
        <section className="flex items-center justify-center">
            <section>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="p-1 mb-8 mt-12 flex flex-col items-center gap-6">
                        <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold mb-2">
                            Hvor, Når og Hvordan ?
                        </h1>
                        <p class="text-lg font-normal text-gray-400 mb-1">
                            Click på knappen for å ringe oss direkte eller sende
                            oss en melding.
                        </p>
                        <ContactClient />
                    </div>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class=" bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-sm shadow-white rounded-lg px-4 py-8 md:p-12">
                            <div class="bg-green-700 bg-opacity-80 text-white text-xs font-medium inline-flex items-center rounded-md py-1 px-1">
                                <FaMap className="mr-2" />
                                Adresse
                            </div>
                            <h1 class="dark:text-white text-3xl font-extrabold mb-2">
                                Hvor, Når og Hvordan ?
                            </h1>
                            <p class="text-lg font-normal text-gray-400 mb-6">
                                Vi er lokalisert i Trondheim, nærmere bestemt på
                                Ivar Lykkes veg 4, 7075 Tiller.
                            </p>
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
                                className="mx-auto px-8 w-fit flex items-center gap-2 mt-8 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                            >
                                <FiMapPin />
                                Get Directions
                            </Link>
                        </div>
                        <div class="from-zinc-900 via-zinc-800 to-zinc-900 border border border-zinc-700 shadow-sm shadow-white rounded-lg px-4 py-8 md:p-12">
                            <div class="bg-orange-400  bg-opacity-80 text-white text-xs font-medium inline-flex items-center rounded-md py-1 px-1">
                                <FaClock className="mr-2 " />
                                Åpningstider
                            </div>
                            <h1 class="dark:text-white text-3xl font-extrabold mb-2 pb-8">
                                Når er vi åpne ?
                            </h1>
                            <div className="flex flex-col items-center justify-center">
                                <OpningsTimes />
                                <div className="mt-8">
                                    <ContactClient />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="">
                <h1 className="text-3xl">Vi beffinner oss</h1>
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
            </div> */}
            {/* <div className="flex flex-col justify-cente">
                <div className="relative overflow-hidden sm:px-20 bg-opacity-20">
                    <div className="z-10 flex h-full flex-col items-center justify-center space-y-4">
                        <h1 className="text-center text-3xl font-bold text-white py-6">
                            Kontakt informasjonen til Tarbush
                        </h1>
                        <ContactClient />
                        <OpningsTimes />
                    </div>
                </div>
            </div> */}
        </section>
    );
}
