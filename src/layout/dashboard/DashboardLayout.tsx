import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import {
  useTriggerLoadingOff,
  useTriggerLoadingOn,
} from "../../redux/loading/hooks";

export const DashboardLayout = () => {
  const triggerLoading = useTriggerLoadingOn();
  const setLoadingOff = useTriggerLoadingOff();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    if (isAuthenticated !== null) {
      setLoadingOff();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
