import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup_Comp from "./Components/Signup/AdminSignup_Comp";
import Home from "./Components/Home";
import UserSignup_Comp from "./Components/Signup/UserSignup_Comp";
import AdminLogin_Comp from "./Components/Login/AdminLogin_Comp";
import UserLogin_Comp from "./Components/Login/UserLogin_Comp";
import CustomNavbar from "./Components/Navbar/Navbar_Comp";
import { CreateProvider1 } from "./Components/StateManage/CreateOne";
import AdminDashboard_Comp from "./Components/AdminDashboard/AdminDashboard_Comp";
import UserDashboard_Comp from "./Components/UserDashboard/UserDashboard_Comp";
import UpdateSoilForm from "./Components/SoilFrom/UpdateSoil";
import FetchSoil from "./Components/SoilFrom/FetchSoil";
import FetchDistributor_Comp from "./Components/Distributor/FetchDistributor_Comp";
import UpdateDistributor_Comp from "./Components/Distributor/UpdateDistributor_Comp";
import SearchComponent from "./Components/Search/Search_Comp";
import Footer_Comp from "./Components/Footer/Footer_Comp";
import Contact_Comp from "./Components/contect/Contact_Comp";

function App() {
  return (
    <>
      <BrowserRouter>
        <CreateProvider1>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* admin Routes */}
            <Route path="/signup" element={<AdminSignup_Comp />} />
            <Route path="/login" element={<AdminLogin_Comp />} />

            <Route path="/admindashboard" element={<AdminDashboard_Comp />} />
            <Route path="/updatesoil/:id" element={<UpdateSoilForm />} />
            <Route path="/fetchsoil" element={<FetchSoil />} />
            <Route
              path="/fetchdistributor"
              element={<FetchDistributor_Comp />}
            />

            <Route
              path="/updatedistributor/:id"
              element={<UpdateDistributor_Comp />}
            />

            {/* user Routes */}
            <Route path="/usersignup" element={<UserSignup_Comp />} />
            <Route path="/userlogin" element={<UserLogin_Comp />} />
            <Route path="/userdashboard" element={<UserDashboard_Comp />} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/contact" element={<Contact_Comp />} />
          </Routes>
          <Footer_Comp />
        </CreateProvider1>
      </BrowserRouter>
    </>
  );
}

export default App;
