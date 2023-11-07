/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "variant-4" | "variant-2" | "variant-3" | "default";
  className: any;
  rectangle: string;
  rectangle1: string;
  rectangle2: string;
  rectangle3: string;
  rectangle4: string;
  rectangle5: string;
  rectangle6: string;
  rectangle7: string;
  rectangle8: string;
  rectangle9: string;
  rectangle10: string;
  rectangle11: string;
  img: string;
  groupClassName: any;
  clipPathGroup: string;
  group: string;
}

export const PropertyDefaultWrapper = ({
  property1,
  className,
  rectangle = "/img/rectangle-23.png",
  img = "/img/rectangle-17.png",
  groupClassName,
  clipPathGroup = "/img/clip-path-group-3.png",
  group = "/img/group-7.png",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[933px] h-[406px] relative ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="left-px inline-flex flex-col items-start top-0 gap-[56px] absolute">
        <div
          className={`w-[375px] relative cursor-pointer ${state.property1 === "default" ? "h-[88px]" : "h-[32px]"}`}
          onClick={() => {
            dispatch("click_304");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter_304");
          }}
        >
          <div
            className={`left-[38px] top-0 absolute ${state.property1 === "default" ? "w-[341px]" : "w-[339px]"} ${
              state.property1 === "default" ? "h-[88px]" : "h-[32px]"
            }`}
          >
            <p className="[font-family:'General_Sans-Semibold',Helvetica] w-[337px] left-0 tracking-[0] text-[24px] top-0 text-white font-normal leading-[normal] absolute">
              Loan Disbursal in 48 Hours
            </p>
            {state.property1 === "default" && (
              <p className="absolute w-[337px] top-[44px] left-0 [font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                Assistance from start to end for a hassle-free experience
              </p>
            )}
          </div>
          <div
            className={`w-[6px] left-0 top-0 rounded-[10px] absolute ${
              state.property1 === "default" ? "h-[88px]" : "h-[32px]"
            } ${state.property1 === "default" ? "bg-[#14dfdf]" : "bg-[#5d727f]"}`}
          />
        </div>
        <div
          className={`relative cursor-pointer ${state.property1 === "variant-2" ? "w-[379px]" : "w-[377px]"} ${
            state.property1 === "variant-2" ? "mr-[-4.00px]" : "mr-[-2.00px]"
          } ${state.property1 === "variant-2" ? "h-[88px]" : "h-[32px]"}`}
          onClick={() => {
            dispatch("click");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
        >
          <div className="[font-family:'General_Sans-Semibold',Helvetica] w-[337px] left-[38px] tracking-[0] text-[24px] top-0 text-white font-normal leading-[normal] absolute">
            24x7 Customer Support
          </div>
          {state.property1 === "variant-2" && (
            <p className="absolute w-[337px] top-[44px] left-[38px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              Get a dedicated Customer Relationship Officer
            </p>
          )}

          <div
            className={`w-[6px] left-0 top-0 rounded-[10px] absolute ${
              state.property1 === "variant-2" ? "h-[88px]" : "h-[32px]"
            } ${state.property1 === "variant-2" ? "bg-[#14dfdf]" : "bg-[#5d727f]"}`}
          />
        </div>
        <div
          className={`relative cursor-pointer ${state.property1 === "variant-3" ? "w-[379px]" : "w-[377px]"} ${
            state.property1 === "variant-3" ? "mr-[-4.00px]" : "mr-[-2.00px]"
          } ${state.property1 === "variant-3" ? "h-[88px]" : "h-[32px]"}`}
          onClick={() => {
            dispatch("click_270");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter_270");
          }}
        >
          <div className="[font-family:'General_Sans-Semibold',Helvetica] w-[337px] left-[38px] tracking-[0] text-[24px] top-0 text-white font-normal leading-[normal] absolute">
            Quick &amp; Easy Process
          </div>
          {state.property1 === "variant-3" && (
            <p className="absolute w-[337px] top-[44px] left-[38px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              A&nbsp;&nbsp;hassle-free experience with start to end assistance provided
            </p>
          )}

          <div
            className={`w-[6px] left-0 top-0 rounded-[10px] absolute ${
              state.property1 === "variant-3" ? "h-[88px]" : "h-[32px]"
            } ${state.property1 === "variant-3" ? "bg-[#14dfdf]" : "bg-[#5d727f]"}`}
          />
        </div>
        <div
          className={`relative cursor-pointer ${state.property1 === "variant-4" ? "w-[379px]" : "w-[377px]"} ${
            state.property1 === "variant-4" ? "mr-[-4.00px]" : "mr-[-2.00px]"
          } ${state.property1 === "variant-4" ? "h-[88px]" : "h-[32px]"}`}
          onClick={() => {
            dispatch("click_273");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter_273");
          }}
        >
          <div className="[font-family:'General_Sans-Semibold',Helvetica] w-[337px] left-[38px] tracking-[0] text-[24px] top-0 text-white font-normal leading-[normal] absolute">
            Help with Documentation
          </div>
          {state.property1 === "variant-4" && (
            <p className="absolute w-[337px] top-[44px] left-[38px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              Doorstep service for document collection to expedite loan disbursal
            </p>
          )}

          <div
            className={`w-[6px] left-0 top-0 rounded-[10px] absolute ${
              state.property1 === "variant-4" ? "h-[88px]" : "h-[32px]"
            } ${state.property1 === "variant-4" ? "bg-[#14dfdf]" : "bg-[#5d727f]"}`}
          />
        </div>
      </div>
      <div className="w-[370px] left-[563px] top-0 h-[372px] rounded-[185.11px/185.78px] absolute">
        <div className="w-[370px] left-0 opacity-10 top-0 blur-[10px] h-[372px] rounded-[185.11px/185.78px] bg-[#8dffff] absolute" />
        {state.property1 === "default" && (
          <div className="absolute w-[278px] h-[304px] top-[15px] left-[46px]">
            <div className="h-[304px]">
              <div className="relative w-[227px] h-[234px] top-[49px] left-[25px]">
                <div className="h-[234px] overflow-hidden">
                  <div className="w-[228px] h-[234px]">
                    <div className="h-[234px]">
                      <div className="relative w-[227px] h-[234px]">
                        <img
                          className="absolute w-[10px] h-[18px] top-[39px] left-[110px]"
                          alt="Rectangle"
                          src="/img/rectangle-26.png"
                        />
                        <img
                          className="absolute w-[13px] h-[16px] top-[49px] left-[76px]"
                          alt="Rectangle"
                          src="/img/rectangle-25.png"
                        />
                        <img
                          className="absolute w-[16px] h-[14px] top-[76px] left-[50px]"
                          alt="Rectangle"
                          src="/img/rectangle-24.png"
                        />
                        <img
                          className="absolute w-[17px] h-[11px] top-[112px] left-[41px]"
                          alt="Rectangle"
                          src={rectangle}
                        />
                        <img
                          className="absolute w-[16px] h-[14px] top-[145px] left-[50px]"
                          alt="Rectangle"
                          src="/img/rectangle-22.png"
                        />
                        <img
                          className="absolute w-[13px] h-[16px] top-[169px] left-[76px]"
                          alt="Rectangle"
                          src="/img/rectangle-21.png"
                        />
                        <img
                          className="absolute w-[10px] h-[18px] top-[178px] left-[110px]"
                          alt="Rectangle"
                          src="/img/rectangle-20.png"
                        />
                        <img
                          className="absolute w-[13px] h-[16px] top-[169px] left-[142px]"
                          alt="Rectangle"
                          src="/img/rectangle-19.png"
                        />
                        <img
                          className="absolute w-[16px] h-[14px] top-[145px] left-[165px]"
                          alt="Rectangle"
                          src="/img/rectangle-18.png"
                        />
                        <img
                          className="absolute w-[17px] h-[11px] top-[112px] left-[173px]"
                          alt="Rectangle"
                          src={img}
                        />
                        <img
                          className="absolute w-[16px] h-[14px] top-[76px] left-[165px]"
                          alt="Rectangle"
                          src="/img/rectangle-16.png"
                        />
                        <img
                          className="absolute w-[13px] h-[16px] top-[49px] left-[142px]"
                          alt="Rectangle"
                          src="/img/rectangle-15.png"
                        />
                        <div
                          className={`absolute w-[224px] h-[234px] top-0 left-[3px] bg-[url(/img/vector-2.svg)] bg-[100%_100%] ${groupClassName}`}
                        >
                          <img
                            className="absolute w-[224px] h-[234px] top-0 left-0"
                            alt="Clip path group"
                            src={clipPathGroup}
                          />
                        </div>
                        <img
                          className="absolute w-[44px] h-[56px] top-[37px] left-0"
                          alt="Rectangle"
                          src="/img/rectangle-14.png"
                        />
                        <img className="absolute w-[73px] h-[46px] top-[93px] left-[77px]" alt="Group" src={group} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {["variant-2", "variant-3", "variant-4"].includes(state.property1) && (
          <img
            className={`absolute ${
              state.property1 === "variant-3"
                ? "w-[282px]"
                : state.property1 === "variant-4"
                ? "w-[319px]"
                : "w-[210px]"
            } ${
              state.property1 === "variant-3"
                ? "left-[44px]"
                : state.property1 === "variant-4"
                ? "left-[26px]"
                : "left-[80px]"
            } ${
              state.property1 === "variant-3"
                ? "top-[58px]"
                : state.property1 === "variant-4"
                ? "top-[45px]"
                : "top-[44px]"
            } ${state.property1 === "variant-4" ? "object-cover" : ""} ${
              state.property1 === "variant-3"
                ? "h-[257px]"
                : state.property1 === "variant-4"
                ? "h-[283px]"
                : "h-[284px]"
            }`}
            alt="Kjdfhldfesbghj"
            src={
              state.property1 === "variant-3"
                ? "/img/toto97-1.png"
                : state.property1 === "variant-4"
                ? "/img/wepik-export-20231010113226nog9-1.png"
                : "/img/kjdfhldfesbghj-1.png"
            }
          />
        )}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-2",
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };

    case "click_270":
      return {
        ...state,
        property1: "variant-3",
      };

    case "click_273":
      return {
        ...state,
        property1: "variant-4",
      };

    case "click_304":
      return {
        ...state,
        property1: "default",
      };
  }

  switch (action) {
    case "mouse_enter":
      return {
        property1: "variant-2",
      };

      case "mouse_enter_270":
        return {
          ...state,
          property1: "variant-3",
        };
  
      case "mouse_enter_273":
        return {
          ...state,
          property1: "variant-4",
        };
  
      case "mouse_enter_304":
        return {
          ...state,
          property1: "default",
        };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  rectangle: PropTypes.string,
  img: PropTypes.string,
  clipPathGroup: PropTypes.string,
  group: PropTypes.string,
};
