import jwt from "jsonwebtoken";

export function signToken(payload) {
  const secret_key = process.env.JWT_SECRET;
  const expires_in = process.env.JWT_EXPIRES_IN;

  if (!secret_key) {
    throw new Error("JWT_SECRET is missing in env variables");
  }

  return jwt.sign(payload, secret_key, { expiresIn: expires_in });
}

export function verifyToken(token) {
  try {
    const secret_key = process.env.JWT_SECRET;

    if (!secret_key) {
      throw new Error("JWT_SECRET is missing in env variables");
    }

    return jwt.verify(token, secret_key);
  } catch (err) {
    console.log(err);
  }
}

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);

  // 0 to 0.99  * 900000 = ( 0 to 899999 ) + 100000 = 100000 to 999999
  // we get six digit number b/w 100000 to 999999

}