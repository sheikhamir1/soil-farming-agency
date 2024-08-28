import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Profile_Comp from "../AdminDashboard/Profile_Comp";
import SoilForm from "../SoilFrom/Soil_Comp";
import Distributor_Comp from "../Distributor/Distributor_Comp";

const AdminDashboard_Comp = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isSoil, setIsSoil] = useState(false);
  const [isDistributor, setIsDistributor] = useState(false);

  const HandleProfile = () => {
    setIsProfile(!isProfile);
  };

  const HandleSoil = () => {
    setIsSoil(!isSoil);
  };

  const HandleDistributor = () => {
    setIsDistributor(!isDistributor);
  };

  return (
    <>
      <div className="AdminHeading">Welcome to Admin Dashboard</div>
      <div className="setbtn">
        <button
          className="button profile"
          title="Dubble click to toggle"
          onClick={HandleProfile}
        >
          Go to Profile
        </button>
        <button
          className="button soil-form"
          title="Dubble click to toggle"
          onClick={HandleSoil}
        >
          Soil Form
        </button>
        <button
          className="button distributor"
          title="Dubble click to toggle"
          onClick={HandleDistributor}
        >
          Distributor
        </button>
      </div>

      {isProfile && <Profile_Comp />}

      {isSoil && <SoilForm />}

      {isDistributor && <Distributor_Comp />}
    </>
  );
};

export default AdminDashboard_Comp;
