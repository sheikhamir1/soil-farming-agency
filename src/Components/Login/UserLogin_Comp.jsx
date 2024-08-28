import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "../Signup/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext1 } from "../StateManage/CreateOne";

const UserLogin_Comp = () => {
  const navigate = useNavigate();
  const { setTrackLogin, setSoilData } = useContext(CreateContext1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(
        "http://localhost:3000/api/userauth/userlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      // console.log("result", result);
      localStorage.setItem("token", result.authToken);
      localStorage.setItem("role", result.role);
      setTrackLogin((pre) => pre + 1);
      navigate("/userdashboard");
      // fetch soil data
      const Fetchdata = await fetch(
        "http://localhost:3000/api/soil/fetchsoil",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const fetchdata = await Fetchdata.json();
      setSoilData(fetchdata.soil || []);
      // console.log(fetchdata);
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <>
      <h1 className="Adminheading">User Login</h1>
      <div className="SignupSet">
        <Form onSubmit={handleSubmit(onSubmit)} className="SignupForm">
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
            Login
          </Button>

          <h6>
            Don't have an account?{" "}
            <Link to="/usersignup" style={{ color: "blue" }}>
              Signup
            </Link>
          </h6>
        </Form>
      </div>
    </>
  );
};

export default UserLogin_Comp;
