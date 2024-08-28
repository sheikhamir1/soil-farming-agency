import React, { useState, useEffect, useContext } from "react";
import { CreateContext1 } from "../StateManage/CreateOne";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const { soilData, query } = useContext(CreateContext1);
  const isAdmin = localStorage.getItem("role") === "admin";
  const isUser = localStorage.getItem("role") === "user";

  // State for filtered results
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // console.log("query:", query); // Check the query value
    // console.log("soilData:", soilData); // Check the soilData

    if (!query || !soilData) return; // Exit if query or soilData is not available

    const lowerCaseQuery = query.toLowerCase();

    const filteredOne = soilData.filter((item) => {
      // console.log("Filtering item:", item);
      return item.soilType?.toLowerCase().includes(lowerCaseQuery);
    });

    setFilteredData(filteredOne);

    // console.log("filteredOne:", filteredOne); // Check the filtered results
  }, [query, soilData]);

  return (
    <div className="App">
      <h1 className="soil-header">Soil Information</h1>
      <div className="soil-card-container">
        {filteredData.length > 0 ? (
          filteredData.map((soil) => (
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
                <strong>Organic Matter:</strong> {soil.organicMatterPercentage}%
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
  );
};

export default SearchComponent;
