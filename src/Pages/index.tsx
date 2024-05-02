import React, { useEffect, useState } from "react";
import { Hero } from "../Components/Hero";
import { FAQ } from "../Components/FAQ";
import { About } from "../Components/About";
import { AvailableLots } from "../Components/AvailableLots";
import { Footer } from "../Components/Footer";
import Blog from "../Components/Blog";
import LatestUpdate from "../Components/LatestUpdate";
import { getblogData } from "../utils/pageQueries/Blog";
export const Index = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const getData = await getblogData({});
        setData(getData?.voyagerArticles?.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Hero />
      <div className="bg-gray-800 px-2 pb-6 md:py-6 pt-6  lg:p-16">
        <Blog data={data?.[0]?.attributes} isLoading={isLoading} />
        <About />
        <FAQ />
        <AvailableLots />
        <LatestUpdate data={data} isLoading={isLoading} />
      </div>
      <Footer />
    </>
  );
};
