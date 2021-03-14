// Enum of action types
export enum ActionTypes {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
    CLOSE = "CLOSE",
  }
  
  // Action Interfaces
  interface IErrorAction {
    type: ActionTypes.ERROR;
    payload: string;
  }
  
  interface ISuccessAction {
    type: ActionTypes.SUCCESS;
    payload: string;
  }
  
  interface ICloseAction {
    type: ActionTypes.CLOSE;
    payload: "";
  }
  
  // Dispatch trigger action functions
  
  export const triggerError = (message: string) => {
    return {
      type: ActionTypes.ERROR,
      payload: message,
    };
  };
  
  export const triggerSuccess = (message: string) => {
    return {
      type: ActionTypes.SUCCESS,
      payload: message,
    };
  };
  
  export const triggerClose = () => {
    return {
      type: ActionTypes.CLOSE,
    };
  };
  
  // Alert action Types used in reducer
  export type AlertActionTypes = IErrorAction | ISuccessAction | ICloseAction;