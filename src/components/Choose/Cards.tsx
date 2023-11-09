import React from "react";
import { useState } from "react";

export const Cards = (): JSX.Element => {

    const slides = ["a", "b", "c", "d"];

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="self-stretch mt-9 pr-6 max-md:max-w-full max-md:pr-5 overflow-hidden">


            {/*  */}

            <div className="carousel relative shadow-2xl">
                <div className="carousel-inner relative w-full flex transition ease-out duration-40"
                    style={{
                        transform: `translateX(-${current * 90}%)`,
                    }}>
                    {/* <!--Slide 1--> */}
                    {/* <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" /> */}
                    <div className="carousel-item static opacity-100 h-full">
                        {/* <div className="block h-full w-full text-white text-5xl text-center">Slide 1</div> */}
                        <div className="flex flex-row items-stretch w-[82%] max-md:w-full max-md:ml-0 gap-5">
                            
                            <div className="items-center border flex w-full max-w-[321px] ml-5 grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>

                            <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet="/img/kjdfhldfesbghj-1.png"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        24x7 Customer Support
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Get a dedicated Customer Relationship Officer
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/toto97-1.png"
                                        className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                    />
                                    <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                        <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                            Quick & Easy Process
                                        </div>
                                        <div className="text-white text-center text-xs self-stretch mt-1.5">
                                            A  hassle-free experience with start to end assistance provided
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-10 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/wepik-export-20231010113226nog9-1.png"
                                        className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                    />
                                    <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                        <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        Help with Documentation
                                        </div>
                                        <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Doorstep service for document collection to expedite loan disbursal
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <label htmlFor="carousel-4"
                        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-yellow-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-2"
                        className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}

                    {/* <!--Slide 2--> */}
                    {/* <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden /> */}
                    {/* <div className="carousel-item static opacity-100 h-full"> */}
                    {/* <div className="block h-full w-full bg-yellow-500 text-white text-5xl text-center">Slide 2</div> */}
                    {/* <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                            <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-2 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        2. Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <label htmlFor="carousel-1"
                        className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-3"
                        className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}

                    {/* <!--Slide 3--> */}
                    {/* <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden /> */}
                    {/* <div className="carousel-item static opacity-100 h-full"> */}
                    {/* <div className="block h-full w-full bg-yellow-500 text-white text-5xl text-center">Slide 3</div> */}
                    {/* <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                            <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-2 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        3. Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <label htmlFor="carousel-2"
                        className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-4"
                        className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}

                    {/* <!--Slide 4--> */}
                    {/* <input className="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden /> */}
                    {/* <div className="carousel-item static opacity-100 h-full"> */}
                    {/* <div className="block h-full w-full bg-yellow-500 text-white text-5xl text-center">Slide 3</div> */}
                    {/* <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                            <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-2 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                                />
                                <div className="justify-center items-center self-stretch flex flex-col mt-5">
                                    <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                        4. Loan Disbursal in 48 Hours
                                    </div>
                                    <div className="text-white text-center text-xs self-stretch mt-1.5">
                                        Assistance from start to end for a hassle-free experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <label htmlFor="carousel-3"
                        className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-1"
                        className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}

                    {/* <!-- Add additional indicators for each slide--> */}
                    {/* <ol className="carousel-indicators">
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-1"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-2"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-3"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-4"
                                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                    </ol> */}



                </div>

            </div>
                <div className="mt-10 py-4 flex justify-center gap-3 w-full">
                    {slides.map((s, i) => {
                        return (
                            <div
                                onClick={() => {
                                    setCurrent(i);
                                }}
                                key={"circle" + i}
                                className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                                    }`}
                            ></div>
                        );
                    })}
                </div>

            {/*  */}


            {/* <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                    <div className="items-center border flex w-full max-w-[321px] grow flex-col mx-auto pt-16 pb-10 px-2 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c558a9c-5db9-4ee0-87be-f33490d26038?apiKey=54f59c00fe214313b710779cabd91fdd&"
                            className="aspect-[0.97] object-contain object-center w-[152px] overflow-hidden self-center max-w-full"
                        />
                        <div className="justify-center items-center self-stretch flex flex-col mt-5">
                            <div className="text-white text-center text-xl font-semibold self-center whitespace-nowrap">
                                Loan Disbursal in 48 Hours
                            </div>
                            <div className="text-white text-center text-xs self-stretch mt-1.5">
                                Assistance from start to end for a hassle-free experience
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-center border flex w-full max-w-[69px] grow flex-col mx-auto pl-2 pt-64 pb-12 rounded-3xl border-solid border-white border-opacity-20 max-md:mt-4 max-md:pt-24">
                        <div className="justify-center items-center self-stretch flex flex-col">
                            <div className="text-white text-center text-xl font-semibold w-full self-end">
                                24x7 Customer Support
                            </div>
                            <div className="text-white text-center text-xs mt-1.5 self-end">
                                Get a dedicated Customer Relationship Officer
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
};




