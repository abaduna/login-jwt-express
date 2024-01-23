import React, { useState } from "react";

import "./Login.css";
import Home from "../Home/Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const handlerLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    const data = {
      username,
      password,
    };
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.token) {
        console.log(parseJwt(result.token));
        localStorage.setItem("token", result.token);
        setLoginSuccessful(true);
      } else {
        setLoginSuccessful(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function parseJwt(token) {
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

    return JSON.parse(jsonPayload);
  }
  if (loginSuccessful) {
    return <Home />;
  }
  return (
    <>
      <form className="login-form">
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
        ></input>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        ></input>
        <button onClick={handlerLogin}>Login</button>
      </form>
    </>
  );
};

export default Login;
