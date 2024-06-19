import React, { useState, useEffect } from "react";
import StarDisplay from "./StarDisplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    }, [currentIndex]);

    return (
        <div id="default-carousel" className="" data-carousel="slide">
            {feedItems.length > 0 && (
                <>
                    <div className="">
                        {feedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`duration-100 ease-in-out w-full h-full ${
                                    index === currentIndex ? "block" : "hidden"
                                }`}
                                data-carousel-item
                            >
                                <div className="border p-2 mb-2 rounded-md w-fit">
                                    <p>Name: {item.feedbackName}</p>
                                    <p>Title: {item.title}</p>
                                    <p>Content: {item.content}</p>
                                    <p>
                                        {new Date(
                                            item.createdAt
                                        ).toLocaleString()}
                                    </p>
                                    <p>
                                        <StarDisplay rating={item.stars} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center w-full">
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
