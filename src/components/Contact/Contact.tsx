
import React from "react";
import Image from 'next/image';

export const Contact = (): JSX.Element => {
    return (
        <div>
            <section id="contact" className="self-stretch flex min-h-[96px] w-full flex-col mt-36 max-sm:mt-[90px] max-sm:min-h-[26px] !w-[60%] m-auto border-t-white border-t-opacity-0 border-t border-solid max-md:max-w-full border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1]" />{" "}
            <div className="text-white text-center text-3xl [font-family:'General_Sans-Bold'] max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap max-md:mt-10 max-sm:mt-[16px]">
                IN Partnership With
            </div>{" "}
            <div className="self-center flex w-full max-w-[971px] m-auto items-start justify-between gap-5 mt-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-sm:mt-[16px]">
                <div className="absolute hidden md:block w-[437px] h-[129px] left-0 [background:linear-gradient(90deg,rgb(0,0,0)_29.69%,rgba(0,0,0,0)_100%)]" />
                <Image
                    loading="lazy"
                    src="/img/20230105061739-1-1.png"
                    alt="Shivalik"
                    width={180}
                    height={100}
                    className="aspect-[4.29] object-contain object-center w-[180px] max-sm:w-[113px] overflow-hidden max-w-full self-start mt-10"
                />{" "}
                <Image
                    loading="lazy"
                    src="/img/332px-idfc-bank-logo-1.png"
                    alt="IDFC"
                    width={300}
                    height={100}
                    className="aspect-[2.33] object-contain object-center w-28 max-sm:w-[70px] max-sm:ml-[25px] overflow-hidden max-w-full self-start mt-10"
                />{" "}
                <Image
                    loading="lazy"
                    src="/img/pngegg-1.png"
                    alt="Axis Bank"
                    width={153}
                    height={100}
                    className="aspect-[3.19] object-contain object-center w-[153px] max-sm:w-[113px] overflow-hidden max-w-full self-start mt-10 max-sm:mt-5"
                />{" "}
                <Image
                    loading="lazy"
                    src="/img/tvs-credit-logo-01-1.png"
                    alt="TVS Credit"
                    width={171}
                    height={100}
                    className="aspect-[3.56] object-contain object-center w-[171px] max-sm:w-[101px] max-sm:ml-[5px] overflow-hidden max-w-full self-start mt-10 max-sm:mt-5"
                />
                <div className="absolute hidden md:block w-[427px] h-[129px] right-0 rotate-180 [background:linear-gradient(90deg,rgb(0,0,0)_49.69%,rgba(0,0,0,0)_100%)]" />
            </div>{" "}
            <div className="border self-center flex w-full max-w-[1200px] m-auto max-sm:mx-5 max-sm:p-10 max-sm:py-5 max-sm:mt-[60px] max-sm:w-auto flex-col mt-28 px-20 py-16 rounded-3xl border-solid border-white border-opacity-20 max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:px-5 border border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgba(104,186,186,0.26)_0%,rgb(141.31,255,255,8%)_70.47%)]">
                <div className="self-center flex w-[648px] max-w-full flex-col max-sm:pt-5">
                    <div className="text-white text-center text-3xl [font-family:'General_Sans-Bold'] max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap">
                        Contact Us
                    </div>{" "}
                    <Image
                        loading="lazy"
                        src="/img/af59b5b5-6468-47bb-8e25-25091d2c34c4.png"
                        alt="Contact us"
                        width={162}
                        height={200}
                        className="aspect-[1.2] object-contain object-center w-[162px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10 max-sm:mt-5"
                    />{" "}
                    <div className="self-stretch flex w-full items-start  gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:mt-5 max-sm:gap-2">
                        <div className="self-stretch flex w-[258px] max-w-full grow shrink basis-auto items-start  gap-5">
                            <Image
                                loading="lazy"
                                src="/img/ef4f1449-168e-4de4-a859-6ae868837534.svg"
                                alt="Call us"
                                width={120}
                                height={100}
                                className="aspect-square object-contain object-center w-12 max-sm:w-[32px] overflow-hidden self-stretch max-w-full"
                            />{" "}
                            <div className="text-cyan-400 text-2xl max-sm:[font-family:'General_Sans-Regular'] max-sm:[font-size:16px] max-sm:mt-[0px] font-medium leading-7 self-center whitespace-nowrap my-auto">
                                +91 - 8046481828
                            </div>
                        </div>{" "}
                        <div className="self-stretch flex w-[313px] max-w-full grow shrink basis-auto items-start  gap-5">
                            <Image
                                loading="lazy"
                                src="/img/d9b321ec-56cf-402f-87ea-69a33a85c02d.svg"
                                alt="Mail Us"
                                width={120}
                                height={100}
                                className="aspect-square object-contain object-center w-12 max-sm:w-[32px] overflow-hidden self-stretch max-w-full"
                            />{" "}
                            <div className="text-cyan-400 text-2xl max-sm:[font-family:'General_Sans-Regular'] max-sm:[font-size:16px] max-sm:mt-[0px] font-medium leading-7 self-center whitespace-nowrap my-auto">
                                <a href="mailto:care@blackbuck.com" target="_blank">
                                    care@blackbuck.com
                                </a>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="self-stretch flex w-full items-start gap-5 mt-8 max-sm:mt-2 max-md:max-w-full max-md:flex-wrap">
                        <Image
                            loading="lazy"
                            src="/img/140c8d0b-dcc7-4b95-be37-787cd4195d47.svg"
                            alt="Address"
                            width={150}
                            height={100}
                            className="aspect-square object-contain object-center w-24 max-sm:w-[32px] max-sm:w-12 overflow-hidden max-w-full self-start"
                        />{" "}
                        <div className="text-white text-xl max-sm:[font-family:'General_Sans-Regular'] max-sm:[font-size:16px] max-sm:mt-[0px] font-medium leading-8 max-sm:leading-6 grow shrink basis-auto self-start max-md:max-w-full max-sm:w-[70%]">
                            No. 84/2, II Floor, Vaswani Presidio, Panathur Main Road, Off
                            Outer Ring Road, Bangalore – 560103, Karnataka, India.
                        </div>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};