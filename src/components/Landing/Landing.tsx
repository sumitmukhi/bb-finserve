
import React from "react";
import { KeyboardArrowDown } from "@/icons/KeyboardArrowDown";

export const Landing = (): JSX.Element => {
    return (
        <section id="home" className="max-sm:relative">
            <div className="absolute w-full h-[905px] top-[-700px] hidden lg:block">
                <div className="w-full h-[905px] top-0 left-0 bg-[#002a38] rounded-[1134.5px/452.5px] blur-[500px]" />
            </div>
            <div className="absolute w-[480px] h-[352px] top-[-100px] left-[-100px] bg-[#002a38] blur-[60px] hidden max-sm:block" />
            <div className="flex-col overflow-hidden max-sm:px-0 self-center relative flex min-h-[652px] w-full max-w-full mt-8 pt-96 pb-20 px-5 max-md:pt-24 max-sm:pt-10 max-sm:pb-0 max-sm:gap-0 max-sm:min-h-full">
                <img
                    loading="lazy"
                    srcSet="img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 100w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 200w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 400w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 800w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 1200w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 1600w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png 2000w, 
                            img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png"
                    className="absolute min-h-[652px] max-sm:min-h-[352px] max-sm:mt-[50px] w-[647px] object-cover object-center inset-0 m-auto"
                />
                <div className="relative text-white text-center text-6xl max-sm:ml-0 max-sm:z-[2] max-sm:w-full font-bold [font-family:'General_Sans-Bold',Helvetica] tracking-[1.50px] leading-[72px] uppercase self-stretch mr-0 -ml-9 max-md:max-w-full max-md:text-4xl max-sm:mt-[360px] max-sm:text-3xl">
                    <span className="hidden md:block">Easy & Quick Loans
                    <br />
                    For used trucks</span>
                    <span className="hidden max-sm:block w-full">Easy & Quick 
                    <br />
                    Loans For used 
                    <br />trucks</span>
                </div>
                <div className="relative self-center flex w-[467px] max-w-full z-[2] max-sm:z-[2] items-start justify-between max-sm:gap-0 gap-5 mt-6 max-sm:mt-3 max-md:flex-wrap max-md:justify-center">
                    {/* <span className="hidden md:block"> */}
                        <div className="text-cyan-400 text-center max-sm:w-full max-sm:[font-size:12px] text-base font-semibold tracking-[4.16px] uppercase">
                            Loan in 48 hrs
                        </div>
                        {/* <div className="self-center flex w-2 h-2 shrink-0 flex-col my-auto rounded-[50%] fill-[#14DFDF]" /> */}
                        <div className="self-center flex w-[4px] h-[4px] bg-[#14dfdf] rounded-[2px] hidden lg:block"></div>
                        <div className="text-cyan-400 text-center text-base max-sm:[font-size:12px] font-semibold tracking-[4.16px] uppercase self-stretch whitespace-nowrap">
                            Low Interest Rates
                        </div>
                    {/* </span> */}
                    {/* <span className="hidden max-sm:block ml-[100px]">
                        <div className="text-cyan-400 text-center text-base font-semibold tracking-[4.16px] uppercase">
                            Loan in 48 hrs <br />
                            Low Interest Rates
                        </div>
                    </span> */}
                </div>
            </div>
            <div className="absolute lg:block w-full h-[190px] max-sm:h-[440px] top-[496px] max-sm:top-[230px] z-[1]">
                <div className="w-full h-[190px] max-sm:h-[440px] [background:linear-gradient(0deg,rgb(11,15,16)_40%,rgba(11,15,16,0)_100%)]" />
            </div>
            <div className="self-stretch z-[1] flex w-full w-[60%] m-auto pt-0 max-sm:pt-12 flex-col pb-16 px-20 border-b-white border-b-opacity-0 border-b border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:max-w-full max-md:px-5">
                <div className="justify-center items-center border self-center z-[1] flex w-12 max-w-full -m-8 flex-col p-2 rounded-[100px] border border-solid border-[rgba(255,255,255,0.26)] [background:linear-gradient(90deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
                    {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d823c37-acc9-4694-a384-8b1f61561699?apiKey=54f59c00fe214313b710779cabd91fdd&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    /> */}
                    <a href="#offer"><KeyboardArrowDown className="!relative !w-[32px] !h-[32px]" color="white" /></a>
                </div>
            </div>
        </section>
    );
};