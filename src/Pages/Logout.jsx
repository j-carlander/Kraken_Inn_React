import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout({ setLoggedIn }) {
  const navigate = useNavigate();

  if (localStorage.getItem("JWT_TOKEN")) {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USERNAME");
  }

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(false);
      navigate("/");
    }, 2000);
  }, [navigate, setLoggedIn]);

  return (
    <>
      <p className="fs-2rem ff-lylas">You are logging out...</p>
    </>
  );
}
