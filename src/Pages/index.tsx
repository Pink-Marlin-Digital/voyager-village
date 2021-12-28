import React from "react";
import { Hero } from "../Components/Hero";
import { FAQ } from "../Components/FAQ";
import { About } from "../Components/About";
import { AvailableLots } from "../Components/AvailableLots";
import { Footer } from "../Components/Footer";
export const Index = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-800 px-2 pt-6 md:pt-0 lg:p-16 ">
        <About />
        <FAQ />
        <AvailableLots />
      </div>
      <Footer />
    </>
  );
};
