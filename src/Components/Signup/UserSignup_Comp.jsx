import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Admin.css";
import { json, Link } from "react-router-dom";

const UserSignup_Comp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(
        "http://localhost:3000/api/userauth/userregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        // Throw an error with the full response data
        alert(errorData.message);
        throw new Error(JSON.stringify(errorData.message));
      }
      const result = await response.json();
      // console.log("result", result);
      if (result.success === true) {
        reset();
        alert("Registration successfull please Verify your email!");
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <>
      <h1 className="Adminheading">User Signup</h1>
      <div className="SignupSet">
        <Form onSubmit={handleSubmit(onSubmit)} className="SignupForm">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="fullName"
              {...register("fullName", { required: "Email is required" })}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>

          <h6>
            Already have an account?{" "}
            <Link to="/userlogin" style={{ color: "blue" }}>
              Login
            </Link>
          </h6>
        </Form>
      </div>
    </>
  );
};

export default UserSignup_Comp;
