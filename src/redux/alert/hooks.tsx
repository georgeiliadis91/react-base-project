import { useDispatch } from "react-redux";

import { triggerClose, triggerError, triggerSuccess } from "./actions";

// custom hook triggers
export function useTriggerSuccess() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSuccess>) =>
    dispatch(triggerSuccess(...args));
}

export function useTriggerError() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerError>) =>
    dispatch(triggerError(...args));
}

export function useTriggerClose() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerClose>) =>
    dispatch(triggerClose(...args));
}
