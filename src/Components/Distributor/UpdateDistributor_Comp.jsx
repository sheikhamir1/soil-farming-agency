// import React, { useEffect, useState, useContext } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import "../Distributor/Distributor.css"; // Ensure this path is correct
// import { CreateContext1 } from "../StateManage/CreateOne";

// const validateNumber = (value, min, max) => value >= min && value <= max;

// const UpdateDistributor_Comp = ({ distributor }) => {
//   const { distributorData, setDistributorData } = useContext(CreateContext1);
//   const [newData, setNewData] = useState(null); // Initialize as null

//   const { id } = useParams(); // Get ID from URL

//   const Distributor = distributorData.find((item) => item._id === id);
//   useEffect(() => {
//     if (Distributor) {
//       setNewData(Distributor);
//     }
//   }, [Distributor]);

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: Distributor || {
//       name: "",
//       contactPerson: "",
//       phoneNumber: "",
//       email: "",
//       address: "",
//       products: [],
//       website: "",
//       rating: 0,
//     },
//   });

//   useEffect(() => {
//     if (newData) {
//       reset({
//         name: newData.name || "",
//         contactPerson: newData.contactPerson || "",
//         phoneNumber: newData.phoneNumber || "",
//         email: newData.email || "",
//         address: newData.address || "Medium",
//         products: newData.products ? newData.products.join(", ") : "",
//         website: newData.website || "",
//         rating: newData.rating || "",
//       });
//     }
//   }, [newData, reset]);

//   useEffect(() => {
//     const fetchDistributorData = async () => {
//       const isAdmin = localStorage.getItem("role") === "admin";
//       const isUser = localStorage.getItem("role") === "user";

//       if (!isAdmin && !isUser) {
//         return alert("Please login first");
//       }

//       if (!localStorage.getItem("token")) {
//         return alert("Please login first");
//       }

//       if (isUser) {
//         return alert("You are not authorized to add soil data");
//       }

//       if (!isAdmin) {
//         return alert("You are not authorized to add soil data");
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:3000/api/distributor/fetchdistributor",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.success) {
//           setDistributorData(data.distributor || []);
//         } else {
//           console.error("Error fetching soil data:", data.message);
//           setDistributorData([]); // Ensure soilData is an array
//         }
//       } catch (error) {
//         console.error("Error fetching soil data:", error);
//         setDistributorData([]); // Ensure soilData is an array
//       }
//     };
//     fetchDistributorData();
//   }, [setDistributorData]);

//   const onSubmit = async (data) => {
//     // console.log("Form data submitted:", data);

//     const isAdmin = localStorage.getItem("role") === "admin";
//     const isUser = localStorage.getItem("role") === "user";

//     if (!isAdmin && !isUser) {
//       return alert("Please login first");
//     }

//     if (!localStorage.getItem("token")) {
//       return alert("Please login first");
//     }

//     if (isUser) {
//       return alert("You are not authorized to add soil data");
//     }

//     if (!isAdmin) {
//       return alert("You are not authorized to add soil data");
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/distributor/updatedistributor/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       const result = await response.json();
//       console.log("result", result);

//       if (result.success) {
//         alert("Soil updated successfully!");
//         reset(); // Reset the form after successful submission
//       } else {
//         alert(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     // <div className="form-container">
//     //   <h1 className="form-title">Update Distributor</h1>
//     //   <form onSubmit={handleSubmit(onSubmit)}>
//     //     <div className="form-group">
//     //       <label>Soil Type:</label>
//     //       <Controller
//     //         name="soilType"
//     //         control={control}
//     //         rules={{ required: "Soil type is required" }}
//     //         render={({ field }) => (
//     //           <select {...field}>
//     //             <option value="">Select soil type</option>
//     //             <option value="Clay">Clay</option>
//     //             <option value="Sandy">Sandy</option>
//     //             <option value="Silty">Silty</option>
//     //             <option value="Peaty">Peaty</option>
//     //             <option value="Chalky">Chalky</option>
//     //             <option value="Loamy">Loamy</option>
//     //           </select>
//     //         )}
//     //       />
//     //       {errors.soilType && (
//     //         <span className="error">{errors.soilType.message}</span>
//     //       )}
//     //     </div>

//     //     <div className="form-group">
//     //       <label>pH Level:</label>
//     //       <Controller
//     //         name="pHLevel"
//     //         control={control}
//     //         rules={{
//     //           required: "pH level is required",
//     //           validate: (value) =>
//     //             validateNumber(value, 0, 14) ||
//     //             "pH level must be between 0 and 14",
//     //         }}
//     //         render={({ field }) => (
//     //           <input type="number" {...field} min="0" max="14" />
//     //         )}
//     //       />
//     //       {errors.pHLevel && (
//     //         <span className="error">{errors.pHLevel.message}</span>
//     //       )}
//     //     </div>

//     //     <div className="form-group">
//     //       <label>Organic Matter Percentage:</label>
//     //       <Controller
//     //         name="organicMatterPercentage"
//     //         control={control}
//     //         rules={{
//     //           required: "Organic matter percentage is required",
//     //           validate: (value) =>
//     //             validateNumber(value, 0, 100) ||
//     //             "Organic matter percentage must be between 0 and 100",
//     //         }}
//     //         render={({ field }) => (
//     //           <input type="number" {...field} min="0" max="100" />
//     //         )}
//     //       />
//     //       {errors.organicMatterPercentage && (
//     //         <span className="error">
//     //           {errors.organicMatterPercentage.message}
//     //         </span>
//     //       )}
//     //     </div>

//     //     <div className="form-group">
//     //       <label>Texture:</label>
//     //       <Controller
//     //         name="texture"
//     //         control={control}
//     //         rules={{ required: "Texture is required" }}
//     //         render={({ field }) => (
//     //           <select {...field}>
//     //             <option value="">Select texture</option>
//     //             <option value="Fine">Fine</option>
//     //             <option value="Medium">Medium</option>
//     //             <option value="Coarse">Coarse</option>
//     //           </select>
//     //         )}
//     //       />
//     //       {errors.texture && (
//     //         <span className="error">{errors.texture.message}</span>
//     //       )}
//     //     </div>

//     //     <div className="form-group">
//     //       <label>Fertility Rating:</label>
//     //       <Controller
//     //         name="fertilityRating"
//     //         control={control}
//     //         render={({ field }) => (
//     //           <select {...field}>
//     //             <option value="Low">Low</option>
//     //             <option value="Medium">Medium</option>
//     //             <option value="High">High</option>
//     //           </select>
//     //         )}
//     //       />
//     //     </div>

//     //     <div className="form-group">
//     //       <label>Recommended Crops:</label>
//     //       <Controller
//     //         name="recommendedCrops"
//     //         control={control}
//     //         render={({ field }) => (
//     //           <input
//     //             type="text"
//     //             {...field}
//     //             onChange={(e) =>
//     //               field.onChange(
//     //                 e.target.value.split(",").map((crop) => crop.trim())
//     //               )
//     //             }
//     //           />
//     //         )}
//     //       />
//     //     </div>

//     //     <button type="submit" className="button">
//     //       Update
//     //     </button>
//     //   </form>
//     // </div>
//     <div className="distributor-form">
//       <h1>{distributor ? "Update Distributor" : "Add Distributor"}</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Name:</label>
//           <input {...register("name", { required: "Name is required" })} />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>

//         <div>
//           <label>Contact Person:</label>
//           <input
//             {...register("contactPerson", {
//               required: "Contact person is required",
//             })}
//           />
//           {errors.contactPerson && <p>{errors.contactPerson.message}</p>}
//         </div>

//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="number"
//             {...register("phoneNumber", {
//               required: "Phone number is required",
//             })}
//           />
//           {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: "Email must be a valid email address",
//               },
//             })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         <div>
//           <label>Address:</label>
//           <input
//             {...register("address", { required: "Address is required" })}
//           />
//           {errors.address && <p>{errors.address.message}</p>}
//         </div>

//         <div>
//           <label>Products:</label>
//           {fields.map((field, index) => (
//             <div key={field.id}>
//               <input {...register(`products[${index}]`)} />
//               <button
//                 className="set1"
//                 type="button"
//                 onClick={() => remove(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={() => append("")}>
//             Add Product
//           </button>
//         </div>

//         <div>
//           <label>Website:</label>
//           <input {...register("website")} />
//         </div>

//         <div>
//           <label>Rating:</label>
//           <input type="number" {...register("rating", { min: 0, max: 5 })} />
//           {errors.rating && <p>Rating must be between 0 and 5</p>}
//         </div>

//         <button type="submit" className="set2">
//           {distributor ? "Update Distributor" : "Add Distributor"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateDistributor_Comp;
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
