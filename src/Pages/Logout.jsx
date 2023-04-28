import { Navigate } from "react-router-dom";

export function Logout({ setLoggedIn }) {
  if (localStorage.getItem("JWT_TOKEN")) {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USERNAME");
    setLoggedIn(false);
  }

  return <Navigate to="/" />;
}
