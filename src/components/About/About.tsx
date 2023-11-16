
import React from "react";

export const About = (): JSX.Element => {
    return (
        <div >
            <section id="about" className="self-stretch flex min-h-[97px] w-full flex-col mt-36 max-sm:min-h-[20px] border-t-white border-t-opacity-0 border-t border-solid border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:max-w-full max-md:mt-10" />
            <div className="text-white text-center text-3xl [font-family:'General_Sans-Bold'] max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap max-md:mt-10">
                About Us
            </div>
            <div className="self-center w-full max-w-[1197px] max-sm:p-10 mt-16 max-md:max-w-full max-md:mt-10 max-sm:mt-0 m-auto">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col w-full mx-auto p-5 rounded-3xl max-md:max-w-full max-md:mt-9 [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="text-black text-3xl max-sm:text-2xl font-semibold leading-10 self-stretch max-md:max-w-full">
                                BlackBuck Finserve
                            </div>
                            <div className="text-black text-xl max-sm:text-base leading-8 self-stretch mt-2.5 max-md:max-w-full">
                                BlackBuck's latest venture, a non-banking financial service
                                provider, aims to provide financial solutions for truck owners
                                in India
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col w-full mx-auto p-5 rounded-3xl max-md:max-w-full max-md:mt-9 [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="text-black text-3xl max-sm:text-2xl font-semibold leading-10 self-stretch max-md:max-w-full">
                                BlackBuck Finserve’s Speciality
                            </div>{" "}
                            <div className="text-black text-xl max-sm:text-base leading-8 self-stretch mt-2.5 max-md:max-w-full">
                                We specialize in providing loans tailored to the unique needs of
                                the trucking community, from small commercial vehicle fleet
                                operators to first-time buyers
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="items-start self-center flex w-full max-w-[1199px] max-sm:w-auto max-sm:my-0 max-sm:m-10 flex-col mt-9 p-5 m-auto rounded-3xl max-md:max-w-full [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                <div className="text-black text-3xl max-sm:text-2xl font-semibold leading-10 self-stretch max-md:max-w-full">
                    We as a Company
                </div>{" "}
                <div className="text-black text-xl max-sm:text-base leading-8 self-stretch mt-2.5 max-md:max-w-full">
                    Headquartered in Bengaluru, BlackBuck is a leading trucking platform
                    in India that connects 1,00,000+ truckers with 25,000 + transporters
                    from all parts of the country.
                    <br />
                    With a comprehensive suite of products and solutions, BlackBuck aims
                    to empower every truck owner in the country.
                </div>
            </div>{" "}
        </div>
    );
};