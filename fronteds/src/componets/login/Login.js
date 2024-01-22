import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlerLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    const data = {
      username,
      password
    }
    fetch("http://localhost:3001/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(response =>{
      response.json()
    })
    .then(result =>{
      console.log(result);
    })
    .catch(error=>{
      console.log(error);
    })
  };
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
