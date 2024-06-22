import OpningsTimes from "../../kontakt/opningstimes";
import Anonsment from "./Annonsment";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../../func/observer";
import { useRef } from "react";

export default function SectionThree() {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef);

    return (
        <div className="relative flex items-center justify-center mx-auto md:py-4 py-12">
            <div className="flex items-center justify-center h-[55rem]">
                <div
                    className="-z-10 w-full absolute h-full bg-fixed bg-cover bg-center bg-no-repeat filter brightness-50 blur-sm saturate-1"
                    style={{
                        backgroundImage: `url(/images/resin.jpg)`,
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
                    className=" md:flex md:items-center md:justify-center md:gap-12"
                >
                    <Anonsment />
                    <div className=" w-full flex items-center justify-center h-full">
                        <OpningsTimes />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
