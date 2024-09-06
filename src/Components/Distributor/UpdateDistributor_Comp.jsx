import React, { useEffect, useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import "../Distributor/Distributor.css"; // Ensure this path is correct
import { CreateContext1 } from "../StateManage/CreateOne";

const UpdateDistributor_Comp = ({ distributor }) => {
  const { distributorData, setDistributorData } = useContext(CreateContext1);
  const { id } = useParams(); // Get ID from URL
  const [loading, setLoading] = useState(true);

  // Find the distributor by ID
  const Distributor = distributorData.find((item) => item._id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: Distributor || {
      name: "",
      contactPerson: "",
      phoneNumber: "",
      email: "",
      address: "",
      products: [],
      website: "",
      rating: 0,
    },
  });

  useEffect(() => {
    if (Distributor) {
      reset(Distributor);
      setLoading(false);
    }
  }, [Distributor, reset]);

  const onSubmit = async (data) => {
    const isAdmin = localStorage.getItem("role") === "admin";
    if (!isAdmin) {
      return alert("You are not authorized to update this data.");
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/distributor/updatedistributor/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        const errorData = await response.json();
        // Throw an error with the full response data
        alert(errorData.message);
        throw new Error(JSON.stringify(errorData.message));
      }

      if (result.success) {
        alert("Distributor updated successfully!");
        // Optionally, you can update the distributor data in the context
        const updatedData = distributorData.map((item) =>
          item._id === id ? { ...item, ...data } : item
        );
        setDistributorData(updatedData);
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="distributor-form">
      <h1>Update Distributor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name is required" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Contact Person:</label>
          <input
            {...register("contactPerson", {
              required: "Contact person is required",
            })}
          />
          {errors.contactPerson && <p>{errors.contactPerson.message}</p>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email must be a valid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Address:</label>
          <input
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>

        <div>
          <label>Products:</label>
          <Controller
            name="products"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                onChange={(e) =>
                  field.onChange(e.target.value.split(",").map((p) => p.trim()))
                }
              />
            )}
          />
        </div>

        <div>
          <label>Website:</label>
          <input {...register("website")} />
        </div>

        <div>
          <label>Rating:</label>
          <input type="number" {...register("rating", { min: 0, max: 5 })} />
          {errors.rating && <p>Rating must be between 0 and 5</p>}
        </div>

        <button type="submit" className="set2">
          Update Distributor
        </button>
      </form>
    </div>
  );
};

export default UpdateDistributor_Comp;
