// Enum of action types
export enum ActionTypes {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  CLOSE = "CLOSE",
}

// Action Interfaces
type IErrorAction = {
  type: ActionTypes.ERROR;
  payload: string;
};

type ISuccessAction = {
  type: ActionTypes.SUCCESS;
  payload: string;
};

type ICloseAction = {
  type: ActionTypes.CLOSE;
  payload: "";
};

// Dispatch trigger action functions

export const triggerError = (message: string): IErrorAction => {
  return {
    type: ActionTypes.ERROR,
    payload: message,
  };
};

export const triggerSuccess = (message: string): ISuccessAction => {
  return {
    type: ActionTypes.SUCCESS,
    payload: message,
  };
};

export const triggerClose = (): ICloseAction => {
  return {
    type: ActionTypes.CLOSE,
    payload: "",
  };
};

// Alert action Types used in reducer
export type AlertActionTypes = IErrorAction | ISuccessAction | ICloseAction;
