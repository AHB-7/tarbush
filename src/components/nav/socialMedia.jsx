"use client";

import Link from "next/link";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function SosiaclMedia() {
    return (
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
        </div>
    );
}
