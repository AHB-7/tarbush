"use client";

import { bannerSection } from "../../services/index";
import { useEffect, useState } from "react";
import BannerPage from "../../components/home/BannerPage";
import Countdown from "@/components/home/time";

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
            <BannerPage data={data?.banners[0]} />
            <Countdown />
        </>
    );
}
