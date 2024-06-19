import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdArticle, MdCall } from "react-icons/md";

export default function Box() {
    return (
        <motion.div
            className="flex justify-center items-center gap-2"
            animate={{ opacity: [0, 1], translateY: [100, 0] }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.6,
            }}
        >
            <Link
                href="/adresse"
                className="flex flex-col justify-center items-center rounded-full border-red-500 bg-red-500 hover:bg-white hover:text-red-500  bg-opacity-80 p-2 transition-all duration-300 ease-in-out"
            >
                <FaMapMarkedAlt className="text-xl" />
            </Link>
            <Link
                href="/kontakt"
                className="flex flex-col justify-center items-center  rounded-full border-red-500 bg-red-500 hover:bg-white hover:text-red-500  bg-opacity-80 p-2 transition-all duration-300 ease-in-out"
            >
                <MdCall className="text-xl" />
            </Link>{" "}
            <Link
                href="/kontakt"
                className="flex flex-col justify-center items-center  rounded-full border-red-500 bg-red-500 hover:bg-white hover:text-red-500  bg-opacity-80 p-2 transition-all duration-300 ease-in-out"
            >
                <MdArticle className="text-xl" />
            </Link>
        </motion.div>
    );
}
