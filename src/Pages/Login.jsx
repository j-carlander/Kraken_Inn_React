import { LoginForm } from "../Components/LoginForm/LoginForm";

export function Login({ setLoggedIn }) {
  return (
    <article className="page-article">
      <h2>Log in</h2>
      <LoginForm setLoggedIn={setLoggedIn} />
    </article>
  );
}
