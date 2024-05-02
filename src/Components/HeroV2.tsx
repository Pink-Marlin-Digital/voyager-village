import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative bg-gray-200 overflow-hidden max-h-[10vh]">
      <div className="mx-auto lg:pl-16">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 md:max-w-full lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-end sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="hidden lg:block md:ml-10 md:pr-4 md:space-x-8">
                  <a
                    href="#why"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Why Voyager Village
                  </a>

                  <a
                    href="#faq"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Frequently Asked Questions
                  </a>

                  <a
                    href="#available"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Available Lots
                  </a>
                </div>
                <div className="flex lg:hidden justify-end px-4">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <main className="hidden lg:block mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl flex flex-col">
                <span className="block xl:inline">Lots for sale in the</span>
                <span className="block text-indigo-600 xl:inline">
                  heart of cabin country
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Voyager Village is a cabin community in northwest Wisconsin.
                Owners enjoy exclusve access to 11 lakes, private boat launches,
                picnic pavilions and many other amenities provided by the
                Voyager Village POA.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="mailto:kenny@stargazerllc.com?subject=Voyager Village Lots"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/Amenity-Map-4.0.pdf"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Amenity Map
                  </a>
                </div>
              </div>
              <div className="flex-col font-sm mt-4">
                <div>
                  <a
                    href="https://www.voyagervillage.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600"
                  >
                    Visit the official Voyager Village website
                  </a>
                </div>
                <span className="text-xs">
                  This site has no direct affiliation with Voyager Village or
                  the POA
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/golf-course-sm.jpg"
          alt=""
        />
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex flex-col gap-6">
                  <a
                    href="#why"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Why Voyager Village
                  </a>

                  <a
                    href="#faq"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Frequently Asked Questions
                  </a>

                  <a
                    href="#available"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Available Lots
                  </a>
                </div>
                <div className="flex-col font-sm mt-4">
                  <div>
                    <a
                      href="https://www.voyagervillage.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600"
                    >
                      Visit the official Voyager Village website
                    </a>
                  </div>
                  <span className="text-xs">
                    This site has no direct affiliation with Voyager Village or
                    the POA
                  </span>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="rounded-md shadow">
                    <a
                      href="mailto:kenny@stargazerllc.com?subject=Voyager Village Lots"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div>
                    <a
                      href="/Amenity-Map-4.0.pdf"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Amenity Map
                    </a>
                  </div>
                </div>
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))} */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
