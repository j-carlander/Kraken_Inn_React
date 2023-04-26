import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }>
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }>
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
