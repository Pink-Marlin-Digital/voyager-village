import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formattedDate";
import Markdown from "react-markdown";

const RightSide = ({ data, isLoading }: any) => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full">
      <div>
        <Link to="/blogs" className="text-indigo-600 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.707 17.207C9.51947 17.3945 9.26516 17.4998 9 17.4998C8.73484 17.4998 8.48053 17.3945 8.293 17.207L2.293 11.207C2.10553 11.0195 2.00021 10.7652 2.00021 10.5C2.00021 10.2349 2.10553 9.98057 2.293 9.79304L8.293 3.79304C8.4816 3.61088 8.7342 3.51009 8.9964 3.51237C9.2586 3.51465 9.50941 3.61981 9.69482 3.80522C9.88023 3.99063 9.9854 4.24144 9.98767 4.50364C9.98995 4.76584 9.88916 5.01844 9.707 5.20704L5.414 9.50004H17C17.2652 9.50004 17.5196 9.6054 17.7071 9.79293C17.8946 9.98047 18 10.2348 18 10.5C18 10.7653 17.8946 11.0196 17.7071 11.2071C17.5196 11.3947 17.2652 11.5 17 11.5H5.414L9.707 15.793C9.89447 15.9806 9.99979 16.2349 9.99979 16.5C9.99979 16.7652 9.89447 17.0195 9.707 17.207Z"
              fill="#4F46E5"
            />
          </svg>
          All Updates
        </Link>
      </div>
      {isLoading ? (
        <div className="w-full px-6 py-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="bg-gray-500 w-28 h-4 animate-pulse rounded-full" />
              <div className="bg-gray-500 w-20 h-4 animate-pulse rounded-full" />
            </div>
            <div className="bg-gray-500 px-4 py-1 w-16 h-7 animate-pulse rounded-md" />
          </div>
          <div className="col-span-12">
            <div className="h-4 w-80 bg-gray-500 animate-pulse rounded-full" />
          </div>
          <div className="col-span-12">
            <div className="h-72 w-full bg-gray-500 animate-pulse" />
          </div>
          <div className="col-span-7 flex h-full justify-center flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="bg-gray-500 animate-pulse w-36 h-4 rounded-full" />
              <div className="bg-gray-500 animate-pulse w-56 h-4 rounded-full" />
              <div className="bg-gray-500 w-28 h-4 animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className="border-t border-b py-8 flex flex-col gap-6">
          <div className="flex justify-between items-center w-full">
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
          <h2 className="text-black text-2xl lg:text-4xl font-bold">
            {data?.title}
          </h2>
          <img
            src={data?.blog_image?.data?.attributes?.url}
            alt="blog"
            className="w-full h-auto"
          />
          <Markdown className="text-gray-600 text-lg">{data?.article}</Markdown>
        </div>
      )}
      <div className="w-full flex justify-between items-center">
        <div>
          <Link to="/" className="text-indigo-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.707 17.207C9.51947 17.3945 9.26516 17.4998 9 17.4998C8.73484 17.4998 8.48053 17.3945 8.293 17.207L2.293 11.207C2.10553 11.0195 2.00021 10.7652 2.00021 10.5C2.00021 10.2349 2.10553 9.98057 2.293 9.79304L8.293 3.79304C8.4816 3.61088 8.7342 3.51009 8.9964 3.51237C9.2586 3.51465 9.50941 3.61981 9.69482 3.80522C9.88023 3.99063 9.9854 4.24144 9.98767 4.50364C9.98995 4.76584 9.88916 5.01844 9.707 5.20704L5.414 9.50004H17C17.2652 9.50004 17.5196 9.6054 17.7071 9.79293C17.8946 9.98047 18 10.2348 18 10.5C18 10.7653 17.8946 11.0196 17.7071 11.2071C17.5196 11.3947 17.2652 11.5 17 11.5H5.414L9.707 15.793C9.89447 15.9806 9.99979 16.2349 9.99979 16.5C9.99979 16.7652 9.89447 17.0195 9.707 17.207Z"
                fill="#4F46E5"
              />
            </svg>
            Previous Update
          </Link>
        </div>
        <div>
          <Link to="/" className="text-indigo-600 flex items-center gap-2">
            Next Update
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 3.793C10.4805 3.60553 10.7348 3.50021 11 3.50021C11.2652 3.50021 11.5195 3.60553 11.707 3.793L17.707 9.793C17.8945 9.98053 17.9998 10.2348 17.9998 10.5C17.9998 10.7652 17.8945 11.0195 17.707 11.207L11.707 17.207C11.5184 17.3892 11.2658 17.49 11.0036 17.4877C10.7414 17.4854 10.4906 17.3802 10.3052 17.1948C10.1198 17.0094 10.0146 16.7586 10.0123 16.4964C10.01 16.2342 10.1108 15.9816 10.293 15.793L14.586 11.5H3C2.73478 11.5 2.48043 11.3946 2.29289 11.2071C2.10536 11.0196 2 10.7652 2 10.5C2 10.2348 2.10536 9.98043 2.29289 9.79289C2.48043 9.60536 2.73478 9.5 3 9.5H14.586L10.293 5.207C10.1055 5.01947 10.0002 4.76516 10.0002 4.5C10.0002 4.23484 10.1055 3.98053 10.293 3.793Z"
                fill="#4F46E5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
