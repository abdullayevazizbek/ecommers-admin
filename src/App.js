import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "./components";
import Header from "./components/Header";
import MAinLayout from "./components/MainLyout";
import useAuth from "./hooks/useAuth";

function App() {
  
  const isLogin = useAuth()
  const navigation = useNavigate()
  const location =useLocation()
  useEffect(() =>{
    if (!isLogin) {
      navigation('/login')
    }
  }, [location])
  return (
    <div>
      <Header/>
      {
        isLogin ? <MAinLayout /> : <LoginPage/>
      }

    </div>
  );
}

export default App;
