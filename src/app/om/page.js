import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import {
    FaFacebookSquare,
    FaInstagram,
    FaSnapchatSquare,
    FaTripadvisor,
    FaYelp,
} from "react-icons/fa";

export const metadata = {
    title: "Kontakt",
    description:
        "Kontakt oss for mer informasjon eller for å bestille time i dag. Ring oss eller besøk oss i Trondheim.",
    keywords: [
        "Tarbush Restaurant",
        "kontakt oss",
        "bestille time",
        "Trondheim",
        "restaurant Trondheim",
        "Tarbush Restaurant",
        "spørsmål",
        "åpningstider",
        "telefonnummer Tarbush",
        "besøksadresse Tarbush",
        "Autentisk syrisk mat",
        "Kurdiske retter",
        "Trondheim restaurant",
        "Familie restaurant",
        "Matopplevelse",
        "Tradisjonell mat",
        "Kontaktinformasjon Tarbush",
        "Åpningstider Tarbush",
        "Telefonnummer Tarbush",
        "Besøksadresse Tarbush",
        "Restaurant anmeldelser",
        "Sosiale medier Tarbush",
        "Ivar Lykkes veg 4",
        "Matkultur Syria",
        "Matkultur Kurdistan",
        "Beste restaurant i Trondheim",
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
        <>
            <header className="md:mx-auto px-2 container flex mt-24 flex-col gap-4">
                <h1 className=" text-4xl text-start bg-gradient-to-r text-red-500 from-white  p-2 rounded-md font-extrabold">
                    Litt om oss !
                </h1>
            </header>
            <main className="sm:mx-auto container mx-2 w-fit">
                <ol className="relative border-s border-gray-200 xl:mx-72">
                    <li className="my-10  pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Hvem er vi ?
                        </h2>
                        <p className="indent-8 px-2 md:px-10 ">
                            Vi er en familie drevet restaurant som serverer
                            autentisk syrisk og kurdisk mat. Hos oss finner du
                            retter laget med kjærlighet og de beste råvarene.
                            Vår meny er en hyllest til våre røtter og
                            tradisjoner, og vi ønsker å dele vår matkultur med
                            deg. Velkommen til en unik matopplevelse hvor hver
                            rett forteller en historie. Bli med oss på en
                            kulinarisk reise som binder sammen smaker fra Syria,
                            Kurdistan og Norge. Vi ser frem til å ønske deg
                            velkommen!
                        </p>
                        <Image
                            className="px-2 md:px-10 w-auto h-96 object-cover bg-center brightness-90 rounded-lg opacity-90  mt-8"
                            src="/images/about/allinon.jpg"
                            width={1000}
                            height={300}
                            alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                        ></Image>
                    </li>{" "}
                    <li className="my-10 pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Vår historie
                        </h2>
                        <p className="indent-8 px-2 md:px-10 ">
                            Vår reise begynte med en lidenskap for mat og et
                            ønske om å bringe våre tradisjoner til Norge. Som en
                            familie med røtter fra både Syria og Kurdistan,
                            ønsket vi å skape et sted hvor vi kunne dele våre
                            favorittretter og kultur med det norske folk.
                        </p>
                    </li>
                    <li className="my-10 pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Møt vårt team
                        </h2>
                        <p className="indent-8 px-2 md:px-10 ">
                            Vårt team består av erfarne kokker og vennlige
                            medarbeidere som alle deler en felles kjærlighet for
                            god mat og gjestfrihet. Sammen arbeider vi for å gi
                            deg den beste opplevelsen hver gang du besøker oss.
                        </p>
                        <div className="flex items-start justify-start flex-wrap ps-10">
                            <Image
                                className="  max-w-[15rem] object-cover bg-center brightness-90 rounded-lg opacity-90 md:m-4 mt-8 "
                                src="/images/home/image-1.png"
                                width={1000}
                                height={300}
                                alt=" Et bilde av våre koleger i Tarbush Restaurant."
                            ></Image>
                            <Image
                                className="  max-w-[15rem]  object-cover bg-center brightness-90 rounded-lg opacity-90 md:m-4 mt-8 "
                                src="/images/home/image-2.png"
                                width={1000}
                                height={300}
                                alt="Et bilde av en av våre kokker i Tarbush Restaurant."
                            ></Image>{" "}
                            <Image
                                className=" max-w-[15rem] object-cover bg-center brightness-90 rounded-lg opacity-90 md:m-4 mt-8 "
                                src="/images/home/image-3.png"
                                width={1000}
                                height={300}
                                alt=" Et ramme bilde av en av våre kolleger i Tarbush Restaurant."
                            ></Image>
                        </div>
                    </li>{" "}
                    <li className="my-10 pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Hvor vi befinner oss ?
                        </h2>
                        <p className="indent-8 px-2 md:px-10 ">
                            Du finner oss midt i hjertet av Trondheim, akuratt
                            på
                            <strong> Ivar Lykkes veg 4, 7075 Tiller</strong>. Vi
                            er åpne <strong>hverdag</strong> og er klare til å
                            ta imot dere.
                            <Link
                                href="/info"
                                className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                            >
                                les mer om våre åpningstider og hvor vi brfinner
                                oss på kartet.
                            </Link>
                        </p>
                    </li>{" "}
                    <li className="my-10 pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Kontakt informasjon
                        </h2>
                        <div>
                            <div className="">
                                <h3 className="font-normal">
                                    Telefonnummer: <stron>+47 929 27 015</stron>
                                </h3>
                                <h3 className="font-normal">
                                    E-post:{" "}
                                    <stron>
                                        E-post er ikke tilgjengelig enda{" "}
                                    </stron>
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li className="my-10 pl-4">
                        <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5"></div>
                        <h2 className="mb-5 text-lg font-bold leading-none text-white pt-1">
                            Finn oss på Sosiale Medier
                        </h2>
                        <div className="flex gap-4 pt-5 flex-wrap pb-20 items-center">
                            <Link
                                className=" hover:text-green-500 transition-all duration-300 text-4xl"
                                href="https://no.tripadvisor.com/Restaurant_Review-g27968460-d27960509-Reviews-Tarbush-Tiller_Trondheim_Municipality_Trondelag_Central_Norway.html"
                            >
                                <FaTripadvisor />
                            </Link>
                            <Link
                                className=" hover:text-blue-500 transition-all duration-300 text-4xl"
                                href="https://www.facebook.com/profile.php?id=61559120927290"
                            >
                                <FaFacebookSquare />
                            </Link>
                            <Link
                                className=" hover:text-orange-700 transition-all duration-300 text-4xl"
                                href="https://www.instagram.com/tarbush___res/"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className=" hover:text-red-500 transition-all duration-300 text-4xl"
                                href="https://www.tiktok.com/@tarbush.restaurant"
                            >
                                <AiFillTikTok />
                            </Link>
                            <Link
                                className=" hover:text-yellow-300 transition-all duration-300 text-4xl"
                                href="https://www.snapchat.com/add/tarbusrs?sender_web_id=cefb212a-2d5a-4bae-b800-784b6f1d6bdc&device_type=desktop&is_copy_url=true"
                            >
                                <FaSnapchatSquare />
                            </Link>
                            <Link
                                className=" hover:text-red-500 transition-all duration-300 text-4xl"
                                href="https://www.yelp.no/biz/tarbush-tiller"
                            >
                                <FaYelp />
                            </Link>
                        </div>
                    </li>
                </ol>
            </main>
        </>
    );
}
