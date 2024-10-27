import { parseCookies } from "nookies";

export const decodeUserInfo = async () => {
  // Get the cookies
  const cookies = parseCookies();

  // Fetch the session token from the cookie
  const sessionToken = cookies["next-auth.session-token"];

  console.log(sessionToken);

  // Proceed to decode or use the token as needed
  return sessionToken;
};
