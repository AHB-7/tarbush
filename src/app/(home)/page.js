"use client";

import Banner from "@/components/home/banner";
import Countdown from "@/components/home/time";
import { bannerSection } from "@/services/index";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        fetchBanner();
    }, []);
    const fetchBanner = async () => {
        const res = await bannerSection();
        setData(res);
        return;
    };
    return (
        <>
            <Banner data={data?.banners[0]} />
            <Countdown />
        </>
    );
}
