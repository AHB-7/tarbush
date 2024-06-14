import Image from "next/image";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";

export default function Box() {
    return (
        <>
            {" "}
            <Link
                href="/adresse"
                className="size-24 bg-opacity-75 bg-teal-950 border  rounded-lg text-center justify-center items-center flex flex-col gap-2 p-2 hover:bg-red-950 transition-all duration-300 shadow-inner hover:shadow-xl text-white"
            >
                <FaMapMarkedAlt className=" text-xl" />
                <p className=" font-thin">Finn Oss</p>
            </Link>{" "}
            <Link
                href="/kontakt"
                className="size-24 bg-opacity-75 bg-red-950 border rounded-lg text-center justify-center items-center flex flex-col gap-2 p-2 hover:bg-teal-900 transition-all duration-300 shadow-inner hover:shadow-xl text-white"
            >
                <MdCall className=" text-xl" />
                <p className=" font-thin">Ring Oss</p>
            </Link>
        </>
    );
}
