import React from "react";
import { Group } from "../components/Group";
import { KeyboardArrowDown } from "../icons/KeyboardArrowDown";
import { PropertyDefaultWrapper } from "../components/PropertyDefaultWrapper";
// import { EmbedPDF } from "@simplepdf/react-embed-pdf";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Desktop() {
    return (
        <div className="relative w-full h-[4716px] bg-neutral-950 overflow-hidden">
            <div className="absolute w-[2980px] h-[1164px] top-[2195px] left-[-770px]">
                <div className="absolute w-[890px] h-[787px] top-0 left-[2090px] bg-[#002a38] rounded-[445px/393.5px] blur-[500px]" />
                <div className="absolute w-[890px] h-[787px] top-0 left-0 bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[500px]" />
                <div className="absolute w-full h-[723px] top-[441px] left-[770px]">
                    <div className="absolute max-w-full h-[97px] top-[79px] left-0 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
                    <div className="absolute top-[231px] left-[635px] [-webkit-text-stroke:1px_#000000] [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                        ABOUT US
                    </div>
                    <div className="absolute w-[1199px] h-[392px] top-[331px] left-[120px]">
                        <div className="inline-flex flex-col items-start gap-[10px] p-[20px] absolute top-0 left-[2px] rounded-[20px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="relative w-[439px] mt-[-1.00px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[40px]">
                                BlackBuck Finserve
                            </div>
                            <p className="relative w-[439px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[30px]">
                                BlackBuck&#39;s latest venture, a non-banking financial service provider, aims to provide financial
                                solutions for truck owners in India
                            </p>
                        </div>
                        <div className="inline-flex flex-col items-start gap-[10px] p-[20px] absolute top-[212px] left-0 rounded-[20px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="relative w-[544px] mt-[-1.00px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[40px]">
                                We as a Company
                            </div>
                            <p className="relative w-[1159px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[30px]">
                                Headquartered in Bengaluru, BlackBuck is a leading trucking platform in India that connects 1,00,000+
                                truckers with 25,000 + transporters from all parts of the country.
                                <br />
                                With a comprehensive suite of products and solutions, BlackBuck aims to empower every truck owner in the
                                country.
                            </p>
                        </div>
                        <div className="inline-flex flex-col items-start gap-[10px] p-[20px] absolute top-0 left-[516px] rounded-[20px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgb(248.63,248.63,248.63)_0%,rgb(194.44,194.44,194.44)_100%)]">
                            <div className="relative w-[544px] mt-[-1.00px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[40px]">
                                BlackBuck Finserve’s Speciality
                            </div>
                            <p className="relative w-[643px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[30px]">
                                We specialize in providing loans tailored to the unique needs of the trucking community, from small
                                commercial vehicle fleet operators to first-time buyers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-[444px] top-[20px] left-[770px]">
                    <div className="absolute w-full h-[97px] top-0 left-0 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
                    <div className="absolute top-[152px] left-[603px] [-webkit-text-stroke:1px_#000000] [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                        OUR POLICIES
                    </div>
                    <div className="absolute w-[1200px] h-[192px] top-[252px] left-[120px]">
                        <Group
                            className="!absolute !left-0 !top-0"
                            groupClassName="bg-[url(../../public/img/keyboard-arrow-right-3.svg)]"
                            text="Interest Rate Policy"
                        />
                        <Group
                            className="!absolute !left-0 !top-[112px]"
                            groupClassName="bg-[url(../../public/img/keyboard-arrow-right-5.svg)]"
                            text="MITC and Schedule of Charges"
                        />
                        <Group
                            className="!absolute !left-[616px] !top-0"
                            groupClassName="bg-[url(../../public/img/keyboard-arrow-right.svg)]"
                            text="Gradation of Risk"
                        />
                        <Group
                            className="!absolute !left-[616px] !top-[112px]"
                            groupClassName="bg-[url(../../public/img/keyboard-arrow-right-2.svg)]"
                            text="Fair Practices Code"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-[2235px] top-[-664px] left-[-770px]">
                <div className="absolute w-full h-[97px] top-[2138px] left-[770px] bg-neutral-950 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
                <div className="absolute w-[2269px] h-[905px] top-0 left-[356px] bg-[#002a38] rounded-[1134.5px/452.5px] blur-[500px]" />
                <div className="absolute w-[890px] h-[806px] top-[1371px] left-[2090px] bg-[#002a38] rounded-[445px/403px] blur-[500px]" />
                <div className="absolute w-[890px] h-[806px] top-[1371px] left-0 bg-[#002a38] rounded-[445px/403px] rotate-180 blur-[500px]" />
                <img
                    className="absolute w-[647px] h-[652px] top-[706px] left-[1146px]"
                    alt="Vikram bawa"
                    src="img/vikram-bawa-20221117-1028-pankaj-t-blackbuck-copy-1.png"
                />
                <div className="absolute w-full h-[349px] top-[1009px] left-[770px] [background:linear-gradient(0deg,rgb(11,15,16)_0%,rgba(11,15,16,0)_100%)]" />
                <div className="absolute w-full h-[825px] top-[1343px] left-[770px]">
                    <div className="relative w-full h-[825px]">
                        <div className="absolute w-full h-[825px] top-0 left-0">
                            <div className="relative h-[825px]">
                                <div className="absolute w-full h-[730px] top-[95px] left-0 backdrop-blur-[80px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(80px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]" />
                                <div className="absolute w-[483px] h-[136px] top-[273px] left-[736px]">
                                    <div className="relative w-[481px] h-[136px] rounded-[20px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <p className="absolute w-[278px] top-[19px] left-[182px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
                                            Refinancing Services for Existing Commercial Vehicles
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[483px] h-[136px] top-[441px] left-[736px]">
                                    <div className="relative w-[481px] h-[136px] rounded-[20px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <p className="absolute w-[278px] top-[35px] left-[182px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
                                            Loans with Balance Transfer options
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[483px] h-[136px] top-[609px] left-[736px]">
                                    <div className="relative w-[481px] h-[136px] rounded-[20px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                        <p className="absolute w-[278px] top-[35px] left-[182px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
                                            Loans even for First time buyer
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-[96px] top-0 left-0 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
                            </div>
                        </div>
                        <div className="absolute w-[483px] h-[472px] top-[273px] left-[223px]">
                            <div className="relative w-[481px] h-[472px] rounded-[20px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                                <p className="absolute w-[441px] top-[355px] left-[19px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
                                    Loans for All kinds of used commercial vehicles (CV, Pickup, SCV, M&amp;HCV, Tippers &amp; more)
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-[174px] left-[584px] [-webkit-text-stroke:1px_#000000] [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                            WHAT WE OFFER
                        </div>
                    </div>
                </div>
                <div className="absolute w-[726px] h-[176px] top-[1110px] left-[1125px]">
                    <p className="absolute top-0 left-0 [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[64px] text-center tracking-[1.50px] leading-[72px]">
                        EASY &amp; QUICK LOANS
                        <br />
                        FOR USED TRUCKS
                    </p>
                    <div className="absolute w-[500px] h-[22px] top-[154px] left-[128px]">
                        <div className="absolute top-0 left-0 [font-family:'General_Sans-Semibold',Helvetica] font-normal text-[#14dfdf] text-[16px] text-center tracking-[4.16px] leading-[normal]">
                            LOAN IN 48 HRS
                        </div>
                        <div className="absolute top-0 left-[226px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-[#14dfdf] text-[16px] text-center tracking-[4.16px] leading-[normal]">
                            LOW INTEREST RATES
                        </div>
                        <div className="absolute w-[4px] h-[4px] top-[9px] left-[201px] bg-[#14dfdf] rounded-[2px]" />
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] p-[8px] absolute top-[1322px] left-[1466px] rounded-[100px] border border-none border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.26),rgba(255,255,255,0))_1] [background:linear-gradient(180deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_100%)]">
                    <KeyboardArrowDown className="!relative !w-[32px] !h-[32px]" color="white" />
                </div>
                <img className="absolute w-[124px] h-[86px] top-[1972px] left-[1534px]" alt="Element" src="img/7364-1.png" />
                <img
                    className="absolute w-[133px] h-[108px] top-[1788px] left-[1530px] object-cover"
                    alt="Element"
                    src="img/24243242-2.png"
                />
                <img
                    className="absolute w-[262px] h-[253px] top-[1693px] left-[1103px]"
                    alt="Saving money"
                    src="img/saving-money-1.png"
                />
                <img
                    className="absolute w-[128px] h-[90px] top-[1636px] left-[1532px] object-cover"
                    alt="Icon"
                    src="img/icon22-1.png"
                />
            </div>
            <div className="absolute top-[1625px] left-[578px] [-webkit-text-stroke:1px_#000000] [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                WHY CHOOSE US
            </div>
            <div className="absolute w-full h-[286px] top-[4430px] left-0">
                <div className="relative h-[286px] [background:linear-gradient(180deg,rgb(10.63,10.63,10.63)_0%,rgb(0,0,0)_100%)]">
                    <p className="top-[219px] left-[48px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] absolute h-[19px] text-[14px] tracking-[0] leading-[normal]">
                        Copyright © Zinka Logistics Solutions Pvt. Ltd.
                    </p>
                    <p className="top-[219px] left-[1027px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] absolute h-[19px] text-[14px] tracking-[0] leading-[normal]">
                        All Rights Reserved | Terms and Conditions | Privacy Policy
                    </p>
                    <div className="absolute w-[62px] h-[19px] top-[139px] left-[1330px]">
                        <a
                            className="absolute w-[19px] h-[19px] top-0 left-0"
                            href="https://www.instagram.com/blackbuck_zinkalogistics/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img className="absolute w-[18px] h-[18px] top-0 left-0" alt="Instagram" src="img/instagram.svg" />
                        </a>
                        <a
                            className="absolute w-[19px] h-[19px] top-0 left-[43px]"
                            href="https://www.linkedin.com/company/blackbuck/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className="relative w-[16px] h-[16px] top-[2px] left-[2px] bg-[url(../../public/img/linkedin.svg)] bg-[100%_100%]" />
                        </a>
                    </div>
                    <div className="absolute w-[605px] h-[19px] top-[139px] left-[418px]">
                        <div className="relative w-[617px] h-[19px]">
                            <div className="top-0 left-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white absolute h-[19px] text-[14px] tracking-[0] leading-[normal]">
                                Home
                            </div>
                            <div className="left-[80px] text-center absolute h-[19px] top-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                                What We Offer
                            </div>
                            <div className="left-[216px] absolute h-[19px] top-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                                Why Choose Us
                            </div>
                            <div className="left-[359px] absolute h-[19px] top-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                                Policies
                            </div>
                            <div className="left-[450px] absolute h-[19px] top-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                                About Us
                            </div>
                            <div className="left-[551px] absolute h-[19px] top-0 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                                Contact
                            </div>
                        </div>
                    </div>
                    <img className="absolute w-[174px] h-[78px] top-[80px] left-[40px]" alt="Group" src="img/group-630266094.svg" />
                </div>
            </div>
            <div className="absolute w-full h-[572px] top-[3818px] left-[120px]">
                <div className="relative w-10/12 h-[572px] rounded-[20px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(141.31,255,255,0.36)_0%,rgba(141.31,255,255,0)_97.47%)]">
                    <div className="absolute top-[49px] left-[490px] [-webkit-text-stroke:1px_#000000] [font-family:'General_Sans-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                        CONTACT US
                    </div>
                    <div className="absolute w-[162px] h-[173px] top-[145px] left-[518px]">
                        <div className="h-[173px]">
                            <div className="w-[162px] h-[173px]">
                                <div className="h-[173px]">
                                    <div className="relative w-[162px] h-[173px]">
                                        <img className="absolute w-[157px] h-[139px] top-[34px] left-0" alt="Group" src="img/group-6.png" />
                                        <img
                                            className="absolute w-[153px] h-[135px] top-[38px] left-[4px]"
                                            alt="Clip path group"
                                            src="img/clip-path-group-2.png"
                                        />
                                        {/* <img className="absolute w-[65px] h-[70px] top-0 left-[97px]" alt="Group" src="img/group-3.png" /> */}
                                        <div className="absolute w-[118px] h-[115px] top-[12px] left-[24px]">
                                            <div className="relative h-[115px]">
                                                 <img
                                                    className="absolute w-[104px] h-[96px] top-[19px] left-[3px]"
                                                    alt="Rectangle"
                                                    src="img/rectangle-13.png"
                                                />
                                                <img
                                                    className="absolute w-[46px] h-[47px] top-[5px] left-[5px]"
                                                    alt="Clip path group"
                                                    src="img/group-2.png"
                                                /> 
                                                <img
                                                    className="absolute w-[46px] h-[47px] top-[68px] left-[66px]"
                                                    alt="Group"
                                                    src="img/group-2.png"
                                                />
                                                <img className="absolute w-[51px] h-[47px] top-[6px] left-[84px]" alt="Group" src="img/group-5.png" />
                                                {/* <img
                                                    className="absolute w-[112px] h-[109px] top-[6px] left-0 mix-blend-hard-light"
                                                    alt="Vector"
                                                    src="img/image.svg"
                                                /> */}
                                                {/* <img
                                                    className="absolute w-[46px] h-[49px] top-[63px] left-[71px]"
                                                    alt="Group"
                                                    src="img/group-6.png"
                                                /> */}
                                                {/* <img className="absolute w-[52px] h-[47px] top-0 left-[4px]" alt="Group" src="img/group-7.png" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-[648px] h-[144px] top-[370px] left-[286px]">
                        <div className="absolute w-[263px] h-[48px] top-0 left-0">
                            <div className="absolute top-[9px] left-[72px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-[#14dfdf] text-[24px] tracking-[0] leading-[28px] whitespace-nowrap">
                                +91 - 8046481828
                            </div>
                            <div className="absolute w-[48px] h-[48px] top-0 left-0">
                                <div className="relative h-[48px] rounded-[24px]">
                                    <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-[#8dffff] rounded-[24px] blur-[3px] opacity-20" />
                                    <img
                                        className="absolute w-[28px] h-[28px] top-[10px] left-[10px]"
                                        alt="Call"
                                        src="img/call-fill1-wght400-grad0-opsz24.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[316px] h-[48px] top-0 left-[334px]">
                            <a
                                className="absolute top-[9px] left-[72px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-[#14dfdf] text-[24px] tracking-[0] leading-[28px] whitespace-nowrap"
                                href="mailto:care@blackbuck.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                care@blackbuck.com
                            </a>
                            <div className="absolute w-[48px] h-[48px] top-0 left-0">
                                <div className="relative h-[48px] rounded-[24px]">
                                    <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-[#8dffff] rounded-[24px] blur-[3px] opacity-20" />
                                    <img
                                        className="absolute w-[28px] h-[28px] top-[10px] left-[10px]"
                                        alt="Mail"
                                        src="img/mail-fill1-wght400-grad0-opsz24.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[650px] h-[64px] top-[80px] left-0">
                            <p className="absolute w-[576px] top-0 left-[72px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[32px]">
                                No. 84/2, II Floor, Vaswani Presidio, Panathur Main Road, Off Outer Ring Road, Bangalore – 560103,
                                Karnataka, India.
                            </p>
                            <div className="absolute w-[48px] h-[48px] top-0 left-0">
                                <div className="relative h-[48px] rounded-[24px]">
                                    <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-[#8dffff] rounded-[24px] blur-[3px] opacity-20" />
                                    <img
                                        className="absolute w-[28px] h-[28px] top-[10px] left-[10px]"
                                        alt="Location on"
                                        src="img/location-on-fill1-wght400-grad0-opsz24.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[890px] h-[787px] top-[5172px] left-[1320px] bg-[#002a38] rounded-[445px/393.5px] blur-[500px]" />
            <div className="absolute w-[890px] h-[787px] top-[5172px] left-[-770px] bg-[#002a38] rounded-[445px/393.5px] rotate-180 blur-[500px]" />
            <div className="absolute w-full h-[348px] top-[3399px] left-0">
                <div className="absolute w-full h-[96px] top-0 left-0 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1]" />
                <img
                    className="absolute w-[366px] h-[24px] top-[163px] left-[537px]"
                    alt="In partnership with"
                    src="img/IN-partnership-with.png"
                />
                <div className="absolute w-full h-[129px] top-[219px] left-0">
                    <div className="absolute w-[437px] h-[129px] top-0 left-0">
                        <img
                            className="absolute w-[180px] h-[42px] top-[35px] left-[256px] object-cover"
                            alt="Element"
                            src="img/20230105061739-1-1.png"
                        />
                        <div className="absolute w-[437px] h-[129px] top-0 left-0 [background:linear-gradient(90deg,rgb(0,0,0)_29.69%,rgba(0,0,0,0)_100%)]" />
                    </div>
                    <img
                        className="absolute w-[112px] h-[48px] top-[36px] left-[544px] object-cover"
                        alt="Element IDFC bank logo"
                        src="img/332px-IDFC-bank-logo-1.png"
                    />
                    <img className="absolute w-[153px] h-[48px] top-[33px] left-[790px]" alt="Pngegg" src="img/pngegg-1.png" />
                    <div className="absolute w-full h-[129px] top-0 left-[1003px]">
                        <img
                            className="absolute w-[171px] h-[48px] top-[33px] left-[53px] object-cover"
                            alt="Tvs credit logo"
                            src="img/tvs-credit-logo-01-1.png"
                        />
                        <div className="absolute w-full h-[129px] top-0 left-0 rotate-180 [background:linear-gradient(90deg,rgb(0,0,0)_69.69%,rgba(0,0,0,0)_100%)]" />
                    </div>
                </div>
            </div>
            <PropertyDefaultWrapper
                className="!absolute !left-[253px] !top-[1753px]"
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
            <img className="fixed w-full h-auto top-0 left-0" alt="Frame" src="img/frame-39598.svg" />
        </div>
    );
};
