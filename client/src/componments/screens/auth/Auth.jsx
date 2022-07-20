import React from "react";
import { useState } from "react";
import { Boostar101Logo } from "../../../data/followers";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../auth/Auth.css";
import { loginAction, signUpAction } from "../../../redux/actions/authActions";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: ""
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = e => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password not matched");
    }

    if (
      firstName &&
      lastName &&
      email &&
      username &&
      password &&
      confirmPassword
    ) {
      dispatch(signUpAction({ formData, navigate, toast }));
      setFormData(initialState);
    } else {
      if (username && password) {
        dispatch(loginAction({ formData, navigate,toast }));
      }
    }

  };
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
              <h3> {isSignUp ? "Sign Up" : "Log In"}</h3>{" "}
            </div>
            {isSignUp && (
              <div className="row">
                <div className="col-md-6">
                  <div className="input-container">
                    {" "}
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      className="infoInput"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>{" "}
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="input-container">
                    {" "}
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      className="infoInput"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>{" "}
                </div>
              </div>
            )}

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
              {isSignUp && (
                <div className="col-md-12">
                  <div className="input-container">
                    <input
                      required
                      type="text"
                      placeholder="User Name"
                      className="infoInput"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>{" "}
                </div>
              )}
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
            {isSignUp && (
              <div className="row">
                <div className="col-md-12">
                  {" "}
                  <div className="input-container-2">
                    <input
                      required
                      type="password"
                      placeholder="Confirm Paasword"
                      className="infoInput"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>{" "}
                </div>
              </div>
            )}

            <div>
              <button className="button submit-button" type="submit">
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </div>
            <span
              className="have-account"
              onClick={() => {
                setIsSignUp(prev => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account | Login"
                : "Don't have an account | Sign up"}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
