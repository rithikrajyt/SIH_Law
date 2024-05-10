import React from "react";
import {  Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { RotatingLines } from "react-loader-spinner";
import RotatingLinesComponent from "./RotatingLinesComponent";

const PrivateRoute = () => {
  const { loading, isLoggedIn } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="brown"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <RotatingLinesComponent/>
  );
};

export default PrivateRoute;
