import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { useTriggerLoadingOn } from "../../redux/loading/hooks";

export const DashboardLayout = () => {
  const triggerLoading = useTriggerLoadingOn();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  if (isAuthenticated === null) {
    triggerLoading();
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }

  return (
    <div className="dashboard-layout">
      Inside th dashboard
      <Outlet />
    </div>
  );
};
