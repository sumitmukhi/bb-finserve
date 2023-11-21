
import React from "react";
import { PropertyDefaultWrapper } from "@/components/PropertyDefaultWrapper";
import { Cards } from ".";

export const Choose = (): JSX.Element => {
    return (
        <section id="choose" className="relative">
            <div className="w-full text-white text-center [font-family:'General_Sans-Bold'] text-3xl max-sm:text-2xl font-bold uppercase self-center whitespace-nowrap !w-[60%] m-auto mt-16 pt-16 max-md:mt-10 max-sm:mt-[97px] max-sm:pt-[36px] border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(150,150,150)_49.4%,rgba(255,255,255,0)_100%)_1]">
                Why Choose Us
            </div>
            <PropertyDefaultWrapper
                className="self-center w-[942px] max-w-full mt-20 px-5 max-md:mt-10 m-auto hidden lg:block"
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

            <div className="hidden max-sm:block max-sm:pb-[40px]">
                <div className="absolute w-[430px] h-[243px] top-0 right-[-100px] bg-[#8dffff] rounded-[215px/121.5px] blur-[80px] opacity-10" />

                <Cards />

                <div className="absolute w-[430px] h-[243px] top-[180px] left-[-240px] bg-[#8dffff] rounded-[215px/121.5px] blur-[80px] opacity-10" />
            </div>

        </section>
    );
};