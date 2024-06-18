import React from "react";
import { AiFillHeart } from "react-icons/ai";

const StarDisplay = ({ rating }) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} filled={star <= rating} />
            ))}
        </div>
    );
};

const Star = ({ filled }) => (
    <AiFillHeart
        style={{
            color: filled ? "red" : "gray",
            fontSize: "30px",
        }}
    />
);

export default StarDisplay;
