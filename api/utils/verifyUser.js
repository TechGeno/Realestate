import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    // Check if token exists to authenticate user
    if(!token) return next(errorHandler(401, "Unauthorized"));

    // If token does exit , check if it belongs to that user or not
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(errorHandler(403, "Invalid Token"));
        req.user = user;
        next();
    });

};