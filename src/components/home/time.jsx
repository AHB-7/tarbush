import Link from "next/link";
import { useEffect, useState } from "react";

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

    const [timeLeft, setTimeLeft] = useState({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 10);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 10);

        return () => clearInterval(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="absolute top-0 w-full flex flex-col gap-7 py-7 align-middle text-center bg-black bg-opacity-65">
            <div>
                <h2 className="pb-2 text-3xl font-thin">Grand Åpning</h2>
                <p className="font-bold text-xl bg-gradient-to-r from-slate-50 to-red-700 bg-clip-text text-transparent">
                    {timeLeft.days} Days {timeLeft.hours} Hours{" "}
                    {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
                </p>
            </div>
            <div>
                <Link
                    href="/aapning"
                    className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                >
                    Les Mer!
                </Link>
            </div>
        </div>
    );
};

export default Countdown;
