import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Button } from "react-bootstrap";

const VerifyEmail_Comp = () => {
  const { token } = useParams();
  useEffect(() => {
    const verifyemail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/auth/verifyemail/${token.trim()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        console.log("result", result);
      } catch (error) {
        console.log(error);
      }
    };

    verifyemail();
  }, []);

  return (
    <>
      <div className="congratulation-area text-center mt-5">
        <div className="container">
          <div className="congratulation-wrapper">
            <div className="congratulation-contents center-text">
              <div
                className="congratulation-contents-icon"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://i.gifer.com/origin/16/162b41786d99b9d7e7b03549c4e19ae2_w200.gif"
                  alt=""
                />
              </div>
              <TiTick
                style={{
                  color: "green",
                  fontSize: "100px",
                  margin: "20px",
                  padding: "20px",
                  borderRadius: "50%",
                  border: "2px solid green",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              />

              <h4 className="congratulation-contents-title">
                {" "}
                Congratulations!{" "}
              </h4>
              <p className="congratulation-contents-para">
                {" "}
                Your account is now verified, you can login.{" "}
              </p>
              <div className="btn-wrapper mt-4">
                <Link to={"/"}>
                  {" "}
                  <Button className="btn btn-primary" variant="primary">
                    Go Back
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail_Comp;
