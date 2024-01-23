import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";
function Main() {
  const [tokenExisteAndisValid,setTokenExisteAndisValid] = useState(false)
  function parseJwt(token) {
    if (token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
  }
  parseJwt(localStorage.getItem("token"))
  if ( localStorage.getItem("token") &&localStorage.getItem("token").exp * 1000 < Date.now()) {
    <Navigate to="/login" />
  }
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      
      <Navigate to="/home" />
    }
  }, []);
  return <></>;
}

export default Main;
