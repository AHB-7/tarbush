"use client";

import Link from "next/link";

import {
    FaFacebookSquare,
    FaInstagram,
    FaSnapchatSquare,
    FaTripadvisor,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYelp } from "react-icons/fa6";

export default function Sosialemedier() {
    return (
        <div className=" bottom-8">
            <div className="text-white flex justify-center items-end gap-2 text-xl border-t border-b mx-12 py-2">
                <Link
                    className=" hover:text-green-500 transition-all duration-300"
                    href="https://no.tripadvisor.com/Restaurant_Review-g27968460-d27960509-Reviews-Tarbush-Tiller_Trondheim_Municipality_Trondelag_Central_Norway.html"
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
                    href="https://www.snapchat.com/add/tarbusrs?sender_web_id=cefb212a-2d5a-4bae-b800-784b6f1d6bdc&device_type=desktop&is_copy_url=true"
                >
                    <FaSnapchatSquare />
                </Link>
                <Link
                    className=" hover:text-red-500 transition-all duration-300"
                    href="https://www.yelp.no/biz/tarbush-tiller"
                >
                    <FaYelp />
                </Link>
            </div>
        </div>
    );
}
