import React from "react";
import { DEFAULT_MIN_VERSION } from "tls";
/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: "What services are available",
    answer:
      "Currently the only services available are cable and power at the road. SirenTel is slated to be offering Fiber Optic internet to the area this summer. Water will have to come from a well. Sewer will be a septic sytem. Neither are currenty installed on the lots. ",
  },
  {
    question: "Are they open year round?",
    answer:
      "Yes, this is a year round association. Things slow down in the winter but many of the activities are still available in the winter. Try out our XC Ski trails or rev up the snowmobile on the miles of trails in the area.",
  },
  {
    question: "Is there a HOA/POA Fee? ",
    answer:
      "Yes, to maintain the ammenities of the association there is an annual fee that is currently $1120/year. This is offset by the low property taxes. Currently the lots are averaging $16-20 per year in property taxes.",
  },
  {
    question: "Can I dock a boat overnight? ",
    answer: "At the moment we are unsure but are working to find out",
  },
  {
    question: "Can I camp on the lot? ",
    answer:
      "Probably not, the POA has restrictions on camping. If you are building a house they may allow you to camp for a year while it is being built. Otherwise there is an official campground on the west side of the village",
  },
  {
    question: "How far is this from the Twin Cities? ",
    answer:
      "It's about two hours from the west side of the cities. Easy directions is to go north on 35 turn right at rush city and its about 45 minutes into Wisconsin",
  },
  // More questions...
];

export const FAQ = () => {
  return (
    <div className="bg-white mt-8 rounded">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <a id="faq" />

            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mt-4 text-lg text-gray-500 flex flex-col">
              <div>Can’t find the answer you’re looking for?</div>
              <div>
                <a
                  href="mailto:kenny@stargazerllc.com?subject=Voyager Village Question"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Reach out for more information
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
