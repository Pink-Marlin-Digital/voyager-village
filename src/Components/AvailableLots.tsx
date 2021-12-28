/* eslint-disable */
import React from "react";
import posts from "./lots";

export const AvailableLots = () => {
  const linkClassName =
    "hover:underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 rounded mt-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <a id="available" />

          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Available Lots
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Flash Sale! until Jan 1st pick up any of these lots for the sale
            price listed. After new years the price will return to its original
            value.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <div className="text-right">
                      <div className={post.salePrice ? "line-through" : ""}>
                        {formatter.format(post.originalPrice)}
                      </div>
                      {post.salePrice ? (
                        <div className="text-red-600">
                          Sale: {formatter.format(post.salePrice)}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </div>
                <div className="flex justify-around mt-6">
                  <div
                    className="border-2 rounded p-2 flex "
                    style={{ flexBasis: "40%" }}
                  >
                    <a
                      href={post.propertyTaxLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`${linkClassName} mt-2 flex flex-col text-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Property Tax Information</span>
                    </a>
                  </div>
                  <div
                    className="border-2 rounded flex p-2"
                    style={{ flexBasis: "40%" }}
                  >
                    <a
                      href={post.gisInfo}
                      className={`${linkClassName} flex flex-col text-center justify-center`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <span>G.I.S. Information</span>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a
                    href={`mailto:kenny@stargazerllc.com?subject=${post.title} property`}
                    className={linkClassName}
                  >
                    Contact us about this property
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
