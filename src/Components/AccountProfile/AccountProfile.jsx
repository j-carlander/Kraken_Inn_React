export function AccountProfile() {
  return (
    <section className="profile-section">
      <h3>Account</h3>
      <p>Username: {localStorage.getItem("USERNAME")}</p>
    </section>
  );
}
