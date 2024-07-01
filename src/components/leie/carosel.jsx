"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty(
                "--progress",
                1 - progress
            );
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section className="h-screen mt-36 container mx-auto">
            <div className="flex items-start justify-center flex-wrap gap-16">
                <div className="text-center">
                    <h1 className="text-start max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Vi leier ut lokaler for alle anledninger!
                    </h1>
                    <p className="text-start max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Vi har lokaler for alle anledninger, bursdager,
                        konfirmasjoner, bryllup, firmafester, julebord, osv. For
                        mer informasjon, ta kontakt med oss.
                    </p>
                    <div className="w-full flex justify-center">
                        <Link
                            href="/meny"
                            className="px-7 relative text uppercase py-2 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300 hover:text-white hover:bg-red-600"
                        >
                            Kontakt oss
                        </Link>
                    </div>
                </div>
                <div className="h-full w-full max-w-[30rem]">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal-0.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal-1.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal-2.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal-3.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>{" "}
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal-4.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative h-96">
                                <Image
                                    src="/images/lockal/lokal.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="Et felles bilde av hele teamet vårt i Tarbush Restaurant."
                                />
                            </div>
                        </SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
