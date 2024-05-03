import React from "react";
import { formatDate } from "../../utils/formattedDate";
import Pagination from "../Pagination";

const RightSide = ({
  data,
  pagination,
  setPagination,
  page,
  total,
  pageSize,
  pageCount,
  isLoading,
  search,
}: any) => {
  return (
    <>
      {search && (
        <p className="text-lg text-gray-500 font-normal mb-6">
          Search results for "{search}"
        </p>
      )}
      <div className="flex flex-col gap-8 border-t pt-6 w-full">
        {isLoading ? (
          <svg
            className="animate-spin mr-3 h-10 w-10 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <>
            {data?.map((item: any) => (
              <div className="flex flex-col gap-6 border-b pb-8" key={item.id}>
                <div className="flex flex-col gap-y-4 md:flex-row justify-between md:items-center w-full">
                  <div className="flex flex-col">
                    <h4 className="text-black text-md">
                      {item?.attributes?.author?.data?.attributes?.username}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {formatDate(item?.attributes?.createdAt)} ·{" "}
                      {item?.attributes?.minutes_read} min read
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {item?.attributes?.categories?.data?.map(
                      (category: any) => (
                        <div
                          className="bg-indigo-100 px-4 py-1 rounded-md text-indigo-800 text-sm"
                          key={category.id}
                        >
                          {category?.attributes?.category}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <h2 className="text-black text-2xl lg:text-3xl font-bold">
                  {item?.attributes?.title}
                </h2>
                <p className="text-gray-500 text-md">
                  {item?.attributes?.article?.slice(0, 500)}
                </p>
                <a
                  href={`/blogs/${item?.attributes?.slug}`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <p className="text-indigo-600 font-semibold">Read More</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.2345 2.63438C8.38452 2.4844 8.58797 2.40015 8.8001 2.40015C9.01223 2.40015 9.21567 2.4844 9.3657 2.63438L14.1657 7.43438C14.3157 7.5844 14.3999 7.78784 14.3999 7.99998C14.3999 8.21211 14.3157 8.41555 14.1657 8.56558L9.3657 13.3656C9.21482 13.5113 9.01273 13.5919 8.80298 13.5901C8.59322 13.5883 8.39257 13.5042 8.24424 13.3558C8.09592 13.2075 8.01178 13.0069 8.00996 12.7971C8.00814 12.5873 8.08877 12.3853 8.2345 12.2344L11.6689 8.79998H2.4001C2.18792 8.79998 1.98444 8.71569 1.83441 8.56566C1.68438 8.41563 1.6001 8.21215 1.6001 7.99998C1.6001 7.7878 1.68438 7.58432 1.83441 7.43429C1.98444 7.28426 2.18792 7.19998 2.4001 7.19998H11.6689L8.2345 3.76558C8.08452 3.61555 8.00027 3.41211 8.00027 3.19998C8.00027 2.98784 8.08452 2.7844 8.2345 2.63438Z"
                      fill="#4F46E5"
                    />
                  </svg>
                </a>
              </div>
            ))}
            <Pagination
              page={page}
              pageCount={pageCount}
              total={total}
              pageSize={pageSize}
              setPagination={setPagination}
              pagination={pagination}
            />
          </>
        )}
      </div>
    </>
  );
};

export default RightSide;
