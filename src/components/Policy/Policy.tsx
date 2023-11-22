
import React, { useEffect } from "react";
import { useState } from 'react';
import { Modal } from "../Modal";
import Image from 'next/image';

export const Policy = (): JSX.Element => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "unset";
      }, [open]);

    return (
        <section id="policy" className="relative self-stretch flex min-h-[97px] w-full flex-col" >
            <div className="absolute hidden lg:block w-[890px] h-[787px] top-[-100px] left-[-500px] bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[300px]" />
            <div className="absolute hidden max-sm:block w-[470px] h-[512px] top-[80px] left-[-250px] bg-[#002a38] blur-[200px] rounded-[512px] rotate-180" />
            <div className="text-white z-[1] text-center text-3xl [font-family:'General_Sans-Bold'] max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap w-[60%] m-auto max-md:mt-10 mt-20 max-sm:min-h-[20px] max-md:max-w-full max-md:mt-10 lg:pt-20 max-sm:pt-[36px] border-t-white border-t-opacity-0 border-t border-transparent [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1]">
                Our Policies
            </div>
            <div className="self-center z-[1] flex w-full max-w-[1200px] items-start justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:mt-[36px] m-auto">
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full  [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <Image
                                    loading="lazy"
                                    src="/img/5d22575c-4da6-4cc9-878a-1e1795ada836.svg"
                                    alt="PDF Icon - Policy"
                                    width={50}
                                    height={50}
                                    className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full self-start"
                                />
                                <div className="text-white text-2xl max-sm:mt-2 max-sm:text-base max-sm:font-normal font-medium self-start">
                                    Interest Rate Policy
                                </div>
                            </div>
                            <Image
                                loading="lazy"
                                src="/img/d2d386f0-465b-44f7-a1f4-3243979a9811.svg"
                                alt="Policy right arrow"
                                width={20}
                                height={20}
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <Image
                                    loading="lazy"
                                    src="/img/5d22575c-4da6-4cc9-878a-1e1795ada836.svg"
                                    alt="PDF Icon - Policy"
                                    width={50}
                                    height={50}
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-base max-sm:font-normal font-medium self-center my-auto">
                                    Gradation of Risk
                                </div>
                            </div>
                            <Image
                                loading="lazy"
                                src="/img/d2d386f0-465b-44f7-a1f4-3243979a9811.svg"
                                alt="Policy right arrow"
                                width={20}
                                height={20}
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
                                <Image
                                    loading="lazy"
                                    src="/img/5d22575c-4da6-4cc9-878a-1e1795ada836.svg"
                                    alt="PDF Icon - Policy"
                                    width={50}
                                    height={50}
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-sm max-sm:font-normal font-medium self-center grow shrink basis-auto my-auto">
                                    MITC and Schedule of Charges
                                </div>
                            </div>
                            <Image
                                loading="lazy"
                                src="/img/d2d386f0-465b-44f7-a1f4-3243979a9811.svg"
                                alt="Policy right arrow"
                                width={20}
                                height={20}
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto max-sm:absolute max-sm:right-[42px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto flex-1 max-md:max-w-full w-1/2">
                    <div onClick={() => setOpen(true)} className="cursor-pointer border self-stretch flex grow flex-col w-full p-5 rounded-3xl border-solid border-[rgba(255,255,255,0.26)] max-md:max-w-full [background:linear-gradient(0deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)]">
                        <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                            <div className="self-stretch flex items-start justify-between gap-4">
                                <Image
                                    loading="lazy"
                                    src="/img/5d22575c-4da6-4cc9-878a-1e1795ada836.svg"
                                    alt="PDF Icon - Policy"
                                    width={50}
                                    height={50}
                                    className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                                />
                                <div className="text-white text-2xl max-sm:text-base max-sm:font-normal font-medium self-center my-auto">
                                    Fair Practices Code
                                </div>
                            </div>
                            <Image
                                loading="lazy"
                                src="/img/d2d386f0-465b-44f7-a1f4-3243979a9811.svg"
                                alt="Policy right arrow"
                                width={20}
                                height={20}
                                className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute hidden lg:block w-[890px] h-[787px] top-[-100px] right-[-500px] bg-[#002a38] rounded-[445px/393.5px] blur-[300px]" />
            <Modal open={open} onClose={() => setOpen(false)} title={'Interest Rate Policy'} file={"drylab.pdf"} />
        </section>
    );
};