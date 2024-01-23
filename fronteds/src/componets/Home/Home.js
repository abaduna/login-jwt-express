import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(()=>{
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"), // Reemplaza 'tuToken' con tu token de autorización
      },
    };
    axios.get('http://localhost:3001/api/data',config)
    .then(response => {
      // Actualizar el estado con los datos recibidos
      setData(response.data.message);
      console.log(response.data.message);
      console.log(data);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  },[])
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
  useEffect(()=>{
    if ( localStorage.getItem("token") && localStorage.getItem("token").exp * 1000 < Date.now()) {
      navigate("/login");
    }
  },[])
  useEffect(()=>{
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  },[])
  return (
    <>
    <h1>You are logged</h1>
    <div>
      {data.length >0 && data?.map(item => (
        <p key={item.id}><h1>{item.username}</h1>
          {item.post}</p>
        
      ))}
    </div>
    </>
  )
}
export default Home