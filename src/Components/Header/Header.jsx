import { NavLink } from "react-router-dom";
import "./Header.css";
import banner from "../../images/main-banner.png";

export function Header({ loggedIn }) {
  return (
    <header className="page-header">
      <nav className="page-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }>
          Home
        </NavLink>
        {!loggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <NavLink
              to="/food"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }>
              Food
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }>
              Profile
            </NavLink>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }>
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <div>
        <img src={banner} alt="" />
      </div>
    </header>
  );
}
