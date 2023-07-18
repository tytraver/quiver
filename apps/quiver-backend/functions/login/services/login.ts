import bcrypt from "bcryptjs";

import { buildResponse } from "../utils/response";
import { ERROR_INVALID_USERNAME_OR_PASSWORD, ERROR_NO_USERNAME_OR_PASSWORD, ERROR_USER_DOES_NOT_EXIST } from "../constants/error-messages";
import { generateToken } from "../utils/auth";
import { getUser } from "./user";

export async function login(user) {
  const username = user.username.trim().toLowerCase();
  const password = user.password.trim();
  if (!username || !password) {
    return buildResponse(401, {
      message: ERROR_NO_USERNAME_OR_PASSWORD
    });
  }

  const dynamoUser = await getUser(username);
  if (!dynamoUser || !dynamoUser.username) {
    return buildResponse(401, {
      message: ERROR_USER_DOES_NOT_EXIST
    });
  }

  if (!bcrypt.compareSync(password, dynamoUser.password)) {
    return buildResponse(403, {
      message: ERROR_INVALID_USERNAME_OR_PASSWORD
    });
  }

  const userInfo = {
    username: dynamoUser.username,
    name: dynamoUser.name,
  };

  const token = generateToken(userInfo);
  return buildResponse(200, {
    token: token,
    user: userInfo
  });
}

