import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <article className="home-article">
      <div className="title-block">
        <p className="pre-title ff-lylas">Ahoy scallywag,</p>
        <p className="pre-title-smaller ff-lylas">welcome to</p>
        <h1 className="project-title ff-lylas">The Kraken Inn!</h1>
      </div>
      <p className="home-cta ff-lylas">
        Order some grub or maybe some rum{" "}
        <span className="home-cta-smaller">and</span> three Sheets to the Wind
        ye will become!
      </p>
      <NavLink to="/login" className="login-btn ff-lylas">
        Login
      </NavLink>
      <NavLink to="/register" className="reg-btn ff-lylas">
        Register
      </NavLink>
    </article>
  );
}
