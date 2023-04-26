import { Navigate } from "react-router-dom";

export function Logout({ setLoggedIn }) {
  if (sessionStorage.getItem("JWT_TOKEN")) {
    sessionStorage.removeItem("JWT_TOKEN");
    setLoggedIn(false);
  }

  return <Navigate to="/" />;
}
