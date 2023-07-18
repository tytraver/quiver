import { ERROR_NO_USERNAME_OR_PASSWORD } from "../constants/error-messages";
import { verifyToken } from "../utils/auth";
import { buildResponse } from "../utils/response";


export function verify(requestBody) {
  if(!requestBody.user || !requestBody.user.username || !requestBody.token) {
    return buildResponse(401, {
      message: ERROR_NO_USERNAME_OR_PASSWORD
    });
  }

  const username = requestBody.user.username.trim().toLowerCase();
  const token = requestBody.token;
  const verification = verifyToken(username, token);

  if(!verification.verified) {
    return buildResponse(401, {
      message: verification.message
    });
  }

  return buildResponse(200, {
    verified: true,
    message: verification.message,
    user: requestBody.user,
    token: token
  });
}
