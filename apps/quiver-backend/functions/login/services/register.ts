import bcrypt from 'bcryptjs';

import { ERROR_FAILED_TO_SAVE_USER, ERROR_INVALID_USERNAME_OR_PASSWORD, ERROR_MISSING_REQUIRED_FIELDS } from "../constants/error-messages";
import { buildResponse } from "../utils/response";
import { getUser, saveUser } from "./user";

export async function register(userInfo) {
  const name = userInfo.name.trim();
  const email = userInfo.email.trim();
  const username = userInfo.username.trim().toLowerCase();
  const password = userInfo.password.trim();
  if (!name || !email || !username || !password) {
    return buildResponse(400, {
      message: ERROR_MISSING_REQUIRED_FIELDS
    });
  }

  const dynamoUser = await getUser(username);
  if (dynamoUser && dynamoUser.username) {
    return buildResponse(400, {
      message: ERROR_INVALID_USERNAME_OR_PASSWORD
    });
  }

  const encryptedPassword = await bcrypt.hash(password.trim(), 10);
  const user = {
    name: name,
    email: email,
    username: username,
    password: encryptedPassword
  };

  const saveUserResponse = await saveUser(user);
  if (!saveUserResponse) {
    return buildResponse(503, {
      message: ERROR_FAILED_TO_SAVE_USER
    });
  }

  return buildResponse(200, { username: username });
}
