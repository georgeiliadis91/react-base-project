import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AppState } from "../../redux/reducers";
import { useSelector } from "react-redux";
import {
  useTriggerLoadingOff,
  useTriggerLoadingOn,
} from "../../redux/loading/hooks";

export const PublicLayout = () => {
  const setLoadingOff = useTriggerLoadingOff();
  const triggerLoading = useTriggerLoadingOn();
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
