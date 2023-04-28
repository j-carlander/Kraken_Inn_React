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

// Fetch foods
export async function fetchFood() {
  let userToken = localStorage.getItem("JWT_TOKEN");

  if (!userToken) return { msg: "Need to log in" };

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + userToken,
  };

  let response = await fetch("http://127.0.0.1:4000/food", {
    method: "GET",
    headers: headersList,
  });
  let result = await response.json();

  return result;
}

/**
 * Fetch user profile
 * can be used to both get and put details
 */
export async function fetchProfile(method, endpoint, body) {
  let userToken = localStorage.getItem("JWT_TOKEN");

  if (!userToken) return { msg: "Need to log in" };

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + userToken,
  };

  let response = await fetch("http://127.0.0.1:4000/user/" + endpoint, {
    method: method,
    headers: headersList,
    body: JSON.stringify(body),
  });

  return response;
}
