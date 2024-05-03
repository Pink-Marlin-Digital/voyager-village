import React from "react";
import { formatDate } from "../utils/formattedDate";

const Blog = ({ data, isLoading }: any) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden rounded mb-8 hidden md:block">
      {isLoading ? (
        <div className="w-full px-6 py-8 grid grid-cols-12 gap-4">
          <div className="col-span-5">
            <div className="h-72 w-full bg-gray-500 animate-pulse" />
          </div>
          <div className="col-span-7 flex h-full justify-center flex-col gap-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="bg-gray-500 w-28 h-4 animate-pulse rounded-full" />
                <div className="bg-gray-500 w-20 h-4 animate-pulse rounded-full" />
              </div>
              <div className="bg-gray-500 px-4 py-1 w-16 h-7 animate-pulse rounded-md" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-500 animate-pulse w-36 h-4 rounded-full" />
              <div className="bg-gray-500 animate-pulse w-56 h-4 rounded-full" />
              <div className="bg-gray-500 w-28 h-4 animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-6 py-8 grid grid-cols-12 gap-4">
          <div className="col-span-5">
            <img
              src={data?.blog_image?.data?.attributes?.url}
              alt="blog"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-7 flex h-full justify-center flex-col gap-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col">
                <h4 className="text-black text-md">
                  {data?.author?.data?.attributes?.username}
                </h4>
                <p className="text-gray-500 text-sm">
                  {formatDate(data?.createdAt)} · {data?.minutes_read} min read
                </p>
              </div>
              <div className="flex gap-2">
                {data?.categories?.data?.map((category: any) => (
                  <div
                    className="bg-indigo-100 px-4 py-1 rounded-md text-indigo-800 text-sm"
                    key={category.id}
                  >
                    {category?.attributes?.category}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-black text-3xl font-bold">{data?.title}</h3>
              <p className="text-gray-500 text-md">
                {data?.article?.slice(0, 300)}
              </p>
              <a
                href={`/blogs/${data?.slug}`}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
