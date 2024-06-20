"use client";
import Image from "next/image";
import { fetchGalleryById } from "../../services/index";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

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
        return <div>Loading...</div>;
    }

    if (!gallery) {
        return <div>Gallery not found</div>;
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
            <div className="mx-auto gap-4 container w-9/12 md:w-7/12 h-full overflow-hidden px-1 py-12 md:p-20 flex flex-col items-center justify-center">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-full mx-auto"
                >
                    {gallery.resImage.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image.url}
                                alt={`${gallery.title} image ${index + 1}`}
                                width={500}
                                height={500}
                                layout="responsive"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p className="self-end font-thin text-xs">
                    Publisert: {formattedDate}
                </p>
                <h1 className="text-2xl md:text-4xl bg-red-500 p-3 rounded-lg mt-3">
                    {gallery.title}
                </h1>
                <p className="self-start font-thin">
                    {gallery.text} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quae explicabo quod soluta in impedit
                    fugit saepe? Eveniet voluptates distinctio dolor fugiat a
                    adipisci vitae, veniam soluta maxime! Necessitatibus, facere
                    obcaecati. adipisicing elit. Quae explicabo quod soluta in
                    impedit fugit saepe? Eveniet voluptates distinctio dolor
                    fugiat a adipisci vitae, veniam soluta maxime!
                    Necessitatibus, facere obcaecati. adipisicing elit. Quae
                    explicabo quod soluta in impedit fugit saepe? Eveniet
                    voluptates distinctio dolor fugiat a adipisci vitae, veniam
                    soluta maxime! Necessitatibus, facere obcaecati. adipisicing
                    elit. Quae explicabo quod soluta in impedit fugit saepe?
                    Eveniet voluptates distinctio dolor fugiat a adipisci vitae,
                    veniam soluta maxime! Necessitatibus, facere obcaecati.
                </p>
            </div>
        </div>
    );
};

export default GalleryDetailPage;
