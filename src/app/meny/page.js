"use client";

import Header from "@/components/meny/header";
import Meny from "@/components/meny/menCards";
import { menyItems } from "@/services";
import { useEffect, useState } from "react";

export default function MenyPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchMenyData = async () => {
            const res = await menyItems();
            setData(res.menies);
        };
        fetchMenyData();
    }, []);

    return (
        <>
            <Header />
            <Meny data={data} />
        </>
    );
}
