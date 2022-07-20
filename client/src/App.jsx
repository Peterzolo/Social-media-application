import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./componments/pages/home/Home";
import Auth from "./componments/screens/auth/Auth";
import ProfileMain from "./componments/screens/profileScreen/Profile-main/ProfileMain";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./componments/screens/user/login/Login";
import Register from "./componments/screens/user/register/Register";

const App = () => {
  return (
    <div className="App">
      {/* <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "-36%", left: "-8" }}></div> */}
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
