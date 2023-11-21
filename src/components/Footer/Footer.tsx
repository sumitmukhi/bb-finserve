
import React from "react";
import Image from 'next/image';

export const Footer = (): JSX.Element => {
    return (
        <div className="self-stretch flex w-full flex-col max-sm:[background:#000] max-sm:[font-family:'General_Sans-Regular'] mt-10 pl-10 pr-12 pt-20 pb-12 max-md:max-w-full max-md:px-5">
            <div className="self-center flex w-full max-w-[1352px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-sm:justify-start">
                <Image
                    loading="lazy"
                    src="/img/ef9b8d11-272e-4720-854f-f58450c44caa.svg"
                    alt="Blackbuck logo"
                    width={174}
                    height={100}
                    className="aspect-[2.23] object-contain object-center w-[174px] overflow-hidden max-w-full self-end"
                />{" "}
                <div className="flex w-[604px] max-w-full max-sm:flex-col items-start justify-between gap-5 max-sm:mt-5 mt-16 self-end max-md:flex-wrap max-md:justify-center max-md:mt-10">
                    <a href="#home"><div className="text-white text-sm max-sm:text-base font-medium self-start">
                        Home
                    </div></a>{" "}
                    <a href="#offer"><div className="text-white text-center text-sm max-sm:text-base font-medium self-start">
                        What We Offer
                    </div></a>{" "}
                    <a href="#choose"><div className="text-white text-sm max-sm:text-base font-medium">Why Choose Us</div></a>{" "}
                    <a href="#policy"><div className="text-white text-sm max-sm:text-base font-medium self-start">
                        Policies
                    </div></a>{" "}
                    <a href="#about"><div className="text-white text-sm max-sm:text-base font-medium self-start">
                        About Us
                    </div></a>{" "}
                    <a href="#contact"><div className="text-white text-sm max-sm:text-base font-medium whitespace-nowrap self-start">
                        Contact
                    </div></a>
                </div>{" "}
                <div className="relative object-contain object-center w-[130px] mt-14 flex flex-wrap gap-3 self-end">
                    <a href="https://www.facebook.com/blackbucklogistics" target="_blank"><Image className="w-[8px] h-[15px]" alt="Facebook" width={8} height={15} src="/img/facebook.svg" /></a>
                    <a href="https://twitter.com/blackbuck" target="_blank"><Image className="w-[15px] h-[12px]" alt="Twitter" width={15} height={12} src="/img/twitter.svg" /></a>
                    <a href="https://www.instagram.com/blackbuck_zinkalogistics/" target="_blank"><Image className="w-[15px] h-[15px]" alt="Instagram" width={15} height={15} src="/img/instagram.svg" /></a>
                    <a href="https://www.linkedin.com/company/blackbuck/" target="_blank"><div className="relative w-[15px] h-[14px] bg-[url(/img/linkedin.svg)] bg-[100%_100%]" /></a>
                    <a href="https://www.youtube.com/blackbuck" target="_blank"><div className="relative w-[17px] h-[12px] left-px bg-[url(/img/youtube.svg)] bg-[100%_100%]" /></a>
                </div>
            </div>{" "}
            <div className="self-center flex w-full max-w-[1352px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-neutral-500 text-sm self-stretch grow shrink basis-auto">
                    Copyright © Zinka Logistics Solutions Pvt. Ltd.
                </div>{" "}
                <div className="text-neutral-500 text-sm self-stretch whitespace-nowrap max-sm:whitespace-normal">
                    All Rights Reserved | <a href="https://blackbuck.com/terms-and-conditions.php" target="_blank">Terms and Conditions</a> | <a href="https://blackbuck.com/terms-and-conditions.php" target="_blank">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};