"use client";

import React from "react";
import menuStyle from "@/styles/nav.module.css";
import Link from "next/link";
import { menuSlide, slideIt } from "@/func/navanimation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Menu = React.forwardRef(({ setActive }, ref) => {
    const pathname = usePathname();
    const navItems = [
        {
            title: "home",
            href: "/",
        },
        {
            title: "Meny",
            href: "/meny",
        },
        {
            title: "Kontakt",
            href: "/kontakt",
        },
    ];

    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={menuStyle.menue}
            ref={ref}
        >
            <div className={menuStyle.body}>
                <div className="flex flex-col">
                    <div className={menuStyle.header}>
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
                                        `hover:text-red-500 transition-colors duration-300 ${
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
                    <div className={menuStyle.footer}>
                        <p className="text-xs text-gray-400 font-semibold">
                            Contact
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">
                            Map
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">
                            Privacy
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

Menu.displayName = "Menu";

export default Menu;
