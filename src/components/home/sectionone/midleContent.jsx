import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MidleBar() {
    return (
        <div>
            <div className=" flex flex-col items-center gap-2 backdrop-blur-sm shadow-md px-2 py-10 md:p-10 rounded-lg relative">
                <motion.div
                    animate={{ opacity: [0, 1], translateY: [100, 0] }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                    className="bg-white text-red-500 mb-4 p-2 rounded-lg"
                >
                    <h1
                        className={`font-extrabold text-brand-400 text-4xl md:text-7xl uppercase`}
                    >
                        Velkommen til
                    </h1>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: [0, 1],
                        translateX: [200, 0],
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    className="bg-red-500 text-white mb-4 p-2 rounded-lg"
                >
                    <h2
                        className={`font-extrabold text-brand-400 text-4xl md:text-7xl uppercase`}
                    >
                        Tarbush
                    </h2>
                </motion.div>
            </div>
            <motion.div
                animate={{ opacity: [0.6, 1] }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.4,
                }}
                className="pb-8 pt-12"
            >
                <Link
                    href="/meny"
                    className="px-7 relative text uppercase py-2 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none hover:scale-105 rounded-md transition-all duration-300  hover:text-white hover:bg-red-600 focus:text-white focus:bg-gradient-to-b focus:from-red-700 focus:to-red-900 focus:border-white focus:border"
                >
                    <div className="h-5 w-5 bg-red-500 absolute -right-2 -top-2 rounded-full animate-ping -z-10"></div>
                    Vår Meny
                </Link>
            </motion.div>
        </div>
    );
}
