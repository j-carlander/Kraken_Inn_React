// Fetch for auth-endpoints, used when Logging in or Register new user
export async function fetchAuth(userDetails, endpoint) {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(userDetails);

  let response = await fetch("http://127.0.0.1:4000/auth" + endpoint, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });
  let result = await response.text();
  console.log(result);
  if (result.includes("jwt")) {
    let json = JSON.parse(result);
    sessionStorage.setItem("JWT_TOKEN", json.jwt);
  }
}
