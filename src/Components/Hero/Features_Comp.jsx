import React from "react";

const Features_Comp = () => {
  return (
    <section
      className="container px-6 py-10 mx-auto"
      style={{ marginBottom: "50px", marginTop: "50px" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 capitalize lg:text-5xl dark:text-white">
          Explore Our <br />
          Essential{" "}
          <span className="underline decoration-cyan-300">Features</span>
        </h1>
        <p className="mt-4 text-gray-600 xl:mt-6 dark:text-gray-300">
          Discover how our platform enhances soil management and farming
          efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="p-8 space-y-3 border-2 border-cyan-300 dark:border-cyan-300 rounded-xl transform transition duration-300 hover:scale-105 hover:border-cyan-500 dark:hover:border-cyan-500">
          <span className="inline-block text-cyan-300 dark:text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            Soil Analysis
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive soil analysis to understand soil types and optimize
            crop growth.
          </p>
          <a
            href="#"
            className="inline-flex items-center p-2 text-cyan-300 capitalize transition duration-200 transform bg-green-100 rounded-full dark:bg-cyan-500 dark:text-white hover:underline hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>

        <div className="p-8 space-y-3 border-2 border-cyan-300 dark:border-cyan-300 rounded-xl transform transition duration-300 hover:scale-105 hover:border-cyan-500 dark:hover:border-cyan-500">
          <span className="inline-block text-cyan-300 dark:text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            Crop Recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tailored crop recommendations based on soil conditions and climate.
          </p>
          <a
            href="#"
            className="inline-flex items-center p-2 text-cyan-300 capitalize transition duration-200 transform bg-green-100 rounded-full dark:bg-cyan-500 dark:text-white hover:underline hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>

        <div className="p-8 space-y-3 border-2 border-cyan-300 dark:border-cyan-500 rounded-xl transform transition duration-300 hover:scale-105 hover:border-cyan-500 dark:hover:border-cyan-500">
          <span className="inline-block text-cyan-300 dark:text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            Simple & Intuitive Interface
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            An easy-to-use interface for managing soil and crop information.
          </p>
          <a
            href="#"
            className="inline-flex items-center p-2 text-cyan-300 capitalize transition duration-200 transform bg-green-100 rounded-full dark:bg-cyan-500 dark:text-white hover:underline hover:text-cyan-300 dark:hover:text-cyan-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features_Comp;
