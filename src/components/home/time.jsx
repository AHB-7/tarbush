import React, { useState, useEffect } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date();
        targetDate.setMonth(5); // Months are zero-indexed (0 = January, 5 = June)
        targetDate.setDate(14); // Day of the month
        targetDate.setHours(16); // 16:00 hours (4:00 PM)
        targetDate.setMinutes(0);
        targetDate.setSeconds(0);
        targetDate.setMilliseconds(0);

        const now = new Date();

        // If the target date is in the past, add a year to the target date
        if (now > targetDate) {
            targetDate.setFullYear(targetDate.getFullYear() + 1);
        }

        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="w-full p-7 text-center bg-black rounded-lg bg-opacity-65">
            <h2 className="pb-2 text-3xl font-thin">Grand Åpning</h2>
            <p className=" font-bold text-xl bg-gradient-to-r from-slate-50 to-red-700 bg-clip-text text-transparent">
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes}{" "}
                Minutes {timeLeft.seconds} Seconds
            </p>
        </div>
    );
};

export default Countdown;
