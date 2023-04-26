import { RegForm } from "../Components/RegForm/RegForm";
import { useState } from "react";
import { fetchAuth } from "../Service/Fetch/Fetch";
import { useNavigate } from "react-router-dom";

export function Register() {
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
    <article className="page-article">
      <h2>Register</h2>
      <p className="error-msg">{errorMsg}</p>
      <RegForm
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        reTypePass={reTypePass}
        setReTypePass={setReTypePass}
      />
    </article>
  );
}
