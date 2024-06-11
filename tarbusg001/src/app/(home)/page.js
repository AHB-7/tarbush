"use client";

import Banner from "@/components/home/banner";
import { bannerSection } from "@/services/index";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        bannerData();
    }, []);
    const bannerData = async () => {
        const res = await bannerSection();
        setData(res);
        return;
    };
    return (
        <>
            <Banner data={data?.banners[0]} />
        </>
    );
}
