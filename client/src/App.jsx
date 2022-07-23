import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./componments/pages/home/Home";
import Auth from "./componments/screens/auth/Auth";
import ProfileMain from "./componments/screens/profileScreen/Profile-main/ProfileMain";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./componments/screens/user/login/Login";
import Register from "./componments/screens/user/register/Register";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate()
  const userSignIn = useSelector(state => state.userAuth);
  const { userInfo,isLoading, error } = userSignIn;

  const user = userInfo;

 

  return (
    <div className="App">
      {/* <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "-36%", left: "-8" }}></div> */}
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="login" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="../home" /> : <Register />}
        />
        <Route
          path="/profile/:id"
          element={user ? <ProfileMain /> : <Navigate to="../login" />}
        />
        {/* <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}

        {/* <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        /> */}
      </Routes>
    </div>
  );
};

export default App;
