import jwt from 'jsonwebtoken';
export function verifyToken(token: string) {
  try {
    jwt.verify(token, process.env.NEXT_PUBLIC_PRIVATE_KEY);
    return true;
  } catch (err) {
    return false;
  }
}

export function signToken(data: { id: string }) {
  return jwt.sign(data, process.env.NEXT_PUBLIC_PRIVATE_KEY, { expiresIn: '1d' });
}
