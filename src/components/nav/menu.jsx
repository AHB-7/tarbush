"use client";

import React from "react";
import Link from "next/link";
import { menuSlide, slideIt } from "../../func/navanimation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
    FaFacebookSquare,
    FaInstagram,
    FaSnapchatSquare,
    FaTripadvisor,
    FaYelp,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

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
            <div className=" bottom-8">
                <h3 className="text-md font-bold text-center text-gray-400">
                    Social Media
                </h3>
                <div className="text-white flex justify-center items-end gap-2 text-xl border-t border-b mx-12 py-2">
                    <Link
                        className=" hover:text-green-500 transition-all duration-300"
                        href="https://www.tiktok.com/@tarbush.restaurant"
                    >
                        <FaTripadvisor />
                    </Link>
                    <Link
                        className=" hover:text-blue-500 transition-all duration-300"
                        href="https://www.facebook.com/profile.php?id=61559120927290"
                    >
                        <FaFacebookSquare />
                    </Link>
                    <Link
                        className=" hover:text-orange-700 transition-all duration-300"
                        href="https://www.instagram.com/tarbush___res/"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        className=" hover:text-red-500 transition-all duration-300"
                        href="https://www.tiktok.com/@tarbush.restaurant"
                    >
                        <AiFillTikTok />
                    </Link>
                    <Link
                        className=" hover:text-yellow-300 transition-all duration-300"
                        href="https://www.tiktok.com/@tarbush.restaurant"
                    >
                        <FaSnapchatSquare />
                    </Link>
                    <Link
                        className=" hover:text-red-500 transition-all duration-300"
                        href="https://www.tiktok.com/@tarbush.restaurant"
                    >
                        <FaYelp />
                    </Link>
                </div>
            </div>
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
