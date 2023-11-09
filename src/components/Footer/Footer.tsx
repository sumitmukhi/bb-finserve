
import React from "react";

export const Footer = (): JSX.Element => {
    return (
        <div className="self-stretch flex w-full flex-col max-sm:[background:#000] max-sm:[font-family:'General_Sans-Regular'] mt-10 pl-10 pr-12 pt-20 pb-12 max-md:max-w-full max-md:px-5">
            <div className="self-center flex w-full max-w-[1352px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-sm:justify-start">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef9b8d11-272e-4720-854f-f58450c44caa?apiKey=54f59c00fe214313b710779cabd91fdd&"
                    className="aspect-[2.23] object-contain object-center w-[174px] overflow-hidden max-w-full self-end"
                />{" "}
                <div className="flex w-[604px] max-w-full max-sm:flex-col items-start justify-between gap-5 max-sm:mt-5 mt-16 self-end max-md:flex-wrap max-md:justify-center max-md:mt-10">
                    <div className="text-white text-sm max-sm:text-base font-medium self-start">
                        Home
                    </div>{" "}
                    <div className="text-white text-center text-sm max-sm:text-base font-medium self-start">
                        What We Offer
                    </div>{" "}
                    <div className="text-white text-sm max-sm:text-base font-medium">Why Choose Us</div>{" "}
                    <div className="text-white text-sm max-sm:text-base font-medium self-start">
                        Policies
                    </div>{" "}
                    <div className="text-white text-sm max-sm:text-base font-medium self-start">
                        About Us
                    </div>{" "}
                    <div className="text-white text-sm max-sm:text-base font-medium whitespace-nowrap self-start">
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
    );
};