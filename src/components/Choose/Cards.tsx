import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Cards = (): JSX.Element => {

    return (
        <div className="self-stretch mt-9 pr-6 ml-5 max-md:max-w-full max-md:pr-5 max-sm:mt-[18px] overflow-hidden">
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
                        className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 cards">
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
        </div>
    )
};




