import { isLocalStorageSupported, localStore } from "../../helpers/localStorage";
import { ActionTypes, AuthActionTypes } from "./actions";

type IAlertState = {
  isAuthenticated: boolean | null;
}

const initialState: IAlertState = { isAuthenticated: null };

const userReducer = (state = initialState, action: AuthActionTypes):IAlertState => {
  switch (action.type) {
    case ActionTypes.SIGNIN: {
      return triggerSignInUser(action.payload);
    }
    case ActionTypes.SIGNOUT: {
      return triggerSignOutUser();
    }
    case ActionTypes.REFRESHLOGIN: {
      return triggerRefreshLogin();
    }
    default:
      return state;
  }
};

const triggerSignInUser = (token: string) => {
  //  Set token to local storage
  if(isLocalStorageSupported){
    localStore.set("token",token)
  }
  return { isAuthenticated: true };
};

const triggerRefreshLogin = () => {
  return { isAuthenticated: true };
};

const triggerSignOutUser = () => {
  if(isLocalStorageSupported){
   localStore.clear("token")
  }
  return { isAuthenticated: false };
};

// eslint-disable-next-line import/no-default-export
export default userReducer;