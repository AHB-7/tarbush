import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { rubik } from "../../ui/font";

export default function MidleBar() {
    return (
        <div className="text-white flex flex-col items-center gap-2 backdrop-blur-md px-3 py-10 md:p-10 rounded-lg relative">
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
            <div className=" -z-10 absolute top-0 left-0 bg-white w-full h-full bg-opacity-20 rounded-lg"></div>
            <h1
                className={`${rubik.className} bg-red-400 text-nowrap font-extrabold text-4xl  md:text-6xl uppercase mt-6 md:mt-12`}
            >
                Velkommen til
            </h1>
            <h2
                className={`${rubik.className} font-extrabold w-fit trabold text-red-400 bg-white mb-4 text-4xl md:text-6xl uppercase`}
            >
                Tarbush
            </h2>
            <Link
                href="/meny"
                className=" px-6 py-2 bg-black hover:bg-white hover:text-black transition-all text-white rounded-lg shadow-inner hover:shadow-xl duration-300"
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
