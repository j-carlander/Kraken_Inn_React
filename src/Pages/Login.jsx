import { LoginForm } from "../Components/LoginForm/LoginForm";

import { useState } from "react";
import { fetchAuth } from "../Service/Fetch/Fetch";
import { useNavigate } from "react-router-dom";

export function Login({ setLoggedIn }) {
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
      localStorage.setItem("JWT_TOKEN", loggedIn.jwt);
      setUsername("");
      setPassword("");
      setLoggedIn(true);
      navigate("/food");
      localStorage.setItem("USERNAME", loggedIn.username);
    }
    if (loggedIn.msg) {
      setErrorMsg(loggedIn.msg);
    }
  }

  return (
    <article className="page-article">
      <h2>Log in</h2>

      <LoginForm
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <p className="error-msg">{errorMsg}</p>
    </article>
  );
}
