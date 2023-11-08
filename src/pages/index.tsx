import * as React from "react";

import { Navbar } from "@/components/Navbar";
import { Landing } from "@/components/Landing";
import { Offer } from "@/components/Offer";
import { Choose } from "@/components/Choose";
import { Policy } from "@/components/Policy";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="bg-neutral-950 flex flex-col overflow-hidden">
            <Navbar />
            <Landing />
            <Offer />
            <Choose />
            <Policy />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

