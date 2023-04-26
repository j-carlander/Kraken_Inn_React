import { useState } from "react";
import { fetchAuth } from "../Fetch/Fetch";

export function LoginForm(props) {
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
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </>
  );
}
