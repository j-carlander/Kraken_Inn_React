export function AccountProfile() {
  return (
    <section>
      <h3>Account</h3>
      <p>Username: {sessionStorage.getItem("USERNAME")}</p>
    </section>
  );
}
