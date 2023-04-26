import { useState } from "react";
import { fetchAuth } from "../Fetch/Fetch";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let submitedDetails = {
      username,
      password,
    };
    await fetchAuth(submitedDetails, "/login");
    setUsername("");
    setPassword("");
  }
  return (
    <>
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
