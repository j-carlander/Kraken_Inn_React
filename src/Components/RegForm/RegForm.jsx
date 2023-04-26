import { useState } from "react";
import { fetchAuth } from "../../Service/Fetch/Fetch";
import { useNavigate } from "react-router-dom";

export function RegForm({ setLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePass, setReTypePass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (reTypePass === password) {
      let submitedDetails = {
        username,
        password,
      };
      let registered = await fetchAuth(submitedDetails, "/register");
      if (registered?.acknowledged) {
        setUsername("");
        setPassword("");
        setEmail("");
        setReTypePass("");
        navigate("/login");
      }
      if (registered?.msg) {
        setErrorMsg(registered.msg);
      }
    }
  }
  return (
    <>
      <p className="error-msg">{errorMsg}</p>
      <form onSubmit={handleSubmit} className="register-form">
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
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-group">
          <label htmlFor="reTypePass">Retype Password: </label>
          <input
            className={
              reTypePass !== password && reTypePass.length > 0
                ? "missmatch"
                : ""
            }
            type="password"
            id="reTypePass"
            value={reTypePass}
            onChange={(e) => setReTypePass(e.target.value)}
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
