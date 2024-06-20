import FeedbackSection from "./FeedbackSection";
import React, { useRef } from "react";
import useIntersectionObserver from "../../../func/observer";
import { motion } from "framer-motion";

export default function Page() {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef);
    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="px-4 xl:px-52 mt-6 mb-10 mx-auto container flex flex-col items-center justify-center h-full w-full"
        >
            <FeedbackSection />
        </motion.div>
    );
}
