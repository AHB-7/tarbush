"use client";

import React from "react";
import Link from "next/link";
import { menuSlide, slideIt } from "../../func/navanimation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
    FaFacebookSquare,
    FaInfoCircle,
    FaInstagram,
    FaMapMarkedAlt,
    FaSnapchatSquare,
    FaTripadvisor,
    FaYelp,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Sosialemedier from "./socialMedia";
import { TfiInfo } from "react-icons/tfi";
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Menu = React.forwardRef(({ setActive }, ref) => {
    const pathname = usePathname();
    const navItems = [
        {
            title: "Tarbush",
            href: "/",
        },
        {
            title: "Meny",
            href: "/meny",
        },
        {
            title: "Om...",
            href: "/om",
        },
        // {
        //     title: "Om...",
        //     href: "/om",
        // },
    ];

    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="h-screen flex flex-col justify-between max-w-[20rem] fixed top-0 right-0 bg-zinc-950 z-10 pt-36 overflow-auto"
            ref={ref}
        >
            <div className="flex flex-col">
                <div className="pl-16 pr-24">
                    <p className="text-xs relative text-gray-400 font-semibold mb-10 underline underline-offset-4">
                        Navigation
                    </p>
                    {navItems.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <motion.p
                                variants={slideIt}
                                custom={index}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                onClick={() => setActive(false)}
                                className={clsx(
                                    `tracking-wider hover:text-red-500 transition-colors duration-300 py-2 text-4xl font-extrabold ${
                                        pathname === item.href
                                            ? "text-red-500"
                                            : "text-white"
                                    }`
                                )}
                            >
                                {item.title}
                            </motion.p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 pl-16 pt-4 mb-auto">
                <Link
                    href="/leie"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-sm text-gray-200 font-extrabold duration-300 ${
                            pathname === "/gallery" ? "text-red-500" : ""
                        }`
                    )}
                >
                    Leie locale
                </Link>
                <Link
                    href="/events"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-sm text-gray-400 font-extrabold duration-300 ${
                            pathname === "/events" ? "text-red-500" : ""
                        }`
                    )}
                >
                    Events
                </Link>
                <Link
                    href="/blog"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-sm text-gray-400 font-extrabold duration-300 ${
                            pathname === "/blog" ? "text-red-500" : ""
                        }`
                    )}
                >
                    Blog
                </Link>
            </div>
            <div className="flex items-center justify-center my-auto flex-col gap-4">
                <Link href="/info" className=" w-44">
                    <div className=" border px-2 py-1 rounded-md font-extrabold flex items-start gap-2 justify-center">
                        <FaMapMarkedAlt className="text-2xl  text-red-500" />
                        <p>Info</p>
                        <IoIosTime className="text-2xl text-red-500" />
                    </div>
                </Link>
                <Link href="/kontakt" className=" w-44">
                    <div className=" border px-2 py-1 rounded-md font-extrabold flex items-start gap-2 justify-center">
                        <MdEmail className="text-2xl  text-red-500" />
                        <p>Kontakt</p>
                        <FiPhoneCall className="text-2xl text-red-500" />
                    </div>
                </Link>
            </div>
            <h3 className="text-md font-bold text-center text-gray-400">
                Social Media
            </h3>

            <Sosialemedier />
            <div className="mt-auto">
                <p className="text-xs text-gray-400 text-center w-44 mx-auto py-4">
                    © 2024 Tarbush Restaurant. All rights reserved.
                </p>
            </div>
        </motion.div>
    );
});

Menu.displayName = "Menu";

export default Menu;
