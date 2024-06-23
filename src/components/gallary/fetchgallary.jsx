"use client";
import Image from "next/image";
import { fetchGalleryById } from "../../services/index";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Link from "next/link";
import Loading from "../loading";

const GalleryDetailPage = ({ params }) => {
    const { id } = params;
    const [gallery, setGallery] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const galleryData = await fetchGalleryById(id);
            setGallery(galleryData);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <Loading className="h-screen" />;
    }

    if (!gallery) {
        return <div className="h-screen">Gallery not found</div>;
    }

    const formattedDate = new Date(gallery.publishedAt).toLocaleDateString();

    return (
        <div>
            <div
                className="-z-10 w-full fixed h-full bg-fixed bg-cover bg-center bg-no-repeat filter brightness-50 saturate-1 saturate-0 blur"
                style={{
                    backgroundImage: `url(${gallery.resImage[0].url})`,
                }}
            ></div>
            <div className="mx-auto px-4 gap-4 container w-11/12 md:w-7/12 md:p-0 md:pb-3 flex flex-col items-center justify-center">
                <div className=" w-screen px-12 md:w-10/12">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="w-full mt-24 max-h-[30rem] lg:h-[30rem] "
                    >
                        {gallery.resImage.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image.url}
                                    alt={`${gallery.title} image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="mx-0"
                                    layout="responsive"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <p className="self-end font-thin text-xs">
                    Publisert: {formattedDate}
                </p>
                <div className="bg-zinc-900 bg-opacity-80 flex flex-col p-2 rounded-md pt-14">
                    <h1 className="text-2xl self-start md:text-3xl bg-white font-bold text-red-500 p-2 rounded-lg my-2">
                        {gallery.title}
                    </h1>
                    <p className="self-start font-thin text-justify py-4">
                        {gallery.text}
                    </p>
                    <div className="text-center my-14">
                        <Link
                            href="/blog"
                            className="px-7 font-normal relative text uppercase py-2.5 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
                        >
                            Andre gallerier
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetailPage;
