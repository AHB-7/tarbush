"use client";

import React from "react";
import menuStyle from "../../styles/nav.module.css";
import Link from "next/link";
import { menuSlide, slideIt } from "../../func/navanimation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SosiaclMedia from "./socialMedia";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
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
            title: "Event",
            href: "/event",
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
            className="h-screen flex flex-col justify-between max-w-[20rem] fixed top-0 right-0 bg-zinc-950 z-10 pt-36"
            ref={ref}
        >
            <div className="flex flex-col">
                <div className="pl-16 pr-24">
                    <p className="text-xs relative text-gray-400 font-semibold mb-10 underline underline-offset-4">
                        Navigation
                    </p>
                    {navItems.map((item, index) => (
                        <Link href={`${item.href}`} key={index}>
                            <motion.p
                                variants={slideIt}
                                custom={index}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className={clsx(
                                    `hover:text-red-500 tracking-wider transition-colors duration-300 py-2 text-4xl font-extrabold ${
                                        pathname === item.href
                                            ? "text-red-500"
                                            : ""
                                    }`
                                )}
                                onClick={() => setActive(false)}
                            >
                                {item.title}
                            </motion.p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 justify-center mt-auto">
                <Link
                    href="/kontakt"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-xs text-gray-400 font-semibold duration-300 ${
                            pathname === "/kontakt" ? "text-red-500" : ""
                        }`
                    )}
                >
                    kontakt
                </Link>
                <Link
                    href="/adresse"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-xs text-gray-400 font-semibold duration-300 ${
                            pathname === "/adresse" ? "text-red-500" : ""
                        }`
                    )}
                >
                    Map
                </Link>
                <Link
                    href="/adresse"
                    className={clsx(
                        `hover:text-red-500 transition-colors text-xs text-gray-400 font-semibold duration-300 ${
                            pathname === "/adresse" ? "text-red-500" : ""
                        }`
                    )}
                >
                    Map
                </Link>
            </div>
            <div className=" bottom-8">
                <div className="flex justify-center items-end gap-2 text-xl border-t mx-12 pt-5">
                    <Link href="https://www.facebook.com/profile.php?id=61559120927290">
                        <FaFacebookSquare />
                    </Link>{" "}
                    <Link href="https://www.instagram.com/tarbush___res/">
                        <FaInstagram />
                    </Link>{" "}
                    <Link href="https://www.tiktok.com/@tarbush.restaurant">
                        <AiFillTikTok />
                    </Link>
                </div>

                <p className="text-xs text-gray-400 text-center w-44 mx-auto py-4">
                    © 2024 Tarbush Restaurant. All rights reserved.
                </p>
            </div>{" "}
        </motion.div>
    );
});

Menu.displayName = "Menu";

export default Menu;
