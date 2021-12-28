import React from "react";

export const About = () => {
  const linkStyle =
    "underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600";

  return (
    <div className="relative py-16 bg-white overflow-hidden rounded">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <a id="why" />
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              About
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Voyager Village
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            At Voyager Village, we offer many amenities, events and activities
            for members and guests of all ages to be active, inside and out, all
            year long. You can lounge in the sun at our pristine beaches or take
            a meandering hike with friends. You can challenge our signature golf
            courses or get involved in a bocce league. Take your kids for a swim
            at our indoor pool and then head to the fitness center for a
            spirited workout.
          </p>
          <div className="flex justify-end">
            <a
              href="https://www.voyagervillage.com/recreation-activities/"
              className="underline text-indigo-600 hover:text-indigo-800 visited:text-indigo-600"
            >
              from the Voyager Village Website
            </a>
          </div>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div className="flex justify-center">
            <a href="/Ammenity-Map-4.0.pdf">
              <figure className="mb-4 ">
                <img
                  className="w-full mt-4 rounded-lg border-2 "
                  src="/poa-map.jpg"
                  alt=" voyager village ammenity map"
                  style={{ maxWidth: 600 }}
                />
                <figcaption style={{ maxWidth: 600 }}>
                  Voyager Village offers many ammenities to its owners. Shown
                  above is a map of the walking/XC Ski trails.
                </figcaption>
              </figure>
            </a>
          </div>
          <h2 className="text-xl font-extrabold text-gray-900">
            Area Information
          </h2>
          <p className="">
            Nestled in the heart of cabin country, Voyager Village is located in
            nortwest Wisconsin near Jackson and Webber. It is a short two hour
            drive from the Minneapolis/St.Paul metro area.
          </p>
          <div className="flex flex-wrap">
            <div className="sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22187.87589834171!2d-92.151705!3d45.961582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f0cec260944fdbc!2sVoyager%20Village!5e0!3m2!1sen!2sca!4v1640698093705!5m2!1sen!2sca"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
            <div className="sm:max-w-xl md:mt-5 lg:mx-0">
              <h3 className="text-base font-bold text-gray-900 mt-6 md:mt-0">
                ATV/Snowmobile Trails
              </h3>
              <p>
                Burnet county is home to 59 miles of Summer ATV Trails and 97
                miles of Winter trails.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://www.burnettcounty.com/135/ATV-Trails"
                    className={linkStyle}
                  >
                    Burnett County Trails
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.turfandtundra.org/index.html"
                    className={linkStyle}
                  >
                    Turf and Tundry ATV Club
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.travelwisconsin.com/outdoors/activities/atv-and-utv/"
                    className={linkStyle}
                  >
                    Travel Wisconsin ATV Trails
                  </a>
                </li>
              </ul>
              <h3 className="text-base font-bold text-gray-900 mt-6 md:mt-0">
                Voyager Village POA Information
              </h3>
              <p>
                There are many subdivisions in Voyager Village. These maps will
                provide a guide to the area. Also be sure to check out the
                covenants and bylaws
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <a href="/vvmap-hq.pdf" className={linkStyle}>
                    Subdivisions (High Quality)
                  </a>
                </li>
                <li>
                  <a href="/vvmap-lq.pdf" className={linkStyle}>
                    Subdivisions (Lower Quality)
                  </a>
                </li>
                <li>
                  <a href="/Bylaws_2020.pdf" className={linkStyle}>
                    Bylaws
                  </a>
                </li>
                <li>
                  <a href="/Covenants_2020.pdf" className={linkStyle}>
                    Covenants {`<-`} Important Information!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
