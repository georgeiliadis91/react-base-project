import { API } from "../helpers/api";
import { cookieStore } from "../helpers/cookieStorage";

const signInUser = async (
  identifier: string,
  password: string
): Promise<any> => {
  const api = new API({
    headers: {
      Authorization: cookieStore.get("token")
        ? `Bearer ${cookieStore.get("token")}`
        : "",
    },
  });
  const response = await api.post("auth/local", {
    identifier,
    password,
  });
  return response;
};

const signOutUser = async (data: any): Promise<any> => {
  const api = new API({
    headers: {
      Authorization: cookieStore.get("token")
        ? `Bearer ${cookieStore.get("token")}`
        : "",
    },
  });
  const response = await api.post("clients", data);
  return response;
};

const checkToken = async (): Promise<any> => {
  const api = new API({
    headers: {
      Authorization: cookieStore.get("token")
        ? `Bearer ${cookieStore.get("token")}`
        : "",
    },
  });
  const response = await api.get(`users/me`);
  return response;
};

export { signInUser, signOutUser, checkToken };
