import React, { useEffect, useState } from "react";
import "../AdminDashboard/Profile.css";

const UserDashboard_Comp = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const FetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/profile/fetchprofile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const result = await response.json();
        // console.log(result);
        setProfile(result.userProfile);
        // console.log("profile", profile);
      } catch (error) {
        console.log(error);
      }
    };

    FetchProfile();
  }, []);

  return (
    <>
      <div className="profile-container">
        <h1 className="profile-title">Welcome {profile.fullName}</h1>
        <form className="profile-form">
          <div className="profile-group">
            <strong>Full Name: </strong> {profile.fullName}
          </div>

          <div className="profile-group">
            <strong>Email: </strong>
            {profile.email}
          </div>
          <div className="profile-group">
            <strong>Profile Verified: </strong>
            {profile.isVerified ? "Yes" : "No"}
          </div>
          <div className="profile-group">
            <strong>Role: </strong>
            {profile.role}
          </div>

          {/* <button type="submit" className="profile-button">
            Logout Right Now
          </button> */}
        </form>
      </div>
    </>
  );
};

export default UserDashboard_Comp;
