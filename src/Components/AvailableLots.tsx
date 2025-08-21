/* eslint-disable */
import React, { useState } from "react";
import posts from "./lots";

export const AvailableLots = () => {
  const linkClassName =
    "hover:underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const ImageCarousel = ({ images }: { images: string | string[] }) => {
    const imgs = Array.isArray(images) ? images : [images];
    const [idx, setIdx] = useState(0);
    if (imgs.length === 1) {
      return <img className="h-[36rem] w-full object-cover object-bottom" src={imgs[0]} alt="" />;
    }
    const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
    const next = () => setIdx((i) => (i + 1) % imgs.length);
    return (
      <div className="relative">
        <img className="h-[36rem] w-full object-cover object-bottom" src={imgs[idx]} alt="" />
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };
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
            All lots in Voyager Village are 1/2 acre.
          </p>
        </div>
        <div className="mt-12 w-full grid gap-5 lg:grid-cols-1">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <ImageCarousel images={post.imageUrl} />
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
                    className="border-2 rounded p-2 flex justify-center "
                    style={{ flexBasis: "40%" }}
                  >
                    <a
                      href={post.mlsLink || post.propertyTaxLink}
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
                      <span>
                        {post.mlsLink
                          ? "MLS Listing"
                          : "Property Tax Information"}
                      </span>
                    </a>
                  </div>
                  <div
                    className="border-2 rounded flex p-2 justify-center"
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
                <div className="flex justify-around mt-6">
                  <div
                    className="border-2 rounded p-2 flex justify-center"
                    style={{ flexBasis: "40%" }}
                  >
                    <a
                      href={post.mapLink}
                      rel="noreferrer"
                      className={`${linkClassName} mt-2 flex flex-col text-center justify-center`}
                    >
                      <svg
                        className="h-6 w-6 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <span>Address</span>
                    </a>
                  </div>
                  <div
                    className="border-2 rounded flex p-2 justify-center"
                    style={{ flexBasis: "40%" }}
                  >
                    <a
                      href={`mailto:kenny@stargazerllc.com?subject=${post.title} property`}
                      className={`${linkClassName} flex flex-col text-center justify-center`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="h-6 w-6 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
