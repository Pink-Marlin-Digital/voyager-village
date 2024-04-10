import React from "react";
import CardLatestUpdate from "./CardLatestUpdate";

const LatestUpdate = () => {
  return (
    <div className="relative py-8 md:py-16 bg-white overflow-hidden rounded mt-8">
      <div className="w-full flex flex-col items-center gap-8 px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-2xl md:text-4xl text-black font-bold">
            Latest Updates
          </h1>
          <p className="text-gray-500 text-md text-center">
            Stay informed with our latest insights and updates
          </p>
        </div>
        <div className="grid grid-cols-12 w-full gap-6">
          {[0, 1, 2].map((item) => (
            <div key={item} className="col-span-12 lg:col-span-4 md:col-span-6">
              <CardLatestUpdate />
            </div>
          ))}
        </div>
        <div className="bg-indigo-600 rounded-md text-md cursor-pointer text-white py-3 px-4 flex items-center justify-center">
          All Updates
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
