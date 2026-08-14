import jwt from "jsonwebtoken";

export function signToken(payload){
    const secret_key = process.env.JWT_SECRET;
    const expires_in = process.env.JWT_EXPIRES_IN;

    if(!secret_key){
        throw new Error("JWT_SECRET is missing in env variables");
    }

    return jwt.sign(payload, secret_key, {expiresIn:expires_in});
}