import React from "react";

const CardLatestUpdate = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-gray-900 text-md">Bonnie Green</h4>
          <p className="text-gray-500 text-sm">Mar 25, 2024 · 16 min read</p>
        </div>
        <div className="bg-indigo-100 text-indigo-800 rounded-md px-4 py-1">
          Article
        </div>
      </div>
      <div className="w-full rounded-md">
        <img
          src="/golf-course-sm.jpg"
          alt="blog image"
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 text-2xl font-bold">Lorem Ipsum</h3>
        <p className="text-gray-500 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          justo id ligula ullamcorper, eget sagittis enim porta. Duis commodo
          diam non nisi dignissim, vel tincidunt dui suscipit. Integer eu urna a
          odio condimentum aliquet. Nulla facilisi.{" "}
        </p>
      </div>
    </div>
  );
};

export default CardLatestUpdate;
