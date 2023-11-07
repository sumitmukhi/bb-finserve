/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Group6302651985 } from "../../icons/Group6302651985";

interface Props {
  className: any;
  groupClassName: any;
  text: string;
}

export const Group = ({ className, groupClassName, text = "Interest Rate Policy" }: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[584px] h-[80px] rounded-[20px] [background:linear-gradient(180deg,rgb(47.81,47.81,47.81)_0%,rgba(0,0,0,0.73)_100%)] ${className}`}
    >
      <div className="inline-flex items-center gap-[30px] relative top-[20px] left-[20px]">
        <div className="relative w-[488px] h-[40px]">
          <Group6302651985 className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" />
          <div className="absolute w-[430px] top-[4px] left-[56px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
            {text}
          </div>
        </div>
        <div
          className={`relative w-[28px] h-[28px] bg-[url(/img/keyboard-arrow-right-5.svg)] bg-[100%_100%] ${groupClassName}`}
        />
      </div>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
};
