export function LoginForm({
  handleSubmit,
  setUsername,
  setPassword,
  username,
  password,
}) {
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
