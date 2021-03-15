import { IStorage } from "../entities/storage";

class CookieStorage implements IStorage {
  get = (name: string) => {
    return this.getCookie(name);
  };

  set = (name: string, value: string) => {
    this.setCookie(name, value);
  };

  clear = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  private readonly setCookie = (
    cookieName: string,
    cookieValue: string,
    exdays = 10
  ) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/;`;
  };

  private readonly getCookie = (cookieName: string) => {
    const name = `${cookieName}=`;
    const ca = document.cookie.split(";");
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.startsWith(" ")) {
        c = c.slice(1);
      }
      if (c.startsWith(name)) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
}

const cookieStore: IStorage = new CookieStorage();

export { cookieStore };
