"use client";

import { useState, useEffect, useRef } from "react";
import nav from "@/styles/nav.module.css";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isActive, setActive] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive]);

    return (
        <nav>
            <div
                className={nav.btn}
                onClick={() => {
                    setActive(!isActive);
                }}
            >
                <div
                    className={`${nav.burger} ${
                        isActive ? nav.burgerActive : ""
                    }`}
                ></div>
            </div>
            <AnimatePresence>
                {isActive && <Menu ref={menuRef} setActive={setActive} />}
            </AnimatePresence>
        </nav>
    );
}
