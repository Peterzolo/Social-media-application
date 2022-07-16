import React from "react";
import { useState } from "react";
import { Boostar101Logo } from "../../../../data/followers";
import "../login/Login.css";
const Login = () => {
  const [form, setForm] = useState();

  const handleFormChange = () => {};
  const handleFormSubmit = () => {};

  return (
    <div className="container">
      <div
        className="row gx-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <div
          className="col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <div className="left-image p-3">
            <img
              src={Boostar101Logo}
              alt=""
              width="200"
              className="boostar-logo"
            />
          </div>
          <div className="discription">
            <h3>Welcome To Boostar 101.com</h3>
            <h6>https://boostar101.com</h6>
            <p>Inspire | Empower | Motivate</p>
          </div>
        </div>

        <div className="col-md-6">
          <form action="" className="authForm" onSubmit={handleFormSubmit}>
            <div>
              

            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
