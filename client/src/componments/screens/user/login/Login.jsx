import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Boostar101Logo } from "../../../../data/followers";
import "../login/Login.css";
const Login = () => {
  const [form, setForm] = useState({
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword
  });
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword
  } = form;
  const handleChange = () => {};
  const handleFormSubmit = () => {};
  return (
    <div className="container px-4">
      <div
        className="row"
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
            borderRadius: "10px"
          }}
        >
          <div className="left-side">
            <div className="left-image">
              <img
                src={Boostar101Logo}
                alt=""
                width="100"
                className="boostar-logo"
              />
            </div>

            <div className="discription">
              <h3>Welcome To Boostar 101.com</h3>
              <h6>https://boostar101.com</h6>
              <p>Inspire | Empower | Motivate</p>
            </div>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{
            backgroundColor: "#85a5ff",
            padding: "40px",
            borderRadius: "10px"
          }}
        >
          <form className="infoForm" onSubmit={handleFormSubmit}>
            <div className="sign-up">
              <h3>Log In</h3>{" "}
            </div>

            <div className="row">
              <div className="col-md-12">
                {" "}
                <div className="input-container">
                  {" "}
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="infoInput"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {" "}
                <div className="input-container-2">
                  <input
                    required
                    type="password"
                    placeholder="password"
                    className="infoInput"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <button className="button submit-button" type="submit">
                Sign In
              </button>
            </div>
            <span className="have-account">
              Not yet registered ? <Link to="/register">Sign up</Link>{" "}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
