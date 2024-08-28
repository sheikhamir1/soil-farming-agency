import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Soil.css"; // Ensure this path is correct

const validateNumber = (value, min, max) => value >= min && value <= max;

const SoilForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      soilType: "",
      pHLevel: "",
      organicMatterPercentage: "",
      texture: "",
      fertilityRating: "Medium",
      recommendedCrops: [],
    },
  });

  const onSubmit = async (data) => {
    // console.log("Form data submitted:", data);

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

    const AddSoil = await fetch("http://localhost:3000/api/soil/createsoil", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    const result = await AddSoil.json();
    console.log("result", result);

    reset();
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Soil Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Soil Type:</label>
          <Controller
            name="soilType"
            control={control}
            rules={{ required: "Soil type is required" }}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select soil type</option>
                <option value="Clay">Clay</option>
                <option value="Sandy">Sandy</option>
                <option value="Silty">Silty</option>
                <option value="Peaty">Peaty</option>
                <option value="Chalky">Chalky</option>
                <option value="Loamy">Loamy</option>
              </select>
            )}
          />
          {errors.soilType && (
            <span className="error">{errors.soilType.message}</span>
          )}
        </div>
        <div className="form-group">
          <label>pH Level:</label>
          <Controller
            name="pHLevel"
            control={control}
            rules={{
              required: "pH level is required",
              validate: (value) =>
                validateNumber(value, 0, 14) ||
                "pH level must be between 0 and 14",
            }}
            render={({ field }) => (
              <input type="number" {...field} min="0" max="14" />
            )}
          />
          {errors.pHLevel && (
            <span className="error">{errors.pHLevel.message}</span>
          )}
        </div>
        <div className="form-group">
          <label>Organic Matter Percentage:</label>
          <Controller
            name="organicMatterPercentage"
            control={control}
            rules={{
              required: "Organic matter percentage is required",
              validate: (value) =>
                validateNumber(value, 0, 100) ||
                "Organic matter percentage must be between 0 and 100",
            }}
            render={({ field }) => (
              <input type="number" {...field} min="0" max="100" />
            )}
          />
          {errors.organicMatterPercentage && (
            <span className="error">
              {errors.organicMatterPercentage.message}
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Texture:</label>
          <Controller
            name="texture"
            control={control}
            rules={{ required: "Texture is required" }}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select texture</option>
                <option value="Fine">Fine</option>
                <option value="Medium">Medium</option>
                <option value="Coarse">Coarse</option>
              </select>
            )}
          />
          {errors.texture && (
            <span className="error">{errors.texture.message}</span>
          )}
        </div>
        <div className="form-group">
          <label>Fertility Rating:</label>
          <Controller
            name="fertilityRating"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            )}
          />
        </div>
        <div className="form-group">
          <label>Recommended Crops:</label>
          <Controller
            name="recommendedCrops"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                onChange={(e) =>
                  field.onChange(
                    e.target.value.split(",").map((crop) => crop.trim())
                  )
                }
              />
            )}
          />
        </div>
        <button type="submit" className="button">
          Add Soil
        </button>
      </form>
    </div>
  );
};

export default SoilForm;
