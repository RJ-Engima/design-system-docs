import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ()=>{
    let authenticated = sessionStorage.getItem('role')

    return(
        authenticated ? <Outlet /> : < Navigate to={"/login"} />

    )
}

export default AuthRoutes