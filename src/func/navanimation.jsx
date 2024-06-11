import { easeInOut } from "framer-motion";

export const menuSlide = {
    initial: {
        x: "100%",
    },
    enter: {
        x: "0%",
        transition: { duration: 0.8, ease: [0.74, 0, 0.24, 1] },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.8, ease: [0.74, 0, 0.24, 1] },
    },
};
export const slideIt = {
    initial: {
        x: "80%",
    },
    enter: (i) => ({
        x: "0%",
        transition: { duration: 0.8, ease: [0.74, 0, 0.24, 1] },
    }),
    exit: (i) => ({
        x: "80%",
        transition: { duration: 0.8, ease: [0.74, 0, 0.24, 1] },
    }),
};
