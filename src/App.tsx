import { useEffect } from "react";

import { WELCOME } from "./constants/constants";
import { AlertComponent } from "./shared-components/AlertComponent";
import { LoadingComponent } from "./shared-components/LoadingComponent";

import { useRoutes } from "react-router";
import routes from "./routes";
import { checkToken } from "./services/user";
import { cookieStore } from "./helpers/cookieStorage";
import { useTriggerError } from "./redux/alert/hooks";
import { useTriggerRefreshLogin } from "./redux/user/hooks";

import "./App.css";

function App() {
  const routing = useRoutes(routes);
  const errorAlert = useTriggerError();
  const verifyToken = useTriggerRefreshLogin();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        //Verifiying existed token with backend
        const response = await checkToken();
        if (response?.confirmed) {
          verifyToken();
        }
      } catch (error) {
        errorAlert(error.message);
      }
    };

    const token = cookieStore.get("token");
    if (token) {
      checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <h2>{WELCOME}</h2>
      <main> {routing}</main>
      <AlertComponent />
      <LoadingComponent />
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
function errorAlert(message: any) {
  throw new Error("Function not implemented.");
}
