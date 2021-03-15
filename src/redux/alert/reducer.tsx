import { ActionTypes, AlertActionTypes } from "./actions";

export type IAlertState = {
  open: boolean;
  message: string;
  type: ActionTypes;
}

const initialState: IAlertState = {
  open: false,
  message: "",
  type: ActionTypes.CLOSE,
};

const alertReducer = (state = initialState, action: AlertActionTypes):IAlertState => {
  switch (action.type) {
    case ActionTypes.ERROR: {
      return triggerErrorAlert(action.payload);
    }
    case ActionTypes.SUCCESS: {
      return triggerSuccessAlert(action.payload);
    }
    case ActionTypes.CLOSE: {
      return triggerCloseAlert();
    }
    default:
      return state;
  }
};



const triggerErrorAlert = (message: string) => {
  return {
    open: true,
    message,
    type: ActionTypes.ERROR,
  };
};

const triggerSuccessAlert = (message: string) => {
  return {
    open: true,
    message,
    type: ActionTypes.SUCCESS,
  };
};

const triggerCloseAlert = () => {
  return initialState;
};


// eslint-disable-next-line import/no-default-export
export default alertReducer;