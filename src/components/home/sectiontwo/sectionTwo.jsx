import FeedbackSection from "./FeedbackSection";
import React, { useRef } from "react";
import useIntersectionObserver from "../../../func/observer";
import { motion } from "framer-motion";

export default function Page() {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef);
    return (
        <>
            <div className="flex items-center justify-center relative w-auto h-[50rem]">
                <div
                    className="-z-10 w-full absolute h-full bg-fixed bg-cover bg-center bg-no-repeat filter brightness-50 blur-sm saturate-1"
                    style={{
                        backgroundImage: `url(/images/bg.jpg)`,
                    }}
                ></div>
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 50,
                    }}
                    transition={{ duration: 0.5 }}
                    className=" bg-zinc-900 w-fit rounded-md bg-opacity-85 z-20 px-4 xl:px-52 mt-6 mb-10 mx-auto container flex flex-col items-center justify-center"
                >
                    <FeedbackSection />
                </motion.div>
            </div>
        </>
    );
}
