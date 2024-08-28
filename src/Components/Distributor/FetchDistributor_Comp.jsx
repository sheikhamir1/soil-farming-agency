import React, { useEffect, useState, useContext } from "react";
import "../SoilFrom/Fetch.css";
import { Link } from "react-router-dom";
import { CreateContext1 } from "../StateManage/CreateOne";

const FetchDistributor_Comp = () => {
  const { distributorData, setDistributorData } = useContext(CreateContext1);

  const [trackDelete, setTrackDelete] = useState(0);

  const isAdmin = localStorage.getItem("role") === "admin";
  const isUser = localStorage.getItem("role") === "user";

  useEffect(() => {
    const fetchDistributorData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return alert("Please login first");
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/distributor/fetchdistributor",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        console.log("data", data);
        // Make sure to set the state to the soil array
        if (data.success) {
          setDistributorData(data.distributor || []);
        } else {
          console.error("Error fetching soil data:", data.message);
          setDistributorData([]); // Ensure soilData is an array
        }
      } catch (error) {
        console.error("Error fetching soil data:", error);
        setDistributorData([]); // Ensure soilData is an array
      }
    };
    fetchDistributorData();
  }, [trackDelete]);

  const handleDelete = async (DistributorId) => {
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
        `http://localhost:3000/api/distributor/deletedistributor/${DistributorId}`,
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
      alert("Distributor data deleted successfully");
    } catch (error) {
      console.error("Error deleting soil data:", error);
    }
  };

  return (
    <>
      {/* <div className="App">
        <h1 className="soil-header">Soil Information</h1>
        <div className="soil-card-container">
          {soilData.length > 0 ? (
            soilData.map((soil) => (
              <div className="soil-card" key={soil._id}>
                <h2>
                  <strong>Soil Type: </strong>
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
      </div> */}
      <div className="App">
        <h1 className="soil-header">Distributor Information</h1>
        <div className="soil-card-container">
          {distributorData.length > 0 ? (
            distributorData.map((distributor) => (
              <div className="soil-card" key={distributor._id}>
                <h2>
                  <strong>Name: </strong>
                  {distributor.name}
                </h2>
                <p>
                  <strong>Contact Person:</strong> {distributor.contactPerson}
                </p>
                <p>
                  <strong>Phone Number:</strong> {distributor.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {distributor.email}
                </p>
                <p>
                  <strong>Address:</strong> {distributor.address}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={distributor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {distributor.website}
                  </a>
                </p>
                <p>
                  <strong>Rating:</strong> {distributor.rating}
                </p>
                <p>
                  <strong>Products:</strong> {distributor.products.join(", ")}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(distributor.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(distributor.updatedAt).toLocaleString()}
                </p>

                {isAdmin ? (
                  <>
                    <Link to={`/updatedistributor/${distributor._id}`}>
                      <button className="update-btn">Update</button>
                    </Link>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(distributor._id)}
                    >
                      Delete
                    </button>
                  </>
                ) : null}
              </div>
            ))
          ) : (
            <p className="no-data-message">No distributor data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchDistributor_Comp;
