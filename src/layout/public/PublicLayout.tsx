import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { useTriggerLoadingOn } from "../../redux/loading/hooks";

export const PublicLayout = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  const triggerLoading = useTriggerLoadingOn();

  if (isAuthenticated === null) {
    triggerLoading();
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to={`app/`} />;
  }

  return (
    <div className="public-layout">
      Public Layout
      <Outlet />
    </div>
  );
};
