import * as jwt from 'jsonwebtoken';

export function generateToken(userInfo) {
  if (!userInfo) {
    return null;
  };

  return jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(username, token) {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return {
        verified: false,
        message: 'invalid token'
      };
    }

    if (decoded.username !== username) {
      return {
        verified: false,
        message: 'invalid username'
      };
    }

    return {
      verified: true,
      message: 'valid token'
    };
  });
}
