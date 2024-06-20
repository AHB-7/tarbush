import OpningsTimes from "../../kontakt/opningstimes";
import Anonsment from "./Annonsment";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../../func/observer";
import { useRef } from "react";

export default function SectionThree() {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef);

    return (
        <div className="relative">
            <div className="flex items-center justify-center relative h-[55rem]">
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
                    className="container max-w-[60rem] flex items-center justify-center flex-wrap"
                >
                    <Anonsment />
                    <OpningsTimes />
                </motion.div>
            </div>
        </div>
    );
}
