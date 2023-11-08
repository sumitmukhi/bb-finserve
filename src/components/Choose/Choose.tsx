
import React from "react";
import { PropertyDefaultWrapper } from "@/components/PropertyDefaultWrapper";

export const Choose = (): JSX.Element => {
    return (
        <div>
            <div className="w-full text-white text-center text-3xl font-bold uppercase self-center whitespace-nowrap mt-16 pt-16 max-md:mt-10 border-t-white border-t-opacity-0 border-t border-solid [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] ">
                Why Choose Us
            </div>
            <PropertyDefaultWrapper
                className="self-center w-[942px] max-w-full mt-20 px-5 max-md:mt-10 m-auto"
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
        </div>
    );
};