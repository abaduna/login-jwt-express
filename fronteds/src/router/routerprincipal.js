import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import Main from "../componets/Main/Main";
import Login from "../componets/login/Login";
import Home from "../componets/Home/Home";

  const RouterPrincipal =()=>{
    return (
        <Router>
            <Routes>
                
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route
                path="*"
                element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    )
  }

  export default RouterPrincipal