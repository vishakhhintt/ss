import React from 'react';
import { useEffect } from "react";
import AOS from "aos";

//import 'bootstrap';
import Header from './Header';
import Footer from './Footer';
import "aos/dist/aos.css";
if (typeof window !== "undefined") {
    require("jquery");
    require("popper.js");
    require("bootstrap");
  }
export default function Layout({children})
{
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}
