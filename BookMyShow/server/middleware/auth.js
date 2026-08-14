import jwt, { decode } from "jsonwebtoken";
import { verifyToken } from "../util/jwt.js";

export const authMiddleware = (req, res, next) => {
  try {
    //read the header
    const authHeader = req.headers.authorization;
    console.log("authHeader", authHeader)
    // check the format
    if(!authHeader){
        return res.status(401).json({
            success: false,
            message: "Authorization header missing",
          });    
    }

    if(!authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            success: false,
            message: "Invalid Authorization format",
          });    
    }

    // extract token
    const token = authHeader.split(" ")[1];
    console.log("token", token);
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Token missing",
          });    
    }
    //payload is returned
    // verify token using server secret key
    const decoded = verifyToken(token);
    console.log("decoded", decoded)
    // if valid , put userId in req object
    req.userId = decoded.userId;

    // call next()
    next();
  } catch (err) {
    return res.status(401).json({
        success: false,
        message: "Invalid or expired token"
    });
  }
};
