import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiArrowUpCircle } from "react-icons/fi";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { CreateContext1 } from "../StateManage/CreateOne";
import "./Navbar.css";

const CustomNavbar = () => {
  const { trackLogin, setQuery } = useContext(CreateContext1);

  const [trackLogout, setTrackLogout] = useState(0);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    setQuery(data.search);
    navigate("/search");
  };

  const isAdmin = localStorage.getItem("role") === "admin";
  const isUser = localStorage.getItem("role") === "user";
  // console.log("admin", isAdmin);
  // console.log("user", isUser);

  const userLogout = () => {
    localStorage.clear();
    setTrackLogout((pre) => pre + 1);
  };

  const AdminLogout = () => {
    localStorage.clear();
    setTrackLogout((pre) => pre + 1);
  };
  useEffect(() => {
    // console.log("trackLogout", trackLogout);
  }, [trackLogin, trackLogout]);

  return (
    <Navbar expand="md" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <Link className="nav-link" as={Link} to="/">
            Soil Farming
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isAdmin || isUser ? (
              <>
                <NavDropdown
                  title={
                    <>
                      Dashboard <CgProfile className="icon" />
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  {isAdmin && (
                    <>
                      <NavDropdown.Item as={Link} to="/admindashboard">
                        Admin Dashboard
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/fetchsoil">
                        Manage soil
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/fetchdistributor">
                        Manage Distributor
                      </NavDropdown.Item>
                    </>
                  )}
                  {isUser && (
                    <>
                      <NavDropdown.Item as={Link} to="/userdashboard">
                        User Dashboard
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/fetchsoil">
                        View Soil Details
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/fetchdistributor">
                        View Distributor Details
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
                <Nav.Link className="nav-link" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </>
            ) : null}
          </Nav>

          {/* Search form */}
          <div className=" justify-content-center flex-grow-1">
            <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="search"
                {...register("search", { required: "Search is required" })}
              />
              <Button variant="outline-success" type="submit">
                <FaSearch />
              </Button>
            </Form>
          </div>

          {/* Authentication buttons */}
          <div className="d-flex align-items-center">
            {isAdmin || isUser ? (
              <>
                {isAdmin && (
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    onClick={AdminLogout}
                    style={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                    as={Link}
                    to="/"
                  >
                    Admin Logout
                    <FiArrowUpCircle style={{ marginLeft: "5px" }} />
                  </Button>
                )}
                {isUser && (
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    onClick={userLogout}
                    style={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                    as={Link}
                    to="/"
                  >
                    User Logout
                    <FiArrowUpCircle style={{ marginLeft: "5px" }} />
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  className="me-2"
                  style={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                  as={Link}
                  to="/userlogin"
                >
                  Login
                  <FaSignInAlt style={{ marginLeft: "5px" }} />
                </Button>
                <Button
                  variant="outline-primary"
                  className="me-2"
                  style={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                  as={Link}
                  to="/login"
                >
                  Admin
                  <FiArrowUpCircle style={{ marginLeft: "5px" }} />
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
