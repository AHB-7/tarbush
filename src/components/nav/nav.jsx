"use client";

import { useState, useEffect, useRef } from "react";
import nav from "../../styles/nav.module.css";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import Logo from "../home/logo";

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
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isActive]);

    return (
        <nav>
            <div
                className={nav.btn}
                onClick={() => {
                    setActive((prevActive) => !prevActive);
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
            <Logo />
        </nav>
    );
}
