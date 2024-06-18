import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";

export default function Box() {
    return (
        <motion.div
            className="flex gap-2 md:gap-8 mt-0 md:mt-auto mb-0 md:mb-10"
            animate={{ opacity: [0, 1] }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1.5,
            }}
        >
            <Link
                href="/adresse"
                className="flex flex-col justify-center items-center gap-1 size-28 rounded-md bg-red-500 bg-opacity-60 text-white hover:text-red-500 hover:bg-white transition-all duration-300 focus:text-red-500 focus:bg-white focus:border-red-500 focus:border"
            >
                <FaMapMarkedAlt className=" text-4xl" />
                <p className=" font-semibold text-xl">Finn Oss</p>
            </Link>{" "}
            <Link
                href="/kontakt"
                className="flex flex-col justify-center items-center gap-1 size-28 rounded-md bg-red-500 bg-opacity-60 text-white hover:text-red-500 hover:bg-white transition-all duration-300 focus:text-red-500 focus:bg-white focus:border-red-500 focus:border"
            >
                <MdCall className=" text-4xl" />
                <p className=" font-semibold text-xl ">Ring Oss</p>
            </Link>
        </motion.div>
    );
}
