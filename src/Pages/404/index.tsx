import React from "react";
import { Hero } from "../../Components/HeroV2";
import { Footer } from "../../Components/Footer";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-800 px-2 pb-6 md:py-6 pt-6 lg:p-16 w-full md:min-h-[73vh] flex items-center">
        <div className="bg-white rounded-md p-6 lg:p-20 flex flex-col items-center justify-center w-full gap-6">
          <h1 className="text-[#4F46E5] font-extrabold text-6xl lg:text-8xl text-center">
            404
          </h1>
          <h3 className="text-gray-900 font-extrabold text-3xl lg:text-4xl text-center">
            Something's missing.
          </h3>
          <p className="text-gray-500 font-normal text-lg lg:text-xl text-center">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            to="/"
            className="text-white bg-indigo-600 hover:bg-indigo-800 rounded-xl p-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
