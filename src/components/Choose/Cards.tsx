"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import "swiper/swiper.min.css";

export const Cards = (): JSX.Element => {

    const slides = ["a", "b", "c", "d"];

    let [current, setCurrent] = useState(0);
    const [shouldNotSwipe, setShouldNotSwipe] = useState(false);

    const toggleSwipping = () => {
        setShouldNotSwipe(!shouldNotSwipe);
    }

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,

        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    // const handleScroll = () => {
    //     const position = window.pageXOffset;
    //     console.log(position);
    //     // setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    let handleOnScroll = () => {
        console.log("scroll");
        // setCurrent(1);
    };

    return (
        <div className="self-stretch mt-9 pr-6 max-md:max-w-full max-md:pr-5 overflow-hidden">
            <Swiper
                pagination={{ type: "bullets", clickable: true }}
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1.07}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div
                        className="items-center border flex w-full max-w-[321px] ml-5 grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                        />
                        <div className="justify-center items-center self-stretch flex flex-col mt-5">
                            <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                Loan Disbursal in 48 Hours
                            </div>
                            <div className="text-white text-center text-xs self-stretch mt-1.5">
                                Assistance from start to end for a hassle-free experience
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                        <img
                            loading="lazy"
                            srcSet="/img/kjdfhldfesbghj-1.png"
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                        />
                        <div className="justify-center items-center self-stretch flex flex-col mt-5">
                            <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                24x7 Customer Support
                            </div>
                            <div className="text-white text-center text-xs self-stretch mt-1.5">
                                Get a dedicated Customer Relationship Officer
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                        <img
                            loading="lazy"
                            srcSet="/img/toto97-1.png"
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                        />
                        <div className="justify-center items-center self-stretch flex flex-col mt-5">
                            <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                Quick & Easy Process
                            </div>
                            <div className="text-white text-center text-xs self-stretch mt-1.5">
                                A  hassle-free experience with start to end assistance provided
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                        <img
                            loading="lazy"
                            srcSet="/img/wepik-export-20231010113226nog9-1.png"
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                        />
                        <div className="justify-center items-center self-stretch flex flex-col mt-5">
                            <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                Help with Documentation
                            </div>
                            <div className="text-white text-center text-xs self-stretch mt-1.5">
                                Doorstep service for document collection to expedite loan disbursal
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div id="carouselScroll" className="carousel relative shadow-2xl overflow-auto">
                <div className="carousel-inner relative w-full flex transition ease-out duration-40"
                    style={{
                        transform: `translateX(-${current * 90}%)`,
                    }}
                >
                    <div className="carousel-item static opacity-100 h-full">
                        <div className="flex flex-row items-stretch w-[82%] max-md:w-full max-md:ml-0 gap-5">

                            <div
                                onPointerEnter={() => setCurrent(0)}
                                onPointerLeave={() => setCurrent(0)}
                                className="items-center border flex w-full max-w-[321px] ml-5 grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>

                            <div
                                onPointerEnter={() => setCurrent(1)}
                                onPointerLeave={() => setCurrent(1)}
                                id="item2" className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                                <img
                                    loading="lazy"
                                    srcSet="/img/kjdfhldfesbghj-1.png"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        24x7 Customer Support
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Get a dedicated Customer Relationship Officer
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                <div
                                    onPointerEnter={() => setCurrent(2)}
                                    onPointerLeave={() => setCurrent(2)}
                                    className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/toto97-1.png"
                                        className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                    />
                                    <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                        <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                            Quick & Easy Process
                                        </div>
                                        <div className="text-white text-center text-xs self-stretch mt-1.5">
                                            A  hassle-free experience with start to end assistance provided
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                <div
                                    onPointerEnter={() => setCurrent(3)}
                                    onPointerLeave={() => setCurrent(3)}
                                    className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/wepik-export-20231010113226nog9-1.png"
                                        className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                    />
                                    <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                        <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                            Help with Documentation
                                        </div>
                                        <div className="text-white text-center text-xs self-stretch mt-1.5">
                                            Doorstep service for document collection to expedite loan disbursal
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>

            </div>
            <div className="mt-10 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            id={"circle" + i}
                            className={`rounded-full w-2 h-2 mt-2 cursor-pointer  ${i == current ? "bg-white w-3 h-3 mt-[6px]" : "bg-gray-500"
                                }`}
                        ></div>
                    );
                })}
            </div> */}
        </div>
    )
};




