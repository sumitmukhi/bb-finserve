import * as React from "react";

import { PropertyDefaultWrapper } from "../components/PropertyDefaultWrapper";
import { KeyboardArrowDown } from "../icons/KeyboardArrowDown";

export default function Home() {
    return (
        <div className="bg-neutral-950 flex flex-col overflow-hidden">
            <div className="absolute w-full h-[905px] top-[-700px]">
                <div className="w-full h-[905px] top-0 left-0 bg-[#002a38] rounded-[1134.5px/452.5px] blur-[500px]" />
            </div>
            <div className="fixed backdrop-blur-[25px] bg-white bg-opacity-0 self-stretch z-[1] flex w-full items-start justify-between gap-5 px-12 py-4 border-b-white border-b-opacity-0 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="flex items-start gap-2.5 self-start max-md:justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b458f3-bb37-45e5-a109-9294b7e4727d?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-[3.05] object-contain object-center w-[116px] overflow-hidden max-w-full self-end"
                    />
                    <div className="bg-white w-px h-2.5 mt-7 self-end" />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a87b99e-b0e7-4625-be86-9510d2a8612b?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-[6.85] object-contain object-center w-[89px] fill-white overflow-hidden max-w-full mt-6 self-end"
                    />
                </div>
                <div className="self-center flex w-[608px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                    <div className="text-white text-center text-base font-semibold self-start">
                        Home
                    </div>
                    <div className="text-stone-300 text-center text-base leading-6">
                        What We Offer
                    </div>
                    <div className="text-stone-300 text-center text-base leading-6">
                        Why Choose Us
                    </div>
                    <div className="text-stone-300 text-center text-base leading-6 self-start">
                        Policies
                    </div>
                    <div className="text-stone-300 text-center text-base leading-6 whitespace-nowrap self-start">
                        About Us
                    </div>
                </div>
                <div className="text-white text-base font-medium leading-4 self-stretch whitespace-nowrap justify-center items-center border w-[117px] max-w-full px-4 py-4 rounded-lg border-solid border-white border-opacity-20">
                    Contact Us
                </div>
            </div>
            <div className="flex-col overflow-hidden self-center relative flex min-h-[652px] w-full max-w-full mt-8 pt-96 pb-20 px-5 max-md:pt-24">
                <img
                    loading="lazy"
                    srcSet="img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 100w, 
          img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 200w, 
          img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 400w, 
          img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 800w, img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 1200w, img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 1600w, img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 2000w, img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png"
                    className="absolute min-h-[652px] w-[647px] object-cover object-center inset-0 m-auto"
                />
                <div className="relative text-white text-center text-6xl font-bold [font-family:'General_Sans-Bold',Helvetica] tracking-[1.50px] leading-[72px] uppercase self-stretch mr-0 -ml-9 max-md:max-w-full max-md:text-4xl">
                    Easy & Quick Loans
                    <br />
                    For used trucks
                </div>
                <div className="relative self-center flex w-[467px] max-w-full z-[1] items-start justify-between gap-5 mt-6 max-md:flex-wrap max-md:justify-center">
                    <div className="text-cyan-400 text-center text-base font-semibold tracking-[4.16px] uppercase">
                        Loan in 48 hrs
                    </div>
                    <div className="self-center flex w-1 h-1 flex-col my-auto rounded-[50%]" />
                    <div className="text-cyan-400 text-center text-base font-semibold tracking-[4.16px] uppercase self-stretch whitespace-nowrap">
                        Low Interest Rates
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-[190px] top-[496px]">
                <div className="w-full h-[190px] [background:linear-gradient(0deg,rgb(11,15,16)_0%,rgba(11,15,16,0)_100%)]" />
            </div>
            <div className="self-stretch z-[1] flex w-full pt-0 flex-col pb-16 px-20 border-b-white border-b-opacity-0 border-b border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:max-w-full max-md:px-5">
                <div className="justify-center items-center border self-center z-[1] flex w-12 max-w-full -m-8 flex-col p-2 rounded-[100px] border border-none border-transparent [border-image:linear-gradient(to_top,rgba(255,255,255,0.26),rgba(255,255,255,0))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
                    {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d823c37-acc9-4694-a384-8b1f61561699?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    /> */}
                    <KeyboardArrowDown className="!relative !w-[32px] !h-[32px]" color="white" />
                </div>
            </div>
            <div className="self-stretch flex w-full flex-col pt-24 pb-20 px-20 max-md:max-w-full max-md:px-5  backdrop-blur-[80px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(80px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]">
                <div className="self-center flex w-full max-w-[994px] flex-col max-md:max-w-full">
                    <div className="text-white text-center text-3xl font-bold leading-10 uppercase self-center whitespace-nowrap">
                        What We Offer
                    </div>
                    <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                <div className="border flex grow flex-col w-full mx-auto pt-20 pb-6 px-5 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:mt-8 border-[#ffffff33] [background:linear-gradient(90deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da496ecb-59af-46dd-846c-d02ab134e9a0?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                        className="aspect-[1.04] object-contain object-center w-[262px] overflow-hidden self-center max-w-full"
                                    />
                                    <div className="text-white text-2xl font-medium self-stretch mt-9 max-md:max-w-full">
                                        Loans for All kinds of used commercial vehicles (CV, Pickup,
                                        SCV, M&HCV, Tippers & more)
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
                                    <div className="border self-stretch pl-7 pr-5 py-6 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:pl-5 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23ef0778-9542-44e9-8f12-3387f688358b?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                                    className="aspect-[1.41] object-contain object-center w-32 overflow-hidden max-w-full max-md:mt-10"
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="text-white text-2xl font-medium w-[278px] max-w-[278px] my-auto max-md:mt-10">
                                                    Refinancing Services for Existing Commercial Vehicles
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border self-stretch mt-12 pl-6 pr-20 pt-1 pb-6 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:px-5 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84ee1d7b-f248-4988-8807-e420d0a1ea0e?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                                    className="aspect-[1.23] object-contain object-center w-[133px] overflow-hidden max-w-full max-md:mt-8"
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="text-white text-2xl font-medium w-[278px] max-w-[211px] my-auto max-md:mt-10">
                                                    Loans with Balance Transfer options
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border self-stretch mt-12 pl-7 pr-5 pt-5 pb-8 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:pl-5 border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1812dbd-006a-4011-b410-f9734d53d02b?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                                    className="aspect-[1.44] object-contain object-center w-[124px] overflow-hidden max-w-full max-md:mt-10"
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="text-white text-2xl font-medium w-[278px] max-w-[278px] my-auto max-md:mt-10">
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
            </div>
            <div className="w-full text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap mt-16 pt-16 max-md:mt-10 border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] ">
                Why Choose Us
            </div>
            <PropertyDefaultWrapper
                className="self-center w-[942px] max-w-full mt-20 px-5 max-md:mt-10"
                clipPathGroup="/img/clip-path-group.png"
                group="/img/group.png"
                groupClassName="bg-[url(../../public/img/vector-2.svg)]"
                img="img/rectangle-15.png"
                property1="default"
                rectangle="img/rectangle-14.png"
                rectangle1="img/rectangle-16.png"
                rectangle10="img/rectangle-25.png"
                rectangle11="img/rectangle-26.png"
                rectangle2="img/rectangle-17.png"
                rectangle3="img/rectangle-18.png"
                rectangle4="img/rectangle-19.png"
                rectangle5="img/rectangle-20.png"
                rectangle6="img/rectangle-21.png"
                rectangle7="img/rectangle-22.png"
                rectangle8="img/rectangle-23.png"
                rectangle9="img/rectangle-24.png"
            />
            {/* <div className="self-center w-[942px] max-w-full mt-20 px-5 max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex flex-col mt-2.5 max-md:mt-10">
                            <div className="self-stretch flex w-full items-start justify-between gap-5">
                                <div className="bg-cyan-400 flex w-1.5 h-[88px] flex-col grow shrink-0 basis-auto rounded-xl self-start" />
                                <div className="flex flex-col grow shrink-0 basis-auto mt-2 self-start">
                                    <div className="text-white text-2xl font-semibold self-stretch">
                                        Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-base self-stretch mt-6">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-14 max-md:mt-10">
                                <div className="bg-slate-500 flex w-1.5 h-8 flex-col grow shrink-0 basis-auto rounded-xl self-start" />
                                <div className="text-white text-2xl font-semibold grow shrink basis-auto mt-2 self-start">
                                    24x7 Customer Support
                                </div>
                            </div>
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-14 max-md:mt-10">
                                <div className="bg-slate-500 flex w-1.5 h-8 flex-col grow shrink-0 basis-auto rounded-xl self-start" />
                                <div className="text-white text-2xl font-semibold grow shrink basis-auto mt-2 self-start">
                                    Quick & Easy Process
                                </div>
                            </div>
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-14 max-md:mt-10">
                                <div className="bg-slate-500 flex w-1.5 h-8 flex-col grow shrink-0 basis-auto rounded-xl self-start" />
                                <div className="text-white text-2xl font-semibold grow shrink basis-auto mt-2 self-start">
                                    Help with Documentation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="opacity-10 blur-[5px] bg-cyan-200 flex w-full max-w-[390px] grow flex-col mx-auto pt-20 pb-20 px-20 rounded-[50%] max-md:mt-10 max-md:px-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69333ea4-2950-4855-9ddf-61cbe68419fa?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-[0.97] object-contain object-center w-full overflow-hidden self-stretch max-md:mx-px"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="self-stretch flex min-h-[97px] w-full flex-col mt-20 border-t-white border-t-opacity-0 border-t border-solid max-md:max-w-full max-md:mt-10 border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
            <div className="text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap max-md:mt-10">
                Our Policies
            </div>
            <div className="self-center flex w-full max-w-[1200px] items-start justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div className="border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-white max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d22575c-4da6-4cc9-878a-1e1795ada836?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full self-start"
                                />
                                <div className="text-white text-2xl font-medium self-start">
                                    Interest Rate Policy
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d386f0-465b-44f7-a1f4-3243979a9811?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div className="border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-white max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2771a70a-893e-4200-a65e-1cc6273e5597?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl font-medium self-center my-auto">
                                    Gradation of Risk
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f820c5c-89fc-4ec0-adfe-f2d5cadaa4bb?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center flex w-full max-w-[1200px] items-start justify-between gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div className="border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-white max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01be8c64-61f2-4a61-b105-ee20bae0c348?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl font-medium self-center grow shrink basis-auto my-auto">
                                    MITC and Schedule of Charges
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41546136-2f95-4000-997c-1ebda12426ba?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div className="border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-white max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c361e1-ecea-45b1-a023-02bde5ec279d?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl font-medium self-center my-auto">
                                    Fair Practices Code
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d6674a-cdbb-4392-b4b5-9dc5f0231801?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex min-h-[97px] w-full flex-col mt-36 border-t-white border-t-opacity-0 border-t border-solid border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:max-w-full max-md:mt-10" />
            <div className="text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap max-md:mt-10">
                About Us
            </div>
            <div className="self-center w-full max-w-[1197px] mt-16 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col w-full mx-auto p-5 rounded-3xl max-md:max-w-full max-md:mt-9 [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                                BlackBuck Finserve
                            </div>
                            <div className="text-black text-xl leading-8 self-stretch mt-2.5 max-md:max-w-full">
                                BlackBuck's latest venture, a non-banking financial service
                                provider, aims to provide financial solutions for truck owners
                                in India
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col w-full mx-auto p-5 rounded-3xl max-md:max-w-full max-md:mt-9 [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                                BlackBuck Finserve’s Speciality
                            </div>{" "}
                            <div className="text-black text-xl leading-8 self-stretch mt-2.5 max-md:max-w-full">
                                We specialize in providing loans tailored to the unique needs of
                                the trucking community, from small commercial vehicle fleet
                                operators to first-time buyers
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="items-start self-center flex w-full max-w-[1199px] flex-col mt-8 p-5 rounded-3xl max-md:max-w-full [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                <div className="text-black text-3xl font-semibold leading-10 self-stretch max-md:max-w-full">
                    We as a Company
                </div>{" "}
                <div className="text-black text-xl leading-8 self-stretch mt-2.5 max-md:max-w-full">
                    Headquartered in Bengaluru, BlackBuck is a leading trucking platform
                    in India that connects 1,00,000+ truckers with 25,000 + transporters
                    from all parts of the country.
                    <br />
                    With a comprehensive suite of products and solutions, BlackBuck aims
                    to empower every truck owner in the country.
                </div>
            </div>{" "}
            <div className="self-stretch flex min-h-[96px] w-full flex-col mt-36 border-t-white border-t-opacity-0 border-t border-solid max-md:max-w-full border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />{" "}
            <div className="text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap max-md:mt-10">
                IN Partnership With
            </div>{" "}
            <div className="self-center flex w-full max-w-[971px] items-start justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <div className="absolute w-[437px] h-[129px] left-0 [background:linear-gradient(90deg,rgb(0,0,0)_29.69%,rgba(0,0,0,0)_100%)]" />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd525a12-11e6-4be3-9d86-e97082b873e0?apiKey=54f59c00fe214313b710779cabd91fdd&"
                    className="aspect-[4.29] object-contain object-center w-[180px] overflow-hidden max-w-full self-start mt-10"
                />{" "}
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9287fe8-751d-40f6-b352-d619efa09d87?apiKey=54f59c00fe214313b710779cabd91fdd&"
                    className="aspect-[2.33] object-contain object-center w-28 overflow-hidden max-w-full self-start mt-10"
                />{" "}
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0517d37-63f5-448e-b9db-28b826ee217b?apiKey=54f59c00fe214313b710779cabd91fdd&"
                    className="aspect-[3.19] object-contain object-center w-[153px] overflow-hidden max-w-full self-start mt-10"
                />{" "}
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a5517f0-73ad-49de-806d-153516c34713?apiKey=54f59c00fe214313b710779cabd91fdd&"
                    className="aspect-[3.56] object-contain object-center w-[171px] overflow-hidden max-w-full self-start mt-10"
                />
                <div className="absolute w-[427px] h-[129px] right-0 rotate-180 [background:linear-gradient(90deg,rgb(0,0,0)_49.69%,rgba(0,0,0,0)_100%)]" />
            </div>{" "}
            <div className="border self-center flex w-full max-w-[1200px] flex-col mt-28 px-20 py-16 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:mt-10 max-md:px-5 border border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                <div className="self-center flex w-[648px] max-w-full flex-col">
                    <div className="text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap">
                        Contact Us
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af59b5b5-6468-47bb-8e25-25091d2c34c4?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-[0.94] object-contain object-center w-[162px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
                    />{" "}
                    <div className="self-stretch flex w-full items-start  gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <div className="self-stretch flex w-[258px] max-w-full grow shrink basis-auto items-start  gap-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef4f1449-168e-4de4-a859-6ae868837534?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-12 overflow-hidden self-stretch max-w-full"
                            />{" "}
                            <div className="text-cyan-400 text-2xl font-medium leading-7 self-center whitespace-nowrap my-auto">
                                +91 - 8046481828
                            </div>
                        </div>{" "}
                        <div className="self-stretch flex w-[313px] max-w-full grow shrink basis-auto items-start  gap-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b321ec-56cf-402f-87ea-69a33a85c02d?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-12 overflow-hidden self-stretch max-w-full"
                            />{" "}
                            <div className="text-cyan-400 text-2xl font-medium leading-7 self-center whitespace-nowrap my-auto">
                                <a href="mailto:care@blackbuck.com" target="_blank">
                                    care@blackbuck.com
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="self-stretch flex w-full items-start  gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/140c8d0b-dcc7-4b95-be37-787cd4195d47?apiKey=54f59c00fe214313b710779cabd91fdd&"
                            className="aspect-square object-contain object-center w-24 overflow-hidden max-w-full self-start"
                        />{" "}
                        <div className="text-white text-xl font-medium leading-8 grow shrink basis-auto self-start max-md:max-w-full">
                            No. 84/2, II Floor, Vaswani Presidio, Panathur Main Road, Off
                            Outer Ring Road, Bangalore – 560103, Karnataka, India.
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="self-stretch flex w-full flex-col mt-10 pl-10 pr-12 pt-20 pb-12 max-md:max-w-full max-md:px-5">
                <div className="self-center flex w-full max-w-[1352px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef9b8d11-272e-4720-854f-f58450c44caa?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-[2.23] object-contain object-center w-[174px] overflow-hidden max-w-full self-end"
                    />{" "}
                    <div className="flex w-[604px] max-w-full items-start justify-between gap-5 mt-16 self-end max-md:flex-wrap max-md:justify-center max-md:mt-10">
                        <div className="text-white text-sm font-medium self-start">
                            Home
                        </div>{" "}
                        <div className="text-white text-center text-sm font-medium self-start">
                            What We Offer
                        </div>{" "}
                        <div className="text-white text-sm font-medium">Why Choose Us</div>{" "}
                        <div className="text-white text-sm font-medium self-start">
                            Policies
                        </div>{" "}
                        <div className="text-white text-sm font-medium self-start">
                            About Us
                        </div>{" "}
                        <div className="text-white text-sm font-medium whitespace-nowrap self-start">
                            Contact
                        </div>
                    </div>{" "}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58e02ef5-8b5b-49ac-919a-5b95b2f7bff5?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-[3.26] object-contain object-center w-[62px] overflow-hidden max-w-full mt-14 self-end max-md:mt-10"
                    />
                </div>{" "}
                <div className="self-center flex w-full max-w-[1352px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="text-neutral-500 text-sm self-stretch grow shrink basis-auto">
                        Copyright © Zinka Logistics Solutions Pvt. Ltd.
                    </div>{" "}
                    <div className="text-neutral-500 text-sm self-stretch whitespace-nowrap">
                        All Rights Reserved | Terms and Conditions | Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    );
}

