import { IStorage } from "../entities/storage";

/* eslint-disable @typescript-eslint/explicit-member-accessibility */
class MyLocalStorage implements IStorage {
  get = (name: string) => {
    return localStorage.getItem(name);
  };

  set = (name: string, value: string) => {
    localStorage.setItem(name, value);
  };

  clear = (name: string) => {
    localStorage.setItem(name, "");
  };
}
// Checking if localstorage is supported.
export const isLocalStorageSupported = (() => {
  if (!("localStorage" in window)) {
    return false;
  }

  try {
    const key = "_ls_test_";

    localStorage.setItem(key, key);
    localStorage.getItem(key);
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
})();




const localStore: IStorage = new MyLocalStorage();

export {  localStore };