  
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";



export const DashboardLayout = () => {


  const { isAuthenticated } = useSelector((state: AppState) => state.user);
  
  if(isAuthenticated===null){
      return <p>loading...</p>
  }

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }

    return (
      <div className='dashboard-layout'>
       
          Inside th dashboard
          <Outlet />
 
      </div>
    );

};