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
  let result = await response.json();

  return result;
}

export async function fetchFood() {
  if (sessionStorage.getItem("JWT_TOKEN")) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
    };

    let response = await fetch("http://127.0.0.1:4000/food", {
      method: "GET",
      headers: headersList,
    });
    let result = await response.json();

    return result;
  }
  return { msg: "Need to log in" };
}
