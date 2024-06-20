// hooks/useIntersectionObserver.js
import { useEffect, useState } from "react";

const useIntersectionObserver = (elementRef) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef]);

    return isIntersecting;
};

export default useIntersectionObserver;
