import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.3,
                }}
                className="bg-white mb-4 rounded-lg p-4"
            >
                <h1
                    className={` text-red-600 text-nowrap font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase`}
                >
                    Velkommen til
                </h1>
            </motion.div>
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
                className="bg-red-500 text-white mb-4 p-2 rounded-lg"
            >
                <h2
                    className={`font-extrabold w-fit trabold text-brand-400 text-3xl sm:text-5xl md:text-6xl uppercase`}
                >
                    Tarbush
                </h2>
            </motion.div>
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pt-2"
            >
                <Link
                    href="/meny"
                    className="bg-gradient-to-b text-black from-white to-slate-300 shadow-md shadow-zinc-800 hover:shadow-none hover:scale-105 rounded-md transition-all duration-300 px-6 py-2 hover:text-white hover:bg-gradient-to-b hover:from-red-600 hover:to-red-600 focus:text-white focus:bg-gradient-to-b focus:from-red-700 focus:to-red-900 focus:border-white focus:border"
                >
                    Vår Meny
                </Link>
            </motion.div>
        </div>
    );
}
