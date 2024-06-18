import { motion } from "framer-motion";

export function showup(x) {
    return {
        enter: {
            animate: { opacity: [0, 1] },
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: x,
            },
        },
    };
}
