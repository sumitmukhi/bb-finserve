
import React from "react";
import { useState } from "react";
import Image from 'next/image';

export const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const toggleClose = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    })

    React.useEffect(() => {
        (window.onscroll = () => {
            let current: string | null;
            const sections = document.querySelectorAll("section");
            const navLi = document.querySelectorAll("#homenav a div");

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current!)) {
                    li.classList.add("active");
                }
            });
        })();
    });
    return (
        <div className="fixed backdrop-blur-[25px] bg-white bg-opacity-0 self-stretch z-[50] flex w-full items-start justify-between gap-5 px-12 py-4 border-b-white border-b-opacity-0 border-b border-solid max-md:max-w-full [border-image:linear-gradient(to_right,rgba(255,255,255,0),rgb(255,255,255)_49.4%,rgba(255,255,255,0)_100%)_1] max-md:flex-wrap max-md:px-5 max-sm:p-0 max-sm:[row-gap:normal]">
            <div className="flex items-start gap-2.5 self-start max-md:justify-center max-sm:px-5">
                <Image
                    loading="lazy"
                    src="/img/f1b458f3-bb37-45e5-a109-9294b7e4727d.svg"
                    alt="Blackbuck logo"
                    width={116}
                    height={84}
                    className="aspect-[3.05] object-contain object-center w-[116px] max-sm:w-[84px] overflow-hidden max-w-full self-end"
                />
                <div className="bg-white w-px h-2.5 max-sm:h-[10px] mt-7 self-end" />
                <Image
                    loading="lazy"
                    src="/img/4a87b99e-b0e7-4625-be86-9510d2a8612b.svg"
                    alt="logo divider"
                    width={89}
                    height={100}
                    className="aspect-[6.85] object-contain object-center w-[89px] max-sm:w-[64px] fill-white overflow-hidden max-w-full mt-6 self-end"
                />
            </div>
            <div className="lg:hidden max-sm:mt-[10px] max-sm:ml-auto">
                {!isOpen ? <button className="navbar-burger flex items-center text-blue-600 p-3 z-[1] relative left-[20px] mt-[-5px]" onClick={toggle}>
                    <Image
                        loading="lazy"
                        src="/img/menu.png"
                        alt="menu"
                        width={50}
                        height={50}
                        className="block h-6 w-6 fill-current"
                    />
                </button>
                    : <button className="navbar-close flex items-center text-blue-600 p-3 z-[1] mt-[-5px]" onClick={toggleClose}>
                        <Image
                            loading="lazy"
                            src="/img/close.png"
                            alt="close"
                            width={50}
                            height={50}
                            className="block h-6 w-6 fill-current"
                        />
                    </button>}
            </div>
            <div className={`navbar-menu relative w-full h-[100vh] z-50 ${!isOpen ? 'hidden' : ''} transition `}>
                <div className="flex flex-col w-full pt-[100px]  items-center justify-center gap-[56px] relative bg-white [background:linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]">
                    <a href="#home" onClick={toggleClose}><div className="relative w-fit [text-shadow:0px_0px_15px_#ffffff] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                        Home
                    </div></a>
                    <a href="#offer" onClick={toggleClose}><div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        What We Offer
                    </div></a>
                    <a href="#choose" onClick={toggleClose}><div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Why Choose Us
                    </div></a>
                    <a href="#policy" onClick={toggleClose}><div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Our Policies
                    </div></a>
                    <a href="#about" onClick={toggleClose}><div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        About Us
                    </div></a>
                    <a href="#contact" onClick={toggleClose}><div className="relative w-fit opacity-60 [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                        Contact Us
                    </div></a>
                </div>
            </div>
            <div id="homenav" className="hidden md:flex md:visible navbar self-center flex w-[608px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                <a href="#home"><div className="text-white text-center text-base self-start home active">
                    <div className="shadow absolute w-[60px] h-[27px] -top-5 -ml-[10px]" />
                    Home
                </div></a>
                <a href="#offer"><div className="text-stone-300 text-center text-base leading-6 offer">
                    What We Offer
                    <div className="shadow absolute w-[60px] h-[27px] -top-5 ml-[10px]" />
                </div></a>
                <a href="#choose"><div className="text-stone-300 text-center text-base leading-6 choose">
                    Why Choose Us
                    <div className="shadow absolute w-[60px] h-[27px] -top-5 ml-[20px]" />
                </div></a>
                <a href="#policy"><div className="text-stone-300 text-center text-base leading-6 self-start policy">
                    Policies
                    <div className="shadow absolute w-[60px] h-[27px] -top-5 -ml-[10px]" />
                </div></a>
                <a href="#about"><div className="text-stone-300 text-center text-base leading-6 whitespace-nowrap self-start about">
                    About Us
                    <div className="shadow absolute w-[60px] h-[27px] -top-5 ml-[0px]" />
                </div></a>
            </div>
            <a href="#contact"><div className="inline-flex h-10 justify-center items-center gap-2 shrink-0 border px-4 py-0 rounded-lg border-solid border-[rgba(255,255,255,0.20)] text-white contact-us">
                Contact Us
            </div></a>

        </div>
    );
};