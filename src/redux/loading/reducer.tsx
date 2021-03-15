import { LoadingActionTypes, ActionTypes } from "./actions";

type ILoadingState = {
  loading: boolean;
};

const initialState: ILoadingState = { loading: false };

const loadingReducer = (
  state = initialState,
  action: LoadingActionTypes
): ILoadingState => {
  switch (action.type) {
    case ActionTypes.LOADINGON: {
      return { loading: true };
    }
    case ActionTypes.LOADINGOFF: {
      return { loading: false };
    }
    default:
      return state;
  }
};

// eslint-disable-next-line import/no-default-export
export default loadingReducer;
