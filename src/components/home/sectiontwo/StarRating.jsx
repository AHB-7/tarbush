import React from "react";
import { AiFillHeart } from "react-icons/ai";

const StarRating = ({ rating, setRating }) => {
    const handleClick = (value) => {
        setRating(value);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1px",
            }}
        >
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    filled={star <= rating}
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
};

const Star = ({ filled, onClick }) => (
    <AiFillHeart
        onClick={onClick}
        className="hover:scale-110 transition-all duration-300 ease-in-out"
        style={{
            cursor: "pointer",
            color: filled ? "red" : "gray",
            fontSize: "40px",
            margin: "15px 0  15px 0",
            transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (
            (e.currentTarget.style.color = "red"),
            (e.currentTarget.style.transform = "scale(1.2)")
        )}
        onMouseOut={(e) => (
            (e.currentTarget.style.color = filled ? "red" : "gray"),
            (e.currentTarget.style.transform = "scale(1)")
        )}
    />
);

export default StarRating;
