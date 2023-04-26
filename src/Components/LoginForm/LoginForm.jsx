import { useState } from "react";
import { fetchAuth } from "../../Service/Fetch/Fetch";
import { useNavigate } from "react-router-dom";

export function LoginForm({ setLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let submitedDetails = {
      username,
      password,
    };
    const loggedIn = await fetchAuth(submitedDetails, "/login", setLoggedIn);

    if (loggedIn.jwt) {
      sessionStorage.setItem("JWT_TOKEN", loggedIn.jwt);
      setUsername("");
      setPassword("");
      setLoggedIn(true);
      navigate("/");
    }
    if (loggedIn?.msg) {
      setErrorMsg(loggedIn.msg);
    }
  }
  return (
    <>
      <p className="error-msg">{errorMsg}</p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button type="reset">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
