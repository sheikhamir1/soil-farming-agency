import React from "react";
import Hero_Comp from "./Hero/Hero_Comp";
import Features_Comp from "./Hero/Features_Comp";
import FetchDistributor_Comp from "./Distributor/FetchDistributor_Comp";

const Home = () => {
  return (
    <>
      <Hero_Comp />
      <Features_Comp />
      {/* <FetchDistributor_Comp /> */}
    </>
  );
};

export default Home;
