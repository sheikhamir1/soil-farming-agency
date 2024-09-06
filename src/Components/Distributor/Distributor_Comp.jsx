import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./Distributor.css";

const Distributor_Comp = ({ distributor }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: distributor || {
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = async (data) => {
    // console.log(data);
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

    const AddSoil = await fetch(
      "http://localhost:3000/api/distributor/addDistributor",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!AddSoil.ok) {
      const errorData = await AddSoil.json();
      // Throw an error with the full response data
      alert(errorData.message);
      throw new Error(JSON.stringify(errorData));
    }

    const result = await AddSoil.json();

    // console.log("result", result);

    alert("Distributor Added Successfully");

    reset();
  };

  return (
    <div className="distributor-form">
      <h1>{distributor ? "Update Distributor" : "Add Distributor"}</h1>
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
          {fields.map((field, index) => (
            <div key={field.id}>
              <input {...register(`products[${index}]`)} />
              <button
                className="set1"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="addPBtn" onClick={() => append("")}>
            Add Product
          </button>
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
          {distributor ? "Update Distributor" : "Add Distributor"}
        </button>
      </form>
    </div>
  );
};

export default Distributor_Comp;
