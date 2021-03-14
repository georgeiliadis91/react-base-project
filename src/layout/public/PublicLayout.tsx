import React from "react";
import { Outlet,  Navigate } from "react-router-dom";

import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const PublicLayout = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if(isAuthenticated===null){
    return <p>loading...</p>
  }

  if (isAuthenticated) {
    return <Navigate to={`app/`} />;
  } 
    return (
      <div className='public-layout'>
          Public Layout
          <Outlet />
      </div>
    );
  
};