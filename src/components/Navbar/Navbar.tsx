
import React from "react";
import { useState } from "react";

export const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const toggleClose = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="fixed backdrop-blur-[25px] bg-white bg-opacity-0 self-stretch z-[1] flex w-full items-start justify-between gap-5 px-12 py-4 border-b-white border-b-opacity-0 border-b border-solid max-md:max-w-full [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:flex-wrap max-md:px-5 max-sm:px-0">
            <div className="flex items-start gap-2.5 self-start max-md:justify-center max-sm:px-5">
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
            <div className="lg:hidden max-sm:px-5 max-sm:mt-[10px]">
                {!isOpen ? <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggle}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
                    : <button className="navbar-close flex items-center text-blue-600 p-3 z-[1]" onClick={toggleClose}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>}
            </div>
            <div className={`navbar-menu relative w-full z-50 ${!isOpen ? 'hidden' : ''} `}>
                {/* <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div> */}
                <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-[56px] relative bg-white [background:linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]">
                    <div className="relative w-fit [text-shadow:0px_0px_15px_#ffffff] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] mt-[-100px]">
                        Home
                    </div>
                    <div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        What We Offer
                    </div>
                    <div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Why Choose Us
                    </div>
                    <div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Our Policies
                    </div>
                    <div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        About Us
                    </div>
                    <div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Contact Us
                    </div>
                </div>
            </div>
            {/* <div className=" "> */}
                <div className="hidden md:flex md:visible navbar self-center flex w-[608px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                    <div className="text-white text-center text-base font-semibold self-start active">
                        {/* <div className="absolute w-[69px] h-[27px] -ml-[14px] -top-5 bg-[#ffffffeb] blur-[25px] z-[1]" /> */}
                        <div className="shadow" />
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
                <div className="inline-flex h-10 justify-center items-center gap-2 shrink-0 border px-4 py-0 rounded-lg border-solid border-[rgba(255,255,255,0.20)] text-white contact-us">
                    Contact Us
                </div>
                {/* <div className="inline-flex h-[40px] items-center justify-center gap-[8px] px-[16px] py-0 relative bg-white rounded-[8px] border border-solid border-[#ffffff33] [background:linear-gradient(90deg,rgb(100.31,255,255)_0%,rgba(141.31,255,255,0)_97.47%)] border-[rgba(255,255,255,0.20)] contact us">
                    <div className="relative w-fit [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[17.6px] whitespace-nowrap">
                        Contact Us
                    </div>
                </div> */}
            {/* </div> */}

        </div>
    );
};