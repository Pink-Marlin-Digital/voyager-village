import React from "react";
import { formatDate } from "../utils/formattedDate";

const CardLatestUpdate = ({ item }: any) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg flex flex-col gap-6 h-full">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-col">
          <h4 className="text-gray-900 text-md">
            {item?.author?.data?.attributes?.username}
          </h4>
          <p className="text-gray-500 text-sm">
            {formatDate(item?.createdAt)} · {item?.minutes_read} min read
          </p>
        </div>
        <div className="flex gap-2">
          {item?.categories?.data?.map((category: any) => (
            <div
              className="bg-indigo-100 px-4 py-1 rounded-md text-indigo-800 text-sm"
              key={category.id}
            >
              {category?.attributes?.category}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full rounded-md">
        <img
          src={item?.blog_image?.data?.attributes?.url}
          alt="blog"
          className="h-56 w-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 text-2xl font-bold">{item?.title}</h3>
        <p className="text-gray-500 text-md">{item?.article?.slice(0, 400)}</p>
      </div>
    </div>
  );
};

export default CardLatestUpdate;
