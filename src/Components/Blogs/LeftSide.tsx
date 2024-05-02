import React, { useEffect } from "react";
import Accordion from "../Accordion";
import { getcategoryData } from "../../utils/pageQueries/Category";

const LeftSide = ({
  setCategories,
  categories,
  sortValue,
  setSortValue,
  search,
  setSearch,
}: any) => {
  const handleRadioChange = (value: string) => {
    setSortValue(value);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const getData = await getcategoryData({});
        const _temp: { value: boolean; label: string | undefined }[] = [];
        getData?.categories?.data.forEach((item) => {
          _temp.push({
            value: false,
            label: item.attributes?.category,
          });
        });
        setCategories(_temp);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-black text-2xl lg:text-3xl font-bold">Updates</h3>
      <p className="text-gray-500 text-md lg:text-lg font-normal">
        Stay informed with our latest insights and updates
      </p>
      <div
        className="relative mt-2 rounded-md shadow-sm"
        style={{ height: 42 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full bg-gray-50 rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
          style={{ height: 42 }}
        />
      </div>
      <Accordion
        title="Sort"
        content={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                value="desc"
                onChange={() => handleRadioChange("desc")}
                className="accent-indigo-600"
                checked={sortValue === "desc"}
                style={{ width: 16, height: 16 }}
              />
              <p className="font-medium text-gray-900">Newest</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                value="asc"
                onChange={() => handleRadioChange("asc")}
                className="accent-indigo-600"
                style={{ width: 16, height: 16 }}
                checked={sortValue === "asc"}
              />
              <p className="font-medium text-gray-900">Oldest</p>
            </div>
          </div>
        }
      />
      <Accordion
        title="Category"
        content={
          <div className="flex flex-col gap-4">
            {categories.map(
              (item: { value: boolean; label: string }, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={item.value}
                    onChange={(e) => {
                      const updatedOptions = categories.map((option: any) => {
                        if (option.label === item.label) {
                          return { ...option, value: e.target.checked };
                        }
                        return option;
                      });
                      setCategories(updatedOptions);
                    }}
                    className="accent-indigo-600"
                  />
                  <p className="text-md font-medium text-gray-900">
                    {item.label}
                  </p>
                </div>
              )
            )}
          </div>
        }
      />
    </div>
  );
};

export default LeftSide;
