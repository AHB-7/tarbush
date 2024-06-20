import React, { useState, useEffect } from "react";
import StarDisplay from "./StarDisplay";
import {
    FaChevronLeft,
    FaChevronRight,
    FaGripLinesVertical,
} from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { MdFormatQuote } from "react-icons/md";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const FeedItemCarousel = ({ feedItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? feedItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === feedItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change the interval as needed

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div id="default-carousel" className="" data-carousel="slide">
            {feedItems.length > 0 && (
                <>
                    <div className=" h-64">
                        {feedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`duration-400 ease-in-out w-full h-full flex items-center justify-center flex-col ${
                                    index === currentIndex ? "block" : "hidden"
                                }`}
                                data-carousel-item
                            >
                                <div className="max-w-[36rem] flex items-center justify-center flex-col min-h-[10rem]">
                                    <p className="italic text-center relative px-3">
                                        <IoMdQuote className="text-xl absolute -ms-4 md:-ms-10 -mt-4" />
                                        {item.content}
                                    </p>

                                    <div className="max-w-[36rem] font-thin ms-auto mt-2">
                                        <p className=" text-gray-300 text-end">
                                            {item.feedbackName}
                                        </p>
                                        <p className="text-gray-300 text-xs text-end">
                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <p className="py-3 mt-1">
                                        <StarDisplay rating={item.stars} />
                                    </p>
                                </div>
                                <div className="flex items-center justify-center w-full gap-4">
                                    {feedItems.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`w-1/5 justify-center flex items-center h-1 ${
                                                index === currentIndex
                                                    ? "bg-white"
                                                    : "bg-gray-500"
                                            }`}
                                            aria-current={
                                                index === currentIndex
                                            }
                                            aria-label={`Slide ${index + 1}`}
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex justify-center items-center mx-auto max-w-[12rem]">
                        <button
                            type="button"
                            className="z-30 me-auto"
                            data-carousel-prev
                            onClick={handlePrev}
                        >
                            <FaCircleChevronLeft className="text-2xl text-white" />
                        </button>
                        <div className=" z-30 flex justify-center align-middle max-w-[36rem]">
                            {feedItems.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={` min-w-[14rem] flex items-center h-1 rounded-full ${
                                        index === currentIndex
                                            ? "bg-white"
                                            : "bg-gray-500"
                                    }`}
                                    aria-current={index === currentIndex}
                                    aria-label={`Slide ${index + 1}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></button>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="z-30 ms-auto"
                            data-carousel-next
                            onClick={handleNext}
                        >
                            <FaCircleChevronRight className="text-2xl text-white" />
                        </button>
                    </div> */}
                </>
            )}
        </div>
    );
};

export default FeedItemCarousel;
