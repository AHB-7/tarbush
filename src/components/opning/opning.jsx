import Link from "next/link";
import { BsPinMap } from "react-icons/bs";
import { HiOutlineGiftTop } from "react-icons/hi2";

export default function Opning() {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-fixed text-center bg-center"
            style={{
                backgroundImage: `url(/images/grillmat.png)`,
                height: "100vh",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div
                className="mx-auto max-w-md md:max-w-xl h-72 my-auto absolute bottom-0 left-0 right-0 top-0 verflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="text-white backdrop-blur-md p-5 md:p-10 rounded-xl">
                        <h1 className="mb-4 text-3xl pb-5">
                            🎉 Grand Åpning 🎉
                        </h1>
                        <h4 className="mb-6 text-xl text-left ">
                            Vi er begeistret for å kunngjøre den store åpningen
                            av Tarbush! Bli med oss den
                            <strong>14.06 kl. 16:00 </strong> for en feiring du
                            ikke vil gå glipp av. Vær der for å være vitne til
                            begynnelsen på noe ekstraordinært.
                        </h4>
                        <div className="text-left">
                            <Link
                                href="/adresse"
                                className="mb-1 flex items-center gap-2 text-blue-500 transition-all hover:text-blue-200"
                            >
                                <BsPinMap /> Ivar Lykkes veg 4, 7075 Tiller
                            </Link>
                            <p className="flex items-center gap-2">
                                <HiOutlineGiftTop /> 30% pp alt
                            </p>
                        </div>
                        <h4 className="pb-12 pt-6 text-xl text-center">
                            Vi gleder oss til å ønske deg <br /> Sees!
                        </h4>
                        <Link
                            href="/"
                            className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                        >
                            Hjem Side
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
