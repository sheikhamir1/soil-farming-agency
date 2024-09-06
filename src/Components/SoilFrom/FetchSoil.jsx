import React, { useEffect, useState, useContext } from "react";
import "./Fetch.css";
import { Link } from "react-router-dom";
import { CreateContext1 } from "../StateManage/CreateOne";

const FetchSoil = () => {
  const { soilData, setSoilData } = useContext(CreateContext1);

  const [trackDelete, setTrackDelete] = useState(0);

  const isAdmin = localStorage.getItem("role") === "admin";
  const isUser = localStorage.getItem("role") === "user";

  useEffect(() => {
    const fetchSoilData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/soil/fetchsoil",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        // console.log("data", data);
        // Make sure to set the state to the soil array

        if (!response.ok) {
          const errorData = await response.json();
          // Throw an error with the full response data
          alert(errorData.message);
          throw new Error(JSON.stringify(errorData.message));
        }

        if (data.success) {
          setSoilData(data.soil || []);
        } else {
          console.error("Error fetching soil data:", data.message);
          setSoilData([]); // Ensure soilData is an array
        }
      } catch (error) {
        console.error("Error fetching soil data:", error);
        setSoilData([]); // Ensure soilData is an array
      }
    };
    fetchSoilData();
  }, [trackDelete]);

  const handleDelete = async (soilId) => {
    const isAdmin = localStorage.getItem("role") === "admin";
    const isUser = localStorage.getItem("role") === "user";

    if (!isAdmin && !isUser) {
      return alert("Please login first");
    }

    if (!localStorage.getItem("token")) {
      return alert("Please login first");
    }

    if (isUser) {
      return alert("You are not authorized to add soil data");
    }

    if (!isAdmin) {
      return alert("You are not authorized to add soil data");
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/soil/deletesoil/${soilId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log("data", data);
      setTrackDelete((pre) => pre + 1);
      alert("Soil data deleted successfully");
    } catch (error) {
      console.error("Error deleting soil data:", error);
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="soil-header">Soil Information</h1>
        <div className="soil-card-container">
          {soilData.length > 0 ? (
            soilData.map((soil) => (
              <div className="soil-card" key={soil._id}>
                <h2>
                  <strong>soilType: </strong>
                  {soil.soilType}
                </h2>
                <p>
                  <strong>Fertility Rating:</strong> {soil.fertilityRating}
                </p>
                <p>
                  <strong>pH Level:</strong> {soil.pHLevel}
                </p>
                <p>
                  <strong>Organic Matter:</strong>{" "}
                  {soil.organicMatterPercentage}%
                </p>
                <p>
                  <strong>Recommended Crops:</strong>{" "}
                  {soil.recommendedCrops.join(", ")}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(soil.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(soil.updatedAt).toLocaleString()}
                </p>

                {isAdmin ? (
                  <>
                    <Link to={`/updatesoil/${soil._id}`}>
                      <button className="update-btn">Update</button>
                    </Link>
                    ;
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(soil._id)}
                    >
                      Delete
                    </button>
                  </>
                ) : null}
              </div>
            ))
          ) : (
            <p className="no-data-message">No soil data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchSoil;
