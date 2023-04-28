export function AccountProfile() {
  return (
    <section>
      <h3>Account</h3>
      <p>Username: {localStorage.getItem("USERNAME")}</p>
    </section>
  );
}
