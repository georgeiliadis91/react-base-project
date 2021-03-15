import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { TIMEOUT_TIME } from "../../constants/constants";
import { ActionTypes } from "../../redux/alert/actions";
import { useTriggerClose } from "../../redux/alert/hooks";
import { AppState } from "../../redux/reducers";

import "./AlertComponent.css";

export const AlertComponent = () => {
  const { open, type, message } = useSelector((state: AppState) => state.alert);
  const closeAlert = useTriggerClose();

  // after the alert is set, close it after X seconds
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        closeAlert();
      }, TIMEOUT_TIME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const alertType = () => {
    switch (type) {
      case ActionTypes.ERROR:
        return "error-alert";
      case ActionTypes.SUCCESS:
        return "success-alert";
      default:
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="alert-wrapper">
      <div className={alertType()}>
        <p className="message-text">{message}</p>
      </div>
    </div>
  );
};
