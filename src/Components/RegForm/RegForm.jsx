import { useState } from "react";
import { fetchAuth } from "../Fetch/Fetch";

import "./RegForm.css";

export function RegForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePass, setReTypePass] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let submitedDetails = {
      username,
      password,
    };
    await fetchAuth(submitedDetails, "/register");
    setUsername("");
    setPassword("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>{username}</span>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{password}</span>
        </div>
        <div>
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
          <span>{reTypePass}</span>
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </>
  );
}
