import React, { useState, useEffect } from "react";
import StarDisplay from "./StarDisplay";
import {
    FaChevronLeft,
    FaChevronRight,
    FaGripLinesVertical,
} from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { MdFormatQuote } from "react-icons/md";

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
                    <div className="">
                        {feedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`duration-400 ease-in-out w-full h-full flex items-center justify-center flex-col ${
                                    index === currentIndex ? "block" : "hidden"
                                }`}
                                data-carousel-item
                            >
                                <div className="max-w-[36rem] flex items-center justify-center flex-col">
                                    <p className="italic text-center relative">
                                        <IoMdQuote className="text-4xl absolute -ms-10 -mt-4" />
                                        {item.content}{" "}
                                    </p>
                                    <div className="max-w-[36rem] font-thin ms-auto me-4 mt-5">
                                        <p className=" text-gray-300">
                                            {item.feedbackName}
                                        </p>
                                        <p className="text-gray-300">
                                            {new Date(
                                                item.createdAt
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                    <p className="">
                                        <StarDisplay rating={item.stars} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center mx-auto max-w-[12rem]">
                        <button
                            type="button"
                            className="z-30 me-auto"
                            data-carousel-prev
                            onClick={handlePrev}
                        >
                            <FaChevronLeft />
                        </button>
                        <div className=" z-30 ">
                            {feedItems.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentIndex
                                            ? "bg-red-700"
                                            : "bg-red-100"
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
                            <FaChevronRight />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FeedItemCarousel;
