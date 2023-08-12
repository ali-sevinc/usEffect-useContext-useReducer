import { useContext } from "react";
import AuthContext from "./auth-context";

function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
export { useAuthContext };
