import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination} from 'swiper/modules';

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
                        <Image
                            loading="lazy"
                            src="/img/9c558a9c-5db9-4ee0-87be-f33490d26038.png"
                            alt="Loan Disbursal in 48 Hours"
                            width={152}
                            height={100}
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
                        <Image
                            loading="lazy"
                            src="/img/kjdfhldfesbghj-1.png"
                            alt={"24x7 Customer Support"}
                            width={152}
                            height={100}
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"                        />
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
                        <Image
                            loading="lazy"
                            src="/img/toto97-1.png"
                            alt="Quick & Easy Process"
                            width={152}
                            height={100}
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
                        <Image
                            loading="lazy"
                            src="/img/wepik-export-20231010113226nog9-1.png"
                            alt="Help with Documentation"
                            width={152}
                            height={100}
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




