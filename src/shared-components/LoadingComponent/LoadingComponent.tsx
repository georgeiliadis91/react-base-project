import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";

import "./LoadingComponent.css";

export const LoadingComponent = () => {
  const { loading } = useSelector((state: AppState) => state.loading);

  if (loading) {
    return <div className="loading-component">loading</div>;
  }

  return null;
};
