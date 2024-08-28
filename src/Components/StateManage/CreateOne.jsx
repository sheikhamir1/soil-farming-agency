// react hooks
import { createContext, useEffect, useState } from "react";

const CreateContext1 = createContext();

const CreateProvider1 = ({ children }) => {
  const [trackLogin, setTrackLogin] = useState(0);
  const [soilData, setSoilData] = useState([]);
  const [distributorData, setDistributorData] = useState([]);
  const [query, setQuery] = useState("");

  // console.log("query", query);

  // console.log("traclklogin", trackLogin);
  //   console.log("isUser", isUser);

  return (
    <CreateContext1.Provider
      value={{
        trackLogin,
        setTrackLogin,
        soilData,
        setSoilData,
        distributorData,
        setDistributorData,
        query,
        setQuery,
      }}
    >
      {children}
    </CreateContext1.Provider>
  );
};

// imp you should export both CreateProvider1 and CreateContext1 and when export is not defaule use {} this when import
// in main.js use createProvider1 and wrap you main.js
// in the applictaion when you want to use usecontext import {CreateContext1}

export { CreateContext1, CreateProvider1 };
