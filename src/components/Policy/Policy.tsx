
import React from "react";
import { useState } from 'react';
import { Modal } from "../Modal";

export const Policy = (): JSX.Element => {

    const [open, setOpen] = useState(false);

    return (
        // <div >
        <section id="policy" className="relative self-stretch flex min-h-[97px] w-full flex-col" >
            <div className="absolute hidden lg:block w-[890px] h-[787px] top-[-100px] left-[-500px] bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[300px]" />
            <div className="absolute hidden max-sm:block w-[470px] h-[512px] top-[80px] left-[-250px] bg-[#002a38] blur-[200px] rounded-[512px] rotate-180" />
            <div className="text-white z-[1] text-center text-3xl [font-family:'General_Sans-Bold'] max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap w-[60%] m-auto max-md:mt-10 mt-20 max-sm:min-h-[20px] max-md:max-w-full max-md:mt-10 lg:pt-20 max-sm:pt-20 border-t-white border-t-opacity-0 border-t border-transparent [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1]">
                Our Policies
            </div>
            <div className="self-center z-[1] flex w-full max-w-[1200px] items-start justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10 m-auto">
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full  [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d22575c-4da6-4cc9-878a-1e1795ada836?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full self-start"
                                />
                                <div className="text-white text-2xl max-sm:mt-2 max-sm:text-base max-sm:font-normal font-medium self-start">
                                    Interest Rate Policy
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d386f0-465b-44f7-a1f4-3243979a9811?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2771a70a-893e-4200-a65e-1cc6273e5597?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-base max-sm:font-normal font-medium self-center my-auto">
                                    Gradation of Risk
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f820c5c-89fc-4ec0-adfe-f2d5cadaa4bb?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center z-[1] flex w-full max-w-[1200px] items-start justify-between gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap m-auto max-sm:mt-5">
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01be8c64-61f2-4a61-b105-ee20bae0c348?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-sm max-sm:font-normal font-medium self-center grow shrink basis-auto my-auto">
                                    MITC and Schedule of Charges
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41546136-2f95-4000-997c-1ebda12426ba?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c361e1-ecea-45b1-a023-02bde5ec279d?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-base max-sm:font-normal font-medium self-center my-auto">
                                    Fair Practices Code
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d6674a-cdbb-4392-b4b5-9dc5f0231801?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute hidden lg:block w-[890px] h-[787px] top-[-100px] right-[-500px] bg-[#002a38] rounded-[445px/393.5px] blur-[300px]" />
            <Modal open={open} onClose={() => setOpen(false)} title={'Interest Rate Policy'} file={"drylab.pdf"} />
        </section>
        // </div>
    );
};