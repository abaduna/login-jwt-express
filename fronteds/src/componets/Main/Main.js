import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import Home from "../Home/Home";

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
  if (localStorage.getItem("token").exp * 1000 < Date.now()) {
    tokenExisteAndisValid(false);
  }
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenExisteAndisValid(true);
    }
  }, []);
  return <>{tokenExisteAndisValid ? <Home></Home> : <Login />}</>;
}

export default Main;
