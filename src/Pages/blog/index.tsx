import React, { useCallback, useEffect, useState } from "react";
import { Hero } from "../../Components/HeroV2";
import { Footer } from "../../Components/Footer";
import LeftSide from "../../Components/Blogs/LeftSide";
import RightSide from "../../Components/Blogs/RightSide";
import { getblogData } from "../../utils/pageQueries/Blog";
import _debounce from "lodash/debounce";

const AllUpdates = () => {
  const [data, setData] = useState<any>({});
  const [sortValue, setSortValue] = useState("desc");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
  });
  const [categories, setCategories] = useState<
    { value: boolean; label: string }[]
  >([]);

  const handleDebounceFn = async (
    filters: { value: boolean; label: string }[],
    search: string
  ) => {
    let payload: any = {
      sort: [`id:${sortValue}`],
      pagination: {
        page: 1,
        pageSize: 5,
      },
      filters: {
        title: {
          containsi: search,
        },
        categories: {},
      },
    };
    const _temp: any = [];
    filters.forEach((item: any) => {
      if (item.value) {
        _temp.push({
          category: {
            eq: item.label,
          },
        });
      }
    });
    payload.filters.categories.or = _temp;
    try {
      setIsLoading(true);
      const getData = await getblogData(payload);
      setData(getData?.voyagerArticles || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  useEffect(() => {
    debounceFn(categories, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, search]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const getData = await getblogData({
          sort: [`id:${sortValue}`],
          pagination: {
            page: pagination.page,
            pageSize: pagination.pageSize,
          },
        });
        setData(getData?.voyagerArticles || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [pagination, sortValue]);

  return (
    <>
      <Hero />
      <div className="bg-gray-800 px-2 pb-6 md:py-6 pt-6 lg:p-16 w-full">
        <div className="bg-white rounded-md p-6 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-14 w-full">
          <div className="col-span-1 lg:col-span-4">
            <LeftSide
              setCategories={setCategories}
              categories={categories}
              sortValue={sortValue}
              setSortValue={setSortValue}
              search={search}
              setSearch={setSearch}
            />
          </div>
          <div className="col-span-1 lg:col-span-8">
            <RightSide
              isLoading={isLoading}
              data={data?.data}
              pagination={pagination}
              setPagination={setPagination}
              page={data?.meta?.pagination?.page}
              pageCount={data?.meta?.pagination?.pageCount}
              total={data?.meta?.pagination?.total}
              pageSize={data?.meta?.pagination?.pageSize}
              search={search}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllUpdates;
