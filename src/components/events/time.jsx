import Link from "next/link";
import { useEffect, useState } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 1); // Tomorrow's date
        targetDate.setHours(16); // 16:00 hours (4:00 PM)
        targetDate.setMinutes(0);
        targetDate.setSeconds(0);
        targetDate.setMilliseconds(0);

        const now = new Date();

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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div
            className="absolute top-0 w-full flex flex-col gap-7 py-7 align-middle text-center bg-white bg-opacity-85"
            style={{
                backgroundImage: `url(/images/eid2.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
            <div>
                <h2 className="pb-2 text-3xl font-semibold text-black">
                    Eid Events
                </h2>
                <p className="font-bold text-xl text-red-700 bg-clip-text text-transparent">
                    {timeLeft.days} Days {timeLeft.hours} Hours{" "}
                    {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
                </p>
            </div>
            <div>
                <Link
                    href="/events"
                    className="px-6 py-2 bg-black text-white hover:bg-white hover:text-black transition-all  rounded-lg shadow-inner hover:shadow-xl duration-300"
                >
                    Les Mer!
                </Link>
            </div>
        </div>
    );
};

export default Countdown;
