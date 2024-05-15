import { useEffect, useState } from "react";
import { Hero } from "../../../Components/HeroV2";
import { Footer } from "../../../Components/Footer";
import { useParams } from "react-router-dom";
import { getDetailBlogData } from "../../../utils/pageQueries/DetailBlog";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const DetailBlog = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const getData = await getDetailBlogData({
          filters: { slug: { eq: params.slug } },
        });
        setData(getData?.voyagerArticles?.data?.[0] || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [params]);

  return (
    <>
      <Hero />
      <div className="bg-gray-800 px-2 pb-6 md:py-6 pt-6 lg:p-16 w-full">
        <div className="bg-white rounded-md p-6 lg:p-20 grid grid-cols-12 gap-6 xl:gap-20">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <LeftSide data={data} />
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <RightSide data={data} isLoading={isLoading} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailBlog;
