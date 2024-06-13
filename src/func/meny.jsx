import { easeIn, easeInOut } from "framer-motion";

export const roudIt = {
    initial: {
        rotate: 0,
    },
    enter: (i) => ({
        rotate: 0,
        transition: { duration: 1, easeIn },
    }),
    exit: (i) => ({
        rotate: 360,
        transition: { duration: 1, easeInOut },
    }),
};
