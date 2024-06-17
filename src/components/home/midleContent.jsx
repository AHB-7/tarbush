import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { rubik } from "../../ui/font";

export default function MidleBar() {
    return (
        <div className="text-white flex flex-col items-center shadow-lg shadow-zinc-700 gap-2 backdrop-blur-sm px-3 py-10 md:p-10 rounded-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/images/theTarbush.png"
                        alt="the tarbush of trondheim"
                        width={50}
                        height={50}
                    />
                </motion.div>
            </div>
            {/* <div className="bg-red-200 -z-10 absolute top-0 left-0 bg-brand w-full h-full bg-opacity-20 rounded-lg"></div> */}
            <div className="bg-red-600 mb-4 rounded-lg p-4">
                <h1
                    className={`${rubik.className} text-nowrap font-extrabold text-4xl md:text-6xl uppercase`}
                >
                    Velkommen til
                </h1>
            </div>
            <div className="bg-white text-red-600 mb-4 p-2 rounded-lg">
                <h2
                    className={`${rubik.className} font-extrabold w-fit trabold text-brand-400 text-4xl md:text-6xl uppercase`}
                >
                    Tarbush
                </h2>
            </div>

            <Link
                href="/meny"
                className="bg-gradient-to-b from-zinc-900 to-black shadow-md shadow-zinc-700 rounded-md transition-all duration-300 px-6 py-2"
            >
                Vår Meny
            </Link>
            {/* <div className=" -z-10 absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/images/bart.png"
                        alt="the tarbush of trondheim"
                        width={200}
                        height={50}
                    />
                </motion.div>
            </div> */}
        </div>
    );
}
