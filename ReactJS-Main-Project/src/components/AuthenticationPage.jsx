import React from "react";
import Login from "./Login";
import { Navigate } from "react-router";

const AuthenticationPage = ({ children }) => {
    const isAuth = false
    
    if(!isAuth){
        return <Navigate to={"/login"} />
    }
    else
    {
        return children;
    }
};

export default AuthenticationPage;
