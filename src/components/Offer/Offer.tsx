
import React from "react";
import Image from 'next/image';

export const Offer = (): JSX.Element => {
    return (
        <section id="offer" className="relative self-stretch flex w-full flex-col pt-24 max-sm:pt-0 pb-20 px-20 max-sm:pb-0 max-md:max-w-full max-md:px-5  backdrop-blur-[80px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(80px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] offer-card">
            <div className="fixed hidden z-[1] lg:block w-[890px] h-[787px] top-[30px] left-[-500px] bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[300px]" />
            <div className="absolute hidden max-sm:block w-[282px] h-[787px] top-[10px] left-[-200px] bg-[#002a38] rounded-[624px] rotate-180 blur-[150px] opacity-50" />
            <div className=" relative self-center flex w-full max-w-[994px] flex-col max-md:max-w-full z-[2]">
                <div className="text-white text-center text-3xl max-sm:text-2xl [font-family:'General_Sans-Bold'] font-bold leading-10 uppercase self-center whitespace-nowrap max-sm:pt-[34px] max-sm:border-t-white max-sm:border-t-opacity-0 max-sm:border-t max-sm:border-transparent max-sm:[border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1]">
                    What We Offer
                </div>
                <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10 max-sm:mt-0">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="border flex grow flex-col w-full mx-auto pt-20 max-sm:pt-10 pb-6 px-5 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:mt-8 max-sm:mt-[34px] border-[#ffffff33] [background:linear-gradient(90deg,rgba(56,105,105,0.36)_0%,rgba(141.31,255,255,0.06)_97.47%)]">
                                <Image
                                    loading="lazy"
                                    src="/img/saving-money-1.png"
                                    alt="Saving Money"
                                    width={262}
                                    height={200}
                                    className="aspect-[1.04] object-contain object-center w-[262px] overflow-hidden self-center max-w-full max-sm:w-[162px]"
                                />
                                <div className="text-white text-2xl [font-family:'General_Sans-Regular'] max-sm:text-base max-sm:font-normal font-medium self-stretch mt-9 max-md:max-w-full max-sm:px-4 max-sm:pb-2 max-sm:mt-4">
                                    Loans for All kinds of used commercial vehicles (CV, Pickup,
                                    SCV, M&HCV, Tippers & more)
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-8 max-sm:mt-[16px]">
                                <div className="border self-stretch pl-7 pr-5 z-[1] py-6 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:pl-5 max-sm:p-4 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(56,105,105,0.36)_0%,rgba(141.31,255,255,0.06)_97.47%)]">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:flex-row">
                                        <div className="flex flex-col items-stretch w-[32%] max-sm:w-[25%] max-md:w-full max-md:ml-0">
                                            <Image
                                                loading="lazy"
                                                src="/img/icon22-1.png"
                                                alt="Refinancing Services"
                                                width={200}
                                                height={200}
                                                className="aspect-[1.41] lg:aspect-[1.2] object-contain object-center w-32 overflow-hidden max-w-full max-md:mt-10 max-sm:mt-[10px]"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch w-[68%] max-sm:w-[72%] ml-5 max-md:w-full max-md:ml-0 max-sm:m-[0px]">
                                            <div className="text-white text-2xl [font-family:'General_Sans-Regular'] max-sm:text-base max-sm:font-light max-sm:ml-5 font-medium w-[278px] max-w-[278px] my-auto max-md:mt-10 lg:mt-[-4px] max-sm:w-fit max-sm:mt-1">
                                                Refinancing Services for Existing Commercial Vehicles
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border self-stretch mt-12 z-[1] max-sm:mt-[16px] pl-6 pr-20 pt-1 pb-6 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:px-5 max-sm:p-5 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(56,105,105,0.36)_0%,rgba(141.31,255,255,0.06)_97.47%)]">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:flex-row">
                                        <div className="flex flex-col items-stretch w-[39%] max-sm:w-[25%] max-md:w-full max-md:ml-0">
                                            <Image
                                                loading="lazy"
                                                src="/img/24243242-2.png"
                                                alt="Loans with balance"
                                                width={133}
                                                height={100}
                                                className="aspect-[1.23] object-contain object-center w-[133px] overflow-hidden max-w-full max-md:mt-8 max-sm:mt-0"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch w-[61%] max-sm:w-[75%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="text-white text-2xl [font-family:'General_Sans-Regular'] max-sm:text-base max-sm:font-light max-sm:ml-5 font-medium w-[278px] max-w-[211px] my-auto max-md:mt-10 lg:mt-[25px] max-sm:my-[8px] max-sm:w-fit">
                                                Loans with Balance Transfer options
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border self-stretch mt-12 z-[1] max-sm:mt-[16px] pl-7 pr-5 pt-5 pb-8 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:pl-5 max-sm:p-4 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(56,105,105,0.36)_0%,rgba(141.31,255,255,0.06)_97.47%)]">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:flex-row">
                                        <div className="flex flex-col items-stretch w-[31%] max-sm:w-[25%] max-md:w-full max-md:ml-0">
                                            <Image
                                                loading="lazy"
                                                src="/img/7364-1.png"
                                                alt="Loans for first time buyers"
                                                width={124}
                                                height={100}
                                                className="aspect-[1.44] object-contain object-center w-[124px] overflow-hidden max-w-full max-md:mt-10 max-sm:mt-1"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch w-[69%] max-sm:w-[70%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="text-white text-2xl [font-family:'General_Sans-Regular'] max-sm:text-base max-sm:font-light max-sm:ml-5 font-medium w-[278px] max-w-[278px] my-auto max-md:mt-10 lg:mt-[10px] max-sm:w-fit max-sm:mt-2">
                                                Loans even for First time buyer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed hidden lg:block w-[890px] h-[787px] top-[30px] right-[-500px] bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[300px]" />
            <div className="absolute hidden max-sm:block w-[282px] h-[787px] top-[10px] right-[-200px] bg-[#002a38] rounded-[624px] rotate-180 blur-[150px] opacity-50" />
        </section>
    );
};