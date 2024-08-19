import jwt from 'jsonwebtoken';
export function verifyToken(token: string) {
  try {
    jwt.verify(token, process.env.AUTH_SECRET);
    return true;
  } catch (err) {
    return false;
  }
}

export function signToken(data: { id: string }) {
  return jwt.sign(data, process.env.AUTH_SECRET, { expiresIn: '1d' });
}
