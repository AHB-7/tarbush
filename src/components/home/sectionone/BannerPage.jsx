import Box from "./boxes";
import MidleBar from "./midleContent";
import { easeInOut, motion } from "framer-motion";
import React from "react";

export default function BannerPage() {
    return (
        <header className="overflow-x-hidden w-ful">
            <div>
                <div className=" bg-red-500 bg-opacity-50 md:h-12 h-32 text-center flex items-end justify-center md:items-center absolute top-0 left-0 w-full">
                    <p>
                        5.11.2024 - Kl. 18:00: Vi holder stengt på grunn av
                        spesielle arrangementer.
                    </p>
                </div>
            </div>
            <div className=" flex items-center h-screen justify-center text-center flex-col">
                <div
                    className="-z-10 absolute h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat filter brightness-50 saturate-0"
                    style={{
                        backgroundImage: `url(/images/grillmatt.webp)`,
                    }}
                ></div>
                <div className="mt-auto relative">
                    <div className="mb-6">
                        <MidleBar />
                    </div>
                </div>
                <Box />
                <div className="mt-auto text-4xl mb-5">
                    <div className="w-7 h-14 border-2 rounded-full relative flex justify-center">
                        <motion.div
                            className="w-5 h-5 bg-red-500 rounded-full bg-opacity-80"
                            animate={{ y: [3, 30, 3] }} // Animation keyframes
                            transition={{
                                repeat: Infinity,
                                duration: 2.4,
                                transition: easeInOut,
                            }}
                        ></motion.div>{" "}
                    </div>
                </div>
            </div>
        </header>
    );
}
