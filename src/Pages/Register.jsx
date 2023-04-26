import { RegForm } from "../Components/RegForm/RegForm";

export function Register({ setLoggedIn }) {
  return (
    <article className="page-article">
      <h2>Register</h2>
      <RegForm setLoggedIn={setLoggedIn} />
    </article>
  );
}
