// // pages/_app.js
// import "../styles/globals.css";
// import { useEffect, useRef } from "react";

// function MyApp({ Component, pageProps }) {
//     const currentSectionIndex = useRef(0);

//     useEffect(() => {
//         const sections = document.querySelectorAll(".section");

//         const handleScroll = (event) => {
//             if (event.deltaY > 0) {
//                 // Scroll down
//                 currentSectionIndex.current = Math.min(
//                     sections.length - 1,
//                     currentSectionIndex.current + 1
//                 );
//             } else {
//                 // Scroll up
//                 currentSectionIndex.current = Math.max(
//                     0,
//                     currentSectionIndex.current - 1
//                 );
//             }
//             sections[currentSectionIndex.current].scrollIntoView({
//                 behavior: "smooth",
//             });
//         };

//         window.addEventListener("wheel", handleScroll);

//         return () => {
//             window.removeEventListener("wheel", handleScroll);
//         };
//     }, []);

//     return <Component {...pageProps} />;
// }

// export default MyApp;
