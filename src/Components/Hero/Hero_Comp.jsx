import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero_Comp = () => {
  return (
    <>
      <section className="relative bg-[url(https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Soil Farming Agent
              <strong className="block font-extrabold text-rose-500">
                Optimizing Agricultural Solutions.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Discover how our platform helps streamline soil and distributor
              details, enhancing agricultural productivity and efficiency.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/userlogin"
                className="block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto setColor"
              >
                Get Started
              </Link>

              <Link
                to="/fetchdistributor"
                className="block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto setColor"
              >
                Our Distributor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero_Comp;
