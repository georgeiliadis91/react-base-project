import { DUMMY_ENPOINT } from "../constants/constants";
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

  const response = await api.post(DUMMY_ENPOINT, {
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
  const response = await api.post(DUMMY_ENPOINT, data);
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
  
  const response = await api.get(DUMMY_ENPOINT);
  return response;
};

export { signInUser, signOutUser, checkToken };
